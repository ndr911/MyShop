import express from 'express'

const router = express.router()

router.get('/api/products', (req, res) => {
    res.json(products)
  })
  
  router.get('/api/product/:id', (req, res) => {
  const product = products.find(p=> p._id === req.params.id)
  res.json(product)
  })
  
