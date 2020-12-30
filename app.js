const { argv } = require('./config/yargs');
const { saveTask, geTList, updateTask, deleteTask } = require('./por-hacer-helper/por-hacer');

let comand = argv._[0];

switch (comand) {
    case 'listar':
        geTList();
        break;

    case 'crear':
        saveTask(argv.descripcion)
        break;

    case 'actualizar':
        updateTask(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        deleteTask(argv.descripcion);
        break;

    default:
        console.log('Comando invalido!');
}