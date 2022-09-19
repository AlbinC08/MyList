import { Router } from 'express';
import productModel from "../models/productModel.js";


productRouter.post('/addProduct/:idList', async (req, res) => {
    try {
        let product = new productModel(req.body)
        await product.save()
        res.redirect('/addProduct')
    } catch (error) {
        console.log(error);
        res.json(error)
    }
});


userRouter.post('/AddList', async (req, res) => {
    try {
        let List = new ListModel(req.body)
        await List.save()
        console.log(List);
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})