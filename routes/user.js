import { Router } from 'express';
import UserController from '../controllers/userController.js';


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

/********* Page Form register *********/

userRouter.get("/formRegister", async (req, res) => {

    res.render("./pages/formRegister.twig");
})

userRouter.post('/formRegister', async (req, res) => {
    try {
        await UserController.subscribe(req)
        res.redirect('/');/********* REDIRECT = REDIRIGE vers la route "page utilisateur" ***********/  /******** ON PEUT REDIRIGER QUE VERS DES ROUTE ********/
    } catch (error) {
        res.send(error);
    }
});




export default userRouter