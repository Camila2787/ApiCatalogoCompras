require('dotenv').config()//dependencia par vincular variables de entorno

//importar las clases y los archivos necesarios
const {Server}=require('./models/server')

const server= new Server()//creando instancia

//console.log(server)
server.listen()