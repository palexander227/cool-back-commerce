const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
  const categories = await Category.findAll({
    include: [{
      model: Product
    }]
 });
  res.json(categories); 
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product
    }]
 });
  res.json(category); 
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create({
    category_name: req.body.category_name
  });
  res.json(category);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
    Category.findOne({
    where: {
      id: req.params.id
    },
 }).then(category => {
   if(category){
     category.update({
       category_name: req.body.category_name
      }).then(category => res.json(category))
    } else {res.json('no category with that id found')}
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
 }).then(category => {
   if(category){
     category.destroy().then(() => res.json('category is gone'))
    } else {res.json('no category with that id found')}
    })
});

module.exports = router;
