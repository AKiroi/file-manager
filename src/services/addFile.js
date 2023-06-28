import { resolve } from 'path';
import { createWriteStream } from 'fs';

export const addFile = async (file) => {
  if (!file) return console.log('Invalid input');
  
  try {
    const pathToFile = resolve(file);
    const ws = createWriteStream(pathToFile);
    ws.end();
    ws.on('finish', () => {
      console.log(`The file has been added`);
    });
  } catch {
    console.log(`Operation failed`);
  }
};
