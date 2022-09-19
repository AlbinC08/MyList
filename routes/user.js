import { Router } from 'express';
import ListModel from "../models/List.js";

const userRouter = Router()


/********Display Page Home *********/

userRouter.get("/", async (req, res) => {
    let List = await ListModel.find()
    res.render("./pages/main.twig", {
        List: List
    });
})

/********Display AddListPage *********/

userRouter.get("/addListPage", async (req, res) => {
    
    res.render("./pages/addListPage.twig");
})

/********Display ListPage *********/

userRouter.get("/listPage/:idlist", async (req, res) => {
    
    res.render("./pages/listPage.twig",{
        idlist: req.params.idlist
    });
})

/********* display SettingPage *********/

userRouter.get("/settingPage", async (req, res) => {

    res.render("./pages/settingPage.twig");
})

/********* display registerPage *********/

userRouter.get("/registerPage", async (req, res) => {

    res.render("./pages/registerPage.twig");
})

/********* display connexionPage *********/

userRouter.get("/connexionPage", async (req, res) => {

    res.render("./pages/connexionPage.twig");
})


/********* AddList *********/

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

/********* Page Trash *********/

userRouter.get("/trash", async (req, res) => {

    res.render("./pages/trash.twig");
})

/********* Page Aide et Contact *********/

userRouter.get("/help", async (req, res) => {

    res.render("./pages/help.twig");
})

/********* Page addProduct *********/

userRouter.get("/addProduct/:idList", async (req, res) => {

    res.render("./pages/addProduct.twig");
})



export default userRouter