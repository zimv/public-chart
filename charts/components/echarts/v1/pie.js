import { onMessage, createChart } from '../base';

onMessage(e => {
	console.log(e);
	const { name, values, option } = e.data;
	//加强判断，避免webpack等其它数据
	if (!values || values.length == 0) return;
	//如果color存在就赋值itemStyle，否则echarts默认有颜色
	values.forEach(item => {
		if (item.color)
			item.itemStyle = {
				color: item.color
			};
	});
	const opt = setOption(name, values, option || {});
	createChart(opt);
});
function setOption(name, values, customOption) {
	let option = {
		grid: {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b} <br/>{a} : {c} ({d}%)'
		},
		toolbox: {
			show: true
		},
		series: [
			{
				name: name,
				type: 'pie',
				radius: ['10%', '70%'],
				center: ['50%', '50%'],
				data: values
			}
		]
	};
	option = Object.assign({}, option, customOption);
	return option;
}
