import express from 'express';
const app = express();  
const puerto = process.env.PUERTO || 3000; 

app.get("/", function(req, res) { 
    res.send('Aprendiendo express,ficha 3407181, parchados de la vida jajaja :), esta re breveeee, esta meloooo'); 
});

app.listen(puerto, () => {
    console.log( `Servidor en funcionamiento en el puerto: ${puerto}`); 
}); 