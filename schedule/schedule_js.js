var prevMonth = "1";

function monthClick(value) {
	var idName = "month" + value;
	var idMenuName = "month_menu" + value;
	var delIdName = "";

	for(let i = 1; i <= 12; i ++) {
		if (value != i) {
			delIdName = "month" + i;
			document.getElementById(delIdName).style.display = 'none';
			document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';
			if (prevMonth.startsWith('m')) {
				document.getElementById(prevMonth).style.removeProperty('border-bottom');
			}
		}
		else {
			continue;
		}
	}
	document.getElementById(idMenuName).style.borderBottom = '2px solid #1C192B';
	document.getElementById(idName).style.display = 'block';
	prevMonth = "month_menu" + value;
};
