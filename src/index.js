import { stdout, cwd, argv } from 'process';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { up } from './services/up.js';
import { cd } from './services/cd.js';

const getUserName = () => {
  const userName = argv.slice(2).find((arg) => arg.startsWith('--username='));
  return userName ? userName.split('=')[1] : 'Strange User';
};

try {
  const userName = getUserName();
  stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  stdout.write(`You are currently in ${cwd()}\n`);
} catch (error) {
  console.log(error);
}

const rl = readline.createInterface({ input, output });

rl.on('line', (data) => {
  let [command, ...params] = data.trim().split(' ');
  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      cd(params);
      break;
    case ".exit":
      rl.close();
      break;
  }
  stdout.write(`You are currently in ${cwd()}\n`)  
});
rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
  process.exit(0);
});
