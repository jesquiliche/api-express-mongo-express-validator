const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del modelo de Municipio
const municipioSchema= new Schema({
    id: {
        type: String,
        required: true, // El id del municipio es un campo requerido
    },
    nm: {
        type: String,
        required: true, // El nombre del municipio es un campo requerido
    }
});

// Crear el modelo de Municipio a partir del esquema definido
const Municipio = mongoose.model('Municipio', municipioSchema);

// Exportar el modelo para poder utilizarlo en otros archivos
module.exports = Municipio;
