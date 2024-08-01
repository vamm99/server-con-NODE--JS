//Importamos las variables de entorno ya configuradas desde el archivo env.js
import { envs } from "./config/env.js";

//Importamos la función del archivo server.js
import { startServer } from "./server/server.js";

const main = () => {
    //Esta función resibe como parametro un objeto 
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Función auto combocada
// Función agnostica auto combocada
// Agnostica porque no tiene nombre
(
    async () => {
        main();

    }
)()

