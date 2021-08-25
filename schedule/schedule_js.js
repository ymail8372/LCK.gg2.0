var prevMonth = "none";
var nowMonth = "month9";

function monthClick(value) {
	nowMonth = 'month' + value;
	var idName = "month" + value;
	var idMenuName = "month_menu" + value;
	var delIdName = "";

	for(let i = 1; i <= 12; i ++) {
		if (value != i) {
			delIdName = "month" + i;
			document.getElementById(delIdName).style.display = 'none';
		}
	}

	if (prevMonth != "none") {
		document.getElementById(prevMonth).style.removeProperty('border-bottom');
	}

	document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';
	document.getElementById(idName).style.display = 'block';
	prevMonth = "month_menu" + value;
};

var prevWeek = "none";

function weekClick(value) {
	var className = "week" + value;
	var idMenuName = "week_menu" + value;
	var delClassName = "";

	for(let i = 1; i <= 4; i ++) {
		if (value != i) {
			delClassName = "week" + i;
			document.querySelector('#' + nowMonth + ' .' + className).style.display = 'none';
			// document.getElementsByClassName(delClassName).style.display = 'none';
		}
	}

	if (prevWeek != "none") {
		document.getElementById(prevWeek).style.removeProperty('border-bottom');
	}

	document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';
	document.querySelector('#' + nowMonth + ' .' + className).style.display = 'block';
	prevWeek = "week_menu" + value;
}
