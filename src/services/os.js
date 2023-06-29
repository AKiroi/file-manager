import { EOL, cpus, userInfo, arch } from 'os';

export const os = (arg) => {
  if (!arg) return console.log('Invalid input');
  try {
    switch (arg) {
      case '--EOL':
        console.log(`EOL: ${JSON.stringify(EOL)}`);
        break;
      case '--cpus':
        const cpuData = cpus().map(({ model, speed }) => {
          return { model: model, 'clock rate': speed / 1000 + 'GHz' };
        });
        console.log(`Amount CPU: ${cpuData.length}`);
        console.table(cpuData);
        break;
      case '--homedir':
        console.log(`Home directory: ${userInfo().homedir}`);
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
