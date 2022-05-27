const express = require('express');

const app = express();

function delay(duration) {
	const startTime = Date.now();

	while (Date.now() - startTime < duration) {}
}

app.get('/', (_, res) => {
	res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
	delay(9000);
	res.send('Ding ding ding!');
});

app.listen(8000, () => {
	console.log(`App running with worker ${process.pid} and listening to PORT 8000`);
});

/**
 *
 * Important PM2 Command:
 *
 * 1. pm2 start <filename> -i <number of cluster>
 *
 *    to start a server
 *
 * 	  -- args --
 *    <filename> file name of your entry point
 *    -i is for using cluseting
 *    <number of cluster> you can put a number or 'max' for dividing worker
 *
 * 2. pm2 kill
 *
 *    to kill all process running
 *
 * 3. pm2 stop <id>
 *
 *    to stop an instance
 *
 *    args:
 *    <id> id of running instance
 *
 * 4. pm2 log
 *
 *    to log information of running instance
 *
 * 5. pm2 monit
 *
 *    to monitor running proccesses
 */
