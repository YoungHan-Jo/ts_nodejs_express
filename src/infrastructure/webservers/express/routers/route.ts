import express from "express";
import { userRouter } from "./users";

export const router = express.Router();

router.get('/home', (req, res) => {
    res.send('hello world')
})

router.use('/users', userRouter);
