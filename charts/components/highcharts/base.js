import Highcharts from 'highcharts';
//require('highcharts/modules/exporting')(Highcharts);
//监听页面放大缩小
window.addEventListener('resize', onResize);
console.log(123)

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
	console.log(5432)
	window.addEventListener('message', receiveMessage);
};
export function createChart(option) {
	//$chart.setOptions(option, true);
	$chart = Highcharts.chart('chart', option);
}