import express from 'express';
const app = express();  
const port = 3000; 

app.get("/", (_, res) => { 
    res.send('Aprendiendo express,ficha 3407181, parchados de la vida jajaja :), esta re breveeee, esta meloooo'); 
});

app.listen(port, () => {
    console.log( `Servidor en funcionamiento en el puerto: `); 
}); 