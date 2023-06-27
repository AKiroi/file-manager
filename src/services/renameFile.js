import { resolve, dirname } from 'path';
import { rename } from 'fs/promises';

export const renameFile = async (curFile, newFile) => {
  const pathToCurFile = resolve(curFile);
  const pathToNewFile = resolve(dirname(pathToCurFile), newFile);
  try {
    await rename(pathToCurFile, pathToNewFile);
    console.log(`The file has been renamed`);
  } catch {
    console.log(`Operation failed`);
  }
};
