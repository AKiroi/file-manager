import { resolve, parse } from 'path';
import { rm } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const moveFile = async (curPath, newFilePath) => {
  if (!curPath && !newFilePath) return console.log('Invalid input');
  const curFile = resolve(curPath);
  const { base } = parse(curFile);
  const newFile = resolve(newFilePath, base);

  try {
    const rs = createReadStream(curFile);
    const ws = createWriteStream(newFile);
    await pipeline(rs, ws);
    await rm(curFile);
    rs.on('error', (error) => {
      console.error('Error reading file:', error.message);
    });
  
    ws.on('error', (error) => {
      console.error('Error writing file:', error.message);
    });
  } catch {
    console.log(`Operation failed`);
  }
};
