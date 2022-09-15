import { Router } from 'express';
import ListModel from "../models/List.js";

const userRouter = Router()


/********Display Page Home *********/

userRouter.get("/", async (req, res) => {
    
    res.render("./pages/main.twig");
})

/********Display AddListPage *********/

userRouter.get("/addListPage", async (req, res) => {
    
    res.render("./pages/addListPage.twig");
})

/********* Page SettingPage *********/

userRouter.get("/settingPage", async (req, res) => {

    res.render("./pages/settingPage.twig");
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



export default userRouter