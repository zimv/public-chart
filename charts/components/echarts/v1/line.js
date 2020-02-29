import { onMessage, createChart } from '../base';

onMessage(e => {
	console.log(e);
	const { keys, lines, option } = e.data;
	//加强判断，避免webpack等其它数据
	if (!keys || !lines) return;

	//如果color存在就赋值itemStyle，否则echarts默认有颜色
	lines.forEach((item, i) => {
		lines[i] = Object.assign(item, {
			type: 'line',
			lineStyle: {
				color: item.color,
				width: item.width
			}
		});
	});
	const opt = setOption(keys, lines, option || {});
	createChart(opt);
});
function setOption(keys, lines, customOption) {
	let option = {
		grid: {
			left: '5%',
			top: '10%',
			right: '5%',
			bottom: '15%'
		},
		toolbox: {
			show: true
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a}: {c}'
		},
		xAxis: {
			type: 'category',
			data: keys
		},
		yAxis: {
			type: 'value'
		},
		series: lines
	};
	option = Object.assign({}, option, customOption);
	return option;
}
