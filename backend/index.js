import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';
import bookRouter from './router/bookRoute.js'
import userRouter from './router/userRoute.js'
import cors from 'cors'
const app = express();
dotenv.config()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001
const conn = process.env.DBCONN


// MongoDB Connect

try {
    mongoose.connect(conn);
    console.log(`Database connected Successfull`);
} catch (error) {
    console.log('err', error);
}

// routes
app.use('/book', bookRouter)
app.use('/user', userRouter)

const StartApp = async () => {
    try {
        app.listen(port, () => {
            console.log(`Application Running at ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}

StartApp();