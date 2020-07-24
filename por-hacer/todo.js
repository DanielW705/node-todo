const fs = require("fs");
let listadoPorHacer = [];
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("db/data.json", data, (err) => {
    if (err)
      throw new Error(
        `No se pudo grabar por ${err.message}, codigo del error: ${err.code}`
      );
  });
};
const cargarDb = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};
const crear = (descripcion) => {
  cargarDb();
  let porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};
const getListado = () => {
  cargarDb();
  return listadoPorHacer;
};
const actualizar = (descripcion, completado = false) => {
  cargarDb();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};
const borrar = (descripcion) => {
  cargarDb();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
