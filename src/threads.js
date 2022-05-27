const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
	new Worker(__filename, {
		workerData: [7, 6, 3, 4, 1],
	});
	new Worker(__filename, {
		workerData: [7, 6, 3, 4, 1],
	});
} else {
	console.log('Worker');
	console.log(`${workerData} sorted is ${workerData.sort()}`);
}
