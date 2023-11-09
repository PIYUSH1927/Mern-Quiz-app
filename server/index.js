
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import { Router } from "express";
import router from './router/route.js';

// import mongodb connection file
import connect from './database/conn.js';
import mongoose from 'mongoose';

mongoose.set('strictQuery',false);



const app = express()

// app middlewares
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());
config();

/** appliation port */
const port = process.env.PORT || 4000;



/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


// start server only when we have valid connection
connect().then(() =>{
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)   
        })  
        } catch (error) {
        console.log("cannot connect to server");
        }
}).catch(error => {
    console.log("invalid database connection");
})

