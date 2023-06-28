import { resolve, dirname } from 'path';
import { rename } from 'fs/promises';

export const renameFile = async (curFile, newFile) => {
  if (!curFile && !newFile) return console.log('Invalid input');
  const pathToCurFile = resolve(curFile);
  const pathToNewFile = resolve(dirname(pathToCurFile), newFile);
  try {
    await rename(pathToCurFile, pathToNewFile);
    console.log(`The file has been renamed`);
  } catch {
    console.log(`Operation failed`);
  }
};
