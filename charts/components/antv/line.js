import { onMessage, createChart } from './base';
console.log('000');
//hicharts只是一个用例，说明可以支持多图表库，这里不做代码封装
onMessage(e => {
	console.log(e);
	const { 
		position,
		data,
		width,
		height 
	} = e.data;
	createChart({
		position,
		data,
		width,
		height
	});
});