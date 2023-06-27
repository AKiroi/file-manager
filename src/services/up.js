export const up = () => {
  try {
    process.chdir('..');
  } catch {
    console.error('Operation failed');
  }
};
