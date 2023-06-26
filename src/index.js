import { argv } from 'process';
import { stdout } from 'process';
import { homedir } from 'os';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const getUserName = () => {
  const userName = process.argv.slice(2).find((arg) => arg.startsWith('--username='));
  return userName ? userName.split('=')[1] : 'Strange User';
};

let curDir = homedir();

try {
  const userName = getUserName();
  stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  stdout.write(`You are currently in ${curDir}\n`);
} catch (error) {
  console.log(error);
}

const rl = readline.createInterface({ input, output });

rl.on('line', (data) => {
  const command = data.split(' ');
  if (command) {
    stdout.write(`You are currently in ${path}\n`);
  } else {
    stdout.write('Invalid input\n');
  }
});
rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
  process.exit(0);
});
