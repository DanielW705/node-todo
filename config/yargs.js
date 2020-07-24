const description = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea que hay por hacer",
  type: "string",
};
const completado = {
  default: false,
  alias: "c",
  desc: "Marca como completado o pendiente la tarea",
  type: "boolean",
};
const argv = require("yargs")
  .command("listar", "Lista los todo")
  .command("crear", "Crea un nuevo todo", {
    description,
  })
  .command("actualizar", "actualiza un todo", {
    description,
    completado,
  })
  .command("borrar", "Borra un todo", {
    description,
  })
  .help().argv;
module.exports = {
  argv,
};
