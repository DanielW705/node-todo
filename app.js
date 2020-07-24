// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/todo");
const color = require("colors");
const { borrar } = require("./por-hacer/todo");
let comando = argv._[0];
switch (comando) {
  case "crear": {
    let tarea = porHacer.crear(argv.description);
    console.log(tarea);
    break;
  }
  case "listar": {
    let listado = porHacer.getListado();
    listado.forEach((lista) => {
      console.log(
        lista.completado
          ? color.green("===Completado===")
          : color.red("===Por hacer===")
      );
      console.log(lista.descripcion);
      console.log(lista.completado);
    });
    break;
  }
  case "actualizar": {
    let actualizado = porHacer.actualizar(
      argv.description,
      argv.completado === "true"
    );
    console.log(actualizado);
    break;
  }
  case "borrar": {
    let borrado = borrar(argv.description);
    console.log(borrado);
    break;
  }

  default:
    console.log("Comando no reconocido");
}
