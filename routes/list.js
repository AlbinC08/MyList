import { Router } from 'express';
import ListModel from "../models/list.js";

const listRouter = Router()


/********Display AddListPage *********/

listRouter.get("/addListPage", async (req, res) => {
    
    res.render("./pages/addListPage.twig");
})

/********Display ListPage *********/

listRouter.get("/listPage/:idlist", async (req, res) => {
    
    res.render("./pages/listPage.twig",{
        idlist: req.params.idlist
    });
})

/********Display Page Home *********/

listRouter.get("/", async (req, res) => {
    let List = await ListModel.find()
    res.render("./pages/main.twig", {
        List: List
    });
})

/********* AddList *********/

listRouter.post('/AddList', async (req, res) => {
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

listRouter.get("/trash", async (req, res) => {

    res.render("./pages/trash.twig");
})

export default listRouter
