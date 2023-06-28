import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const copyFile = async (curPath, newFilePath) => {
  if (!curPath && !newFilePath) return console.log('Invalid input');
  const curFile = resolve(curPath);
  const { base } = parse(curFile);
  const newFile = resolve(newFilePath, base);

  try {
    const rs = createReadStream(curFile);
    const ws = createWriteStream(newFile);
    await pipeline(rs, ws);
  } catch {
    console.log(`Operation failed`);
  }
};
