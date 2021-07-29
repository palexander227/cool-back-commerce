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
  const category = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product
    }]
 });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
