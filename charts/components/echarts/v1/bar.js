import { onMessage, createChart } from '../base';

onMessage(e => {
	console.log(e);
	const { name, keys, values, option } = e.data;
	//加强判断，避免webpack等其它数据
	if (!keys || !values) return;
	const opt = setOption(name, keys, values, option || {});
	createChart(opt);
});
//默认配置
const _defaultOpt = {
	color: ['#3398DB'],
	keyColor: '#333'
};
function setOption(name, keys, values, customOption) {
	let _color = customOption.color || _defaultOpt.color;
	let _keyColor = customOption.keyColor || _defaultOpt.keyColor;

	let option = {
		color: _color,
		grid: {
			left: 0,
			top: '10%',
			right: 0,
			bottom: '15%'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a}: {c}'
		},
		xAxis: [
			{
				type: 'category',
				data: keys,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: _keyColor
				}
			}
		],
		yAxis: [
			{
				show: false,
				axisLine: {
					show: true
				},
				axisTick: {
					show: true
				},
				type: 'value'
			}
		],
		series: [
			{
				label: {
					position: 'top',
					show: true,
					formatter: '{c}',
					color: _color
				},
				name: name,
				type: 'bar',
				data: values
			}
		]
	};
	option = Object.assign({}, option, customOption);
	return option;
}
