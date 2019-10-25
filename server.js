const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const {Maestro} = require('./maestros')

console.log(Maestro)

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.get('/',(request,response)=>{
    response.send({message:'Server on'})
})




app.post('/create/maestro',(req,res) => {
    const {
        correo,
        contraseña,
        nombre,
        apellidos,
        gradoMáximo,
        areas,
        foto,
        experiencia,
        acercaDe,
        celular,
        direccion


    } = req.body

    const newTeacher = Maestro({
        correo,
        contraseña,
        nombre,
        apellidos,
        gradoMáximo,
        areas,
        foto,
        experiencia,
        acercaDe,
        celular,
        direccion,
        
    });

    newTeacher.save((err,registroMaestro)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send({message:'Has registrado un nuevo perfil',maestro:registroMaestro})
    })
});


 app.get('/all/maestros',(req,res)=>{
    Maestro.find().populate('maestro').exec()
    .then(Maestro => res.send(Maestro))
    .catch(err => res.status(409).send(err));
});

app.listen(PORT,() => {
    console.log(`Server inicializado en el puerto ${PORT}`)
});
