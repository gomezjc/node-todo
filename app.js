require('colors');
const Task = require("./models/task");
const {inquirerMenu, inquirerPause} = require("./helpers/inquirer");


const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();
    if (opt !== '0') await inquirerPause();
  }
  while (opt !== '0');
}

main();
