

const accionDelUsuario = process.argv[2];

const tareaNueva = process.argv[3]

const funciones = require('./funciones')

switch (accionDelUsuario) {
    case 'listar':
        
        funciones.listar();

    break;

    case 'agregar':

        funciones.agregar(tareaNueva);
        
    break; 

    case 'filtrar':

        funciones.filtrar();
       
    break;

    case undefined:

        console.log('No elegiste nada. Opciones: listar, filtrar o agregar');
    
    break;

    default:

        console.log('Elegiste una opcion incorrecta')
    
    break;
}

