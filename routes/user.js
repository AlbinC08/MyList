import { Router } from 'express';
import ListModel from "../models/list.js";

const userRouter = Router()


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


/********* Page Aide et Contact *********/

userRouter.get("/help", async (req, res) => {

    res.render("./pages/help.twig");
})





export default userRouter