import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress  } from 'zlib';
import { pipeline } from 'stream/promises';

export const compressFile = async (curPath, newFilePath) => {
  const curFile = resolve(curPath);
  const { base } = parse(curFile);
  const newFile = resolve(newFilePath, base);

  try {
    const rs = createReadStream(curFile);
    const ws = createWriteStream(newFile);
    const zip = createBrotliDecompress();
    await pipeline(rs, zip, ws);
  } catch {
    console.log(`Operation failed`);
  }
};
