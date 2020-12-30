const fs = require('fs');
const color = require('colors');


let listadoPorHacer = [];


const saveTaskToDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw err;
        console.log("Changes have been saved");
    })
}

const loadDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const geTList = () => {
    loadDB();
    for (let listado of listadoPorHacer) {
        console.log('--------Por hacer--------'.green);
        console.log(`Descripcion: ${listado.descripcion}`);
        console.log(`Estado: ${listado.completado}`);
        console.log('-------------------------'.green);
    }
}

const saveTask = (descripcion) => {
    loadDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    saveTaskToDB();
}

const updateTask = (descripcion, completado = true) => {
    loadDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion == descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveTaskToDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (descripcion) => {
    loadDB();
    let newArr = listadoPorHacer.filter((index) => index.descripcion !== descripcion);
    if (newArr.length == listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = newArr;
        saveTaskToDB();
        return true;
    }
}


module.exports = {
    saveTask,
    geTList,
    updateTask,
    deleteTask
}