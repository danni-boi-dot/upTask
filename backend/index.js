import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();

dotenv.config();

conectarDB();

// Routing
app.use('/', (req,res)=>{
    res.send('Hola ÑOÑO')
})

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => {
  console.log(`Servidor puerto ${PORT}`);
});
