import { Router } from 'express';
import ListModel from "../models/List.js";

const userRouter = Router()


/******** Page Home *********/

userRouter.get("/", async (req, res) => {
    
    res.render("./main.twig");
})


/******** AddListPage *********/

userRouter.get("/AddListPage", async (req, res) => {
    
    res.render("./AddListPage.twig");
})







export default userRouter