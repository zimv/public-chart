//因为在做webpack配置的时候，把三方库作为公共包了，这里引入会导致三方库被再次打包到组件里，不要import引入
import echarts from 'echarts';
//监听页面放大缩小
window.addEventListener('resize', onResize);

let resizeTimeout;
let $chart = echarts.init(document.getElementById('chart'));
let originEvent;

//可以封装所有事件，通过当前base注册，而后所有的图表组件也不用再做任何封装，postMessage发送给调用页面,调用页面自行选择是否接收和使用这些事件
$chart.on('click', (e) => {
	const obj ={
		...e,
		event: 'event会存在重复引用问题，把它设置为空，如果需要其中属性，再单独控制' //e.event会存在重复引用问题，把它设置为空，如果需要其中属性，再单独控制
	}
	if(originEvent){
		window.parent.postMessage(obj,'*');
	}
})
$chart.on('dblclick', (e) => {
	const obj ={
		...e,
		event: 'event会存在重复引用问题，把它设置为空，如果需要其中属性，再单独控制' //e.event会存在重复引用问题，把它设置为空，如果需要其中属性，再单独控制
	}
	if(originEvent){
		window.parent.postMessage(obj,'*');
	}
})

function onResize() {
	clearTimeout(resizeTimeout);
	console.log('resize');
	console.log(document.body.clientWidth);
	resizeTimeout = setTimeout(() => {
		$chart.resize();
	}, 500);
}

export const onMessage = receiveMessage => {
	window.addEventListener('message', (...args) => {
		originEvent = args[0];
		receiveMessage(...args);
	});
};
export function createChart(option) {
	$chart.setOption(option, true);
}
