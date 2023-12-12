import { createServer } from 'vite';
import { spawn } from 'child_process';

const vite = await (await createServer()).listen();
vite.watcher.add('src/**/*.{tsx,ts,html,css}');

let tw = spawn('npm urn tw:watch', { shell: true });
tw.on('close', code => {
	if (code !== null) tw = spawn('npm urn tw:watch', { shell: true });
});

process.on('SIGINT', async () => {
	tw.kill();
	await vite.close();
	process.exit();
});
