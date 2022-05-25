const express = require('express');

const app = express();

function delay(duration) {
	const startTime = Date.now();

	while (Date.now() - startTime < duration) {}
}

app.get('/', (_, res) => {
	res.send('Performance example');
});

app.get('/timer', (req, res) => {
	delay(9000);
	res.send('Ding ding ding!');
});

app.listen(8000, () => {
	console.log('App running and listening to PORT 3000');
});
