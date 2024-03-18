const mongoose=require('mongoose')//dependencia para emplear moongoose
const dbConection = async() =>{
    try {
        //establecer la conexión
        mongoose.connect(process.env.MONGO_CNN)
        console.log('conexion exitosa')
    } catch (error) {
        console.log(error)
        
    }


}
//exportar la cadena de conexion
module.exports= {dbConection}
