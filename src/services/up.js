export const up = () => {
  try {
    process.chdir('..');
  } catch (e) {
    console.error('Operation failed');
  }
};
