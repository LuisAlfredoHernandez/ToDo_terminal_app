const createTaskObject = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: "descripcion de la tarea por hacer"
    }
}

const updateTaskObject = {
    descripcion: createTaskObject.descripcion,
    completado: {
        default: true,
        alias: 'c'
    }
}

const deleteTaskObject = {
    descripcion: createTaskObject.descripcion,
}


const { argv } = require('yargs')
    .command('crear', 'Crear un elemento por hacer', createTaskObject)
    .command('actualizar', 'Actualiza el estado completado de una tarea', updateTaskObject)
    .command('borrar', 'Borra una tarea especifica del monton', deleteTaskObject)
    .help();


module.exports = {
    argv
}