import { resolve } from 'path';
import { unlink } from 'fs/promises';

export const removeFile = async (file) => {
  const pathToFile = resolve(file);
  try {
    await unlink(pathToFile);
    console.log(`The file has been removed`);
  } catch (err) {
    console.log(`Operation failed`);
  }
};

