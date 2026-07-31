//const express =require("express")
import express from 'express';
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();  
const puerto = process.env.PUERTO 

app.get("/", function(req, res) { 
    res.send('Aprendiendo express,ficha 3407181, parchados de la vida jajaja :), esta re breveeee, esta meloooo, hoy estamos a 31, ya se acabo el mes jajaja'); 
});

app.listen(puerto, () => {
    console.log( `Servidor en funcionamiento en el puerto: ${puerto}`); 
}); 