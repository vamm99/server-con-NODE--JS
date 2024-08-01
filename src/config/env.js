// En este archivo env.js vamos a configurar todas las ariables de 
//entorno 

import { config } from "dotenv";
import env from "env-var";

// Usamos para que nuestrasa variables de entorno esten disponible 
// en process
config();

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString()
}



