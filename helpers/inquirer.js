require('colors');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear Tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar Tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar Tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar Tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea(s)`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.clear();
  console.log("====================================".green);
  console.log("Seleccione una opcion".white);
  console.log("====================================\n".green);

  const {option} = await inquirer.prompt(questions);
  return option;
}

const inquirerPause = async () => {
  console.log('\n');
  return await inquirer.prompt({
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.green} para continuar: \n`,
  });
}

module.exports = {
  inquirerMenu,
  inquirerPause
}
