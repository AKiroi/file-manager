import { resolve } from 'path';
import fs from 'fs';

export const addFile = async (file) => {
  const targetFile = resolve(file);
  try {
    const ws = fs.createWriteStream(targetFile);
    ws.end();
    ws.on('finish', () => {
      console.log(`The file has been added`);
    });
  } catch (err) {
    console.log(`Operation failed`);
  }
};
