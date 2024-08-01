import express from 'express'
import path from 'path'


export const startServer = (opcions) => {
    //Desestructuramos lo que viene de opcions
    const { port, public_path = 'public' } = opcions



    //Colocamos todo lo que tiene express en app
    const app = express();

    // Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)); //Contenido estático que ponemos disponible

    //Creeamos la ruta
    app.get('*', (req, res) => {

        //Guardamos en indexPath por medio path.join la dirección en donde se 
        //encuentra la página estática
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);

        res.sendFile(indexPath);
    })

    //Escuchar en el navegador por el puerto
    app.listen(port)
}