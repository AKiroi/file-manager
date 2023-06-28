import { resolve } from 'path';
import { unlink } from 'fs/promises';

export const removeFile = async (file) => {
  if (!file) return console.log('Invalid input');
  const pathToFile = resolve(file); 
  try {
    await unlink(pathToFile);
    console.log(`The file has been removed`);
  } catch {
    console.log(`Operation failed`);
  }
};

