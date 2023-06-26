import { resolve, parse } from 'path';
import { rm } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const moveFile = async (curPath, newFilePath) => {
  const curFile = resolve(curPath);
  const { base } = parse(curFile);
  const newFile = resolve(newFilePath, base);

  try {
    const rs = createReadStream(curFile);
    const ws = createWriteStream(newFile);
    await pipeline(rs, ws);
    await rm(curFile);
  } catch {
    console.log(`Operation failed`);
  }
};
