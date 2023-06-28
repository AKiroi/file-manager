import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const compressFile = async (curPath, newFilePath) => {
  const curFile = resolve(curPath);
  const { base } = parse(curFile);
  const newFile = resolve(newFilePath, `${base}.gz`);

  try {
    const rs = createReadStream(curFile);
    const ws = createWriteStream(newFile);
    const zip = createBrotliCompress();
    await pipeline(rs, zip, ws);
  } catch {
    console.log(`Operation failed`);
  }
};
