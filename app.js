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
//otro endpoint
app.get("/otraruta", (req, res)=>{
    //usando template string
    res.send(`<h1>Otro ejemplo de ruta</h1>
        <h2>End point con res.send</h2>
        `)
})

app.get("/ruta2", (req, res)=>{
    //usando template string
    res.json({"Nombre": "Santiago", "Apellido": "Sierra", "Cargo": "Aprendiz"})
})

app.get("/ruta3/:aprendiz/:otrodato", (req, res)=>{
    const dato_aprendiz = req.params.aprendiz
    const otro_dato = req.params.otrodato
    res.json({"nombre": dato_aprendiz, "Otro": otro_dato})
})

app.get("/ruta4", (req, res)=>{
    //capturar el parametro de consulta query
    const orden = req.query.orden || "sin ordenar"
    const pagina = req.query.pagina || 1

    res.send(`<h1>Listado de aprendices</h1>
        <p>El listado esta en orden ${orden}</p>
        <p>Pagina: ${pagina}</p>
        `)
})


app.listen(puerto, () => {
    console.log( `SERVIDOR: http://localhost:${puerto}`)
}); 