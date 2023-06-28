import { readdir } from 'fs/promises';
import { cwd } from 'process';

export const ls = async ([path]) => {
  if (path) return console.log('Invalid input');
  try {
    const files = await readdir(cwd(), { withFileTypes: true });

    const data = files
      .reduce((acc, item) => {
        if (item.isFile()) {
          acc.push({
            name: item.name,
            type: 'file',
          });
        } else {
          acc.push({
            name: item.name,
            type: 'directory',
          });
        }
        return acc;
      }, [])
      .sort((a, b) => a.type.localeCompare(b.type));

    console.table(data);
  } catch {
    console.error('Operation failed');
  }
};
