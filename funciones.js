const fs = require('fs');

/*const data = fs.readFileSync('tareas.json', 'utf-8')

const tareas = JSON.parse(data);
*/


const funciones = {

    leerJSON: function () {
        return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'))
    },

    escribirJSON: function(tareas) {
        return fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, ' '))
    },

    listar () {
        console.log('El usuario eligió listar');
        /*
        Llamar a la funcion leerJSON
        Guardar la info de la llamada en una variable
        Recorrer y consologuear la info (forEach)
        Darle formato a la informacion
        */
       const tareas= this.leerJSON()
       tareas.forEach((tarea, i) => {
           console.log(i+1 + ')'+ tarea.titulo + ' - '+tarea.estado)
           
       });
    },
    agregar() {
        console.log('El usuario eligió agregar');
    },
    filtrar() {
        console.log('El usuario eligió filtrar');
    }
}

module.exports = funciones;