import { resolve } from 'path';
import { createReadStream } from 'fs';

export const readFile = (file) => {
  if (!file) return console.log('Invalid input');
  try {
    const pathToFile = resolve(file);
    const rs = createReadStream(pathToFile);
    rs.pipe(process.stdout);
    rs.on('end', console.log);
  } catch {
    console.log(`Operation failed`);
  }
};

