const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


router.post("/products", async (req, res) => {
  try {
    const { name, price, category, image } = req.body;

    if (!name || !price || !category || !image) {
      return res.status(400).json({ message: "All fields required" });
    }

    const product = new Product({
      name,
      price,
      category,
      image,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;










