const fs = require('fs');
const data = fs.readFileSync('tareas.json', 'utf-8')

const tareas = JSON.parse(data);



const funciones = {
    listar () {
        console.log('El usuario eligió listar');
    },
    agregar() {
        console.log('El usuario eligió agregar');
    },
    filtrar() {
        console.log('El usuario eligió filtrar');
    }
}

module.exports = funciones;