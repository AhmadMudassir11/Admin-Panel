import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import path from "path";
import userRouter from './Routes/userRouter.js'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import roleRouter from './Routes/roleRouter.js'
import permissionRouter from './Routes/permissionRouter.js'



dotenv.config({
    path: path.resolve('config.env'),
});

dotenv.config({ path: './config.js' })
const DB = process.env.DATABASE
// console.log(DB)
const app = express();

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}));
app.use(cors())

// Cookie Parser
app.use(cookieParser())

// Body parser
app.use(express.json())

// Routes
app.use('/user', userRouter)
app.use('/role', roleRouter)
app.use('/permission', permissionRouter)




mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => console.log('DB connection successful!'));

// mongoose.connect(DB,{ useNewUrlParser: true }, function (err) {
//     if (err) throw err; console.log('Successfully connected'); });

const Port = process.env.PORT || 5000
app.listen(Port, () =>
    console.log(`Example app listening on port ${Port}!`),
);