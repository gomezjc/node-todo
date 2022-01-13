require('colors');

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("====================================".green);
    console.log("Seleccione una opcion".green);
    console.log("====================================\n".green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas completadas`);
    console.log(`${'4.'.green} Listar Tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea(s)`);
    console.log(`${'0.'.green} Salir \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Seleccione una opcion: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
}

const pause = () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar: \n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
}

module.exports = {
  showMenu,
  pause
}
