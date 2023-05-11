const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product 
    });
    if (!category) {
      res.status(404).json({ message: 'no category' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (!category[0]) {
      res.status(404).json({ message: 'no category' });
    } else {
      res.status(200).json({ message: 'category updated' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const category = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!category) {
      res.status(404).json({ message: 'no category' });
    } else {
      res.status(200).json({ message: 'category deleted' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
