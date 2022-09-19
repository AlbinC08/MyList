import { Router } from 'express';
import productModel from "../models/productModel.js";

const productRouter = Router()


/********* add Product *********/


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

/********* display Page addProduct *********/

productRouter.get("/addProduct/:idList", async (req, res) => {

    res.render("./pages/addProduct.twig");
})

export default productRouter
