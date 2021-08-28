var prevMonth = "month_menu9";
var nowMonth = "month9";

function monthClick(value) {
	nowMonth = 'month' + value;
	var idName = "month" + value;
	var idMenuName = "month_menu" + value;
	var delIdName = "";

	// 모든 month display 없앰
	for(let i = 1; i <= 12; i ++) {
		if (value != i) {
			delIdName = "month" + i;
			document.getElementById(delIdName).style.display = 'none';
		}
	}
	// 선택한 month 나타남
	document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';
	document.getElementById(idName).style.display = 'block';
	weekClick('Total')

	// border-bottom 없앰
	document.getElementById(prevMonth).style.removeProperty('border-bottom');

	// prevMonth 갱신
	prevMonth = "month_menu" + value;
};

var prevWeek = "week_menuTotal";

function weekClick(value) {
	var className = "week" + value;
	var idMenuName = "week_menu" + value;
	var delClassName = "";
	
	// 모든 주차 선택할 경우
	if (value == 'Total') {
		for(let i = 1; i <= 4; i ++) {
			if (value != i) {
				ClassName = "week" + i;
				document.querySelector('#' + nowMonth + ' .' + ClassName).style.display = 'block';
			}
		}
	}
	// 특정 주차 선택할 경우
	else{
		for(let i = 1; i <= 4; i ++) {
			if (value != i) {
				delClassName = "week" + i;
				document.querySelector('#' + nowMonth + ' .' + delClassName).style.display = 'none';
			}
		}
		document.querySelector('#' + nowMonth + ' .' + className).style.display = 'block';
	}

	// border-bottom 없앰
	document.getElementById(prevWeek).style.removeProperty('border-bottom');

	// border-bottom 생성
	document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';

	// prevWeek 업데이트
	prevWeek = "week_menu" + value;
}
