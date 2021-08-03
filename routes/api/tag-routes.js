const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{
      model: Product
    }]
 });
  res.json(tags); 
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product
    }]
 });
  res.json(tag);
});

router.post('/', async (req, res) => {
  // create a new tag
  const tag = await Tag.create({
    tag_name: req.body.tag_name
  });
  res.json(tag);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
 Tag.findOne({
    where: {
      id: req.params.id
    },
 }).then(tag => {
   if(tag){
     tag.update({
       tag_name: req.body.tag_name
      }).then(tag => res.json(tag))
    } else {res.json('no tag with that id found')}
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.findOne({
    where: {
      id: req.params.id
    },
 }).then(tag => {
   if(tag){
     tag.destroy().then(() => res.json('tag is gone'))
    } else {res.json('no tag with that id found')}
    })
});

module.exports = router;
