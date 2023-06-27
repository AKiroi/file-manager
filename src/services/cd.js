export const cd = (args) => {
  try {
    process.chdir(args[0]);
  } catch {
    console.log('Operation failed');
  }
};
