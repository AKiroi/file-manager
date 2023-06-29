export const up = ([path]) => {
  if (path) return console.log('Invalid input');
  try {
    process.chdir('..');
  } catch {
    console.error('Operation failed');
  }
};
