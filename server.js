import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js'

const app = express();

app.use(bodyParser.json());

//User router
app.use('/api', userRouter)

//recipeRouter
app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://shaweznoor776:GGDmElCQxbR0zD3P@cluster0.3fyh7.mongodb.net/",{
    dbName: "RECIPE_APP",
}).then(()=>console.log("MongoDb is connected..!")).catch((err)=>console.log(err.message));

const port = 3000; //anything you want

app.listen(port, () => console.log(`server is running on port ${port}`)) //server ko chalu karne ke liye

//user_name = shaweznoor776
//pass = GGDmElCQxbR0zD3P