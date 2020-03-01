import { onMessage, createChart } from './base';

//hicharts只是一个用例，说明可以支持多图表库，这里不做代码封装
onMessage(e => {
	console.log(e);
	const { option } = e.data;
	createChart(option);
});
console.log(68788787)