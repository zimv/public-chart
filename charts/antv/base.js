import { Chart }  from '@antv/g2';
console.log('111')
//监听页面放大缩小
window.addEventListener('resize', onResize);

let resizeTimeout;
let $chart;

function onResize() {
	clearTimeout(resizeTimeout);
	console.log('resize');
	console.log(document.body.clientWidth);
	resizeTimeout = setTimeout(() => {
		$chart && $chart.resize();
	}, 500);
}

export const onMessage = receiveMessage => {
	console.log('onmessage')
	window.addEventListener('message', receiveMessage);
};
export function createChart(option) {
	$chart = new Chart({
		container: 'chart', // 指定图表容器 ID
		width: option.width,
		height: option.height
	});;
	$chart.data(option.data);
	console.log(option.position)
	// Step 3: 创建图形语法，绘制柱状图
	$chart.interval().position(option.position);
	// Step 4: 渲染图表
	$chart.render();
}