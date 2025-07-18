const express= require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/products',async(req, res) => {
    try{
        const product=new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get('/products', async (req, res) => {
    try{
        const product= await Product.find();
        res.status(200).send(product);
    }catch(err){
        res.status(500).send(err);
    }
})

router.get('/products/:id', async (req, res) => {
    try{
        const product= await Product.findById(req.params.id);
        if(!product){
            return res.status(404).send();
        }
        res.status(200).send(product);
    }catch(err){
        res.status(500).send(err);
    }
})

router.put('/products/:id',async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            overwrite:true
        });
        if(!product){
            return res.status(404).send();
        }
        res.status(200).send(product);
    }catch(err){
        res.status(500).send(err);
    }
});

router.delete('/products/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = router;