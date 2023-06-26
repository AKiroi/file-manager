import { resolve } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const hashFile = (file) => {
  const pathToFile = resolve(file);

  try {
    const rs = createReadStream(pathToFile);
    const hash = createHash('sha256').setEncoding('hex');
    rs.pipe(hash).pipe(process.stdout);
    rs.on('end', console.log);
  } catch {
    console.log(`Operation failed`);
  }
};
