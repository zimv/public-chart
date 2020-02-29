import { onMessage, createChart } from '../base';

onMessage(e => {
	console.log(e);
	const { keys, stacks, option } = e.data;
	//加强判断，避免webpack等其它数据
	if (!keys || !stacks) return;

	stacks.forEach((item, i) => {
		stacks[i] = Object.assign(
			{
				stack: 1
			},
			item,
			{
				type: 'bar',
				itemStyle: {
					color: item.color
				}
			}
		);
	});
	const opt = setOption(keys, stacks, option || {});
	createChart(opt);
});
//默认配置
const _defaultOpt = {
	keyColor: '#333'
};
function setOption(keys, stacks, customOption) {
	let _keyColor = customOption.keyColor || _defaultOpt.keyColor;
	let option = {
		grid: {
			left: 0,
			top: 0,
			right: 0,
			bottom: '15%'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
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
		series: stacks
	};
	option = Object.assign({}, option, customOption);
	return option;
}
