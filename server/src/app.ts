import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

const port: number = 3000;

app.get("/toto", (req: Request, res: Response) => {
  res.send(`env: ${process.env.NODE_ENV}, aaa: ${process.env.AAA}`);
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
