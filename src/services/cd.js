export const cd = (args) => {
  if (!args) {
    return console.log('Invalid input');
  } else {
    try {
      process.chdir(args[0]);
    } catch {
      console.log('Operation failed');
    }
  }
};
