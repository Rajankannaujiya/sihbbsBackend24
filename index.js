
import 'dotenv/config'
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "*",
  credentials:true
 }
  ));

  app.use(express.json({ limit: '10mb' })); // 10MB limit for JSON
app.use(express.urlencoded({ extended: false, limit: '10mb' })); // 10MB limit for URL-encoded


  app.get("/", (req, res)=>{
    res.status(201).send("hello from the server");
  })
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
})