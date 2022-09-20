import { Router } from 'express';
import productModel from "../models/productModel.js";
import ListModel from '../models/list.js';

const productRouter = Router()

/********* display Page addProduct *********/

productRouter.get("/addProduct/:idList", async (req, res) => {
    let idList = req.params.idList
    let list = await ListModel.findOne({ _id: req.params.idList }).populate('ListProduct')
    let products = list.ListProduct;
    console.log(products);
    res.render("./pages/addProduct.twig",{
        list: list,
        products: products
    });
})

/********* add Product *********/

productRouter.post('/addProduct/:idList', async (req, res) => {
    try {
        req.body.list = req.params.idList
        let product = new productModel(req.body)
        await product.save()
        await ListModel.updateOne({ _id: req.params.idList }, { $push: { ListProduct: product._id } })
        res.redirect(req.get('referer'));
    } catch (error) {
        console.log(error);
        res.json(error)
    }
});

export default productRouter
