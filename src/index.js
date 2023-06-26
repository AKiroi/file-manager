import { stdout, cwd, argv } from 'process';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { up } from './services/up.js';
import { cd } from './services/cd.js';
import { ls } from './services/ls.js';
import { os } from './services/os.js';
import { addFile } from './services/addFile.js';
import { removeFile } from './services/removeFile.js';
import { renameFile } from './services/renameFile.js';
import { readFile } from './services/readFile.js';
import { moveFile } from './services/moveFile.js';
import { copyFile } from './services/copyFile.js';
import { hashFile } from './services/hashFile.js';

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

rl.on('line', async (data) => {
  const [command, ...params] = data.trim().split(' ');
  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      cd(params);
      break;
    case 'ls':
      await ls();
      break;
    case 'os':
      os(params[0]);
      break;
    case 'add':
      await addFile(params[0]);
      break;
    case 'rm':
      await removeFile(params[0]);
      break;
    case 'cat':
      readFile(params[0]);
      break;
    case 'rn':
      await renameFile(params[0], params[1]);
      break;
    case 'mv':
      await moveFile(params[0], params[1]);
      break;
    case 'cp':
      await copyFile(params[0], params[1]);
      break;
    case 'hash':
      hashFile(params[0]);
      break;
    case '.exit':
      rl.close();
      break;
  }
  stdout.write(`You are currently in ${cwd()}\n`);
});
rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
  process.exit(0);
});
