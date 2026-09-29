const http = require('http');
const { exec, spawn } = require('child_process');

function checkServer() {
  return new Promise((resolve) => {
    http.get('http://localhost:3000/api/content', (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => {
      resolve(false);
    });
  });
}

function openBrowser() {
  const url = 'http://localhost:3000/admin';
  const startCmd = process.platform === 'win32'
    ? `start "" "${url}"`
    : process.platform === 'darwin'
    ? `open "${url}"`
    : `xdg-open "${url}"`;
  exec(startCmd);
  console.log(`\n==================================================`);
  console.log(`CMS Admin is LIVE at: ${url}`);
  console.log(`Authorized Email: vivekdhoundiyal2901@gmail.com`);
  console.log(`Passphrase: ${process.env.ADMIN_PASSWORD || 'Configured in .env.local'}`);
  console.log(`==================================================\n`);
}

async function main() {
  const isRunning = await checkServer();
  if (isRunning) {
    console.log('Next.js server is already active on http://localhost:3000');
    openBrowser();
  } else {
    console.log('Starting Next.js production server on http://localhost:3000...');
    const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['start'], {
      stdio: 'inherit',
      shell: true
    });
    // Wait for server to come up
    let attempts = 0;
    const interval = setInterval(async () => {
      attempts++;
      const up = await checkServer();
      if (up) {
        clearInterval(interval);
        openBrowser();
      } else if (attempts > 30) {
        clearInterval(interval);
        console.error('Server took too long to start.');
      }
    }, 1000);
  }
}

main();
