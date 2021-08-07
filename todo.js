const fs = require('fs');
const data = fs.readFileSync('tareas.json', 'utf-8')

const tareas = JSON.parse(data);

const accionDelUsuario = process.argv[2];

switch (accionDelUsuario) {
    case 'listar':
       
    break;
    case 'agregar':
        
    break; 
    case 'filtrar':
       
    break;
    case undefined:
        console.log('No elegiste nada. Opciones: listar, filtrar o agregar');
    break;
    default:
        console.log('Elegiste una opcion incorrecta')
    break;
}

