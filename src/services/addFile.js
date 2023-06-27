import { resolve } from 'path';
import { createWriteStream } from 'fs';

export const addFile = async (file) => {
  const pathToFile = resolve(file);

  try {
    const ws = createWriteStream(pathToFile);
    ws.end();
    ws.on('finish', () => {
      console.log(`The file has been added`);
    });
  } catch {
    console.log(`Operation failed`);
  }
};
