import express from 'express';
import mongoose from "mongoose";
import userRouter from './routes/user.js';
import listRouter from './routes/list.js';
import productRouter from './routes/product.js';
import cors from 'cors';
import session from 'express-session';
import 'dotenv/config';


const db = process.env.BDD_URL
const app = express()
const router = express.Router()
app.use(session({secret: process.env.SECRET_KEY ,saveUninitialized: true,resave: true}))
app.use(express.static('./assets'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
router.use(userRouter)
router.use(listRouter)
router.use(productRouter)



app.listen(process.env.PORT, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log(`connected to ${process.env.APP_URL}`);
    }
})

mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connected to database mongodb (c'est dur....)");
    }
})

export default router
