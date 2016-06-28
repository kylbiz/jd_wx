Template.tzlc.helpers({
	list: function () {
		return [
			{
				step: '第一步  地块（厂房）选址',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第二步  签订合同',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第三步  项目审批及企业登记',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第四步  项目设立',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第五步  项目建设',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第六步  项目竣工验收',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
		]
	}
});



Template.tzlc.events({
	'click li': function (e) {
		e.preventDefault();
		var li = e.currentTarget;
		$(li).next("div").toggle("active");
	}
});