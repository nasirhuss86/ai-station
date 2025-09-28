import express from 'express';
import cors from 'cors';
import  { clerkMiddleware, requireAuth } from '@clerk/express';


import 'dotenv/config';

const app  = express();


app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

const PORT = process.env.PORT|| 3000;

app.get('/' , (req,res)=> res.send('Hello World') )

app.use(requireAuth())

app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`) );