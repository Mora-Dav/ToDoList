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
    agregar(tarea) {
        console.log('El usuario eligió agregar');
        /*
        buscar el archivo y leerlo
        guardar archivo en memoria(variable)
        obtener la tarea desde el parametro
        transformar en objeto tipo tarea
        sumar tarea al objeto
        guardar nuevo array en archivo
        Informar que la tarea se guardó correctamente

        */
       const tareas= this.leerJSON();
       const nuevaTarea = {
           titulo: tarea,
            estado: 'pendiente'
        }
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
        console.log ('tarea guardada con éxito');

    },

    filtrar(estado) {
        console.log('El usuario eligió filtrar');
        /* 
        leer el JSON
        filtramos array con .filter
        consologueamos el array filtrado

        */
    }
}

module.exports = funciones;