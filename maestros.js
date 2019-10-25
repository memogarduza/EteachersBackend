const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://guillermogarduza:becks232323@cluster0-v9ifx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(error) => {
    if(!error){
        console.log('Conexión existosa con mongoDB')
    }else{
        console.log(error)
    }
})

const Schema = mongoose.Schema;


const maestroSchema = new Schema({
    correo: String,
    contraseña :String,
    nombre: String,
    apellidos: String,
    gradoMaximo: String,
    areas: String,
    foto:[String],
    experiencia: String,
    acercaDe: String,
    celular: Number,
    direccion: String,


},{timestamps:true});

const Maestro = mongoose.model('maestros',maestroSchema);

module.exports = {
    Maestro
}