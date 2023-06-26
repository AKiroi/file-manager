import { resolve } from 'path';
import { createReadStream } from 'fs';

export const readFile = (file) => {
  const pathToFile = resolve(file);
  try {
    const rs = createReadStream(pathToFile);
    rs.pipe(process.stdout);
    rs.on('end', console.log);
  } catch (err) {
    console.log(`Operation failed`);
  }
};

