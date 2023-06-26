export const cd = (args) => {
  try {
    process.chdir(args[0]);
  } catch (e) {
    console.error('Operation failed');
  }
};
