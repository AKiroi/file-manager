import { EOL, cpus, userInfo, arch } from 'os';

export const os = (args) => {
  try {
    switch (args[0]) {
      case '--EOL':
        console.log(os.EOL);
        break;
      case '--cpus':
        console.log(`Amount CPU: ${cores.length}`);
        const cpuData = cpus().map(({ model, speed }) => {
          return { model: model, 'clock rate': speed / 1000 + 'GHz' };
        });
        console.table(cpuData);
        break;
      case '--homedir':
        console.log(`Home directory: ${homedir()}`);
        break;
      case '--username':
        console.log(`UserName: ${userInfo().username}`);
        break;
      case '--architecture':
        console.log(`Architecture: ${arch()}`);
        break;
      default:
        console.log('Invalid input');
        break;
    }
  } catch {
    console.log('Operation failed');
  }
};
