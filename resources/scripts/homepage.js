var vis1 = false;
var vis2 = false;
var vis3 = false;

function myFunction1() {
	if (vis1 == false) {
		document.getElementById("accept").style.visibility = 'visible';
		document.getElementById("reject").style.visibility = 'visible';
		vis1 = true;
	}
	else {
		document.getElementById("accept").style.visibility = 'hidden';
		document.getElementById("reject").style.visibility = 'hidden';
		vis1 = false;
	}
}

function myFunction2() {
	if (vis2 == false) {
		document.getElementById("accept2").style.visibility = 'visible';
		document.getElementById("reject2").style.visibility = 'visible';
		vis2 = true;
	}
	else {
		document.getElementById("accept2").style.visibility = 'hidden';
		document.getElementById("reject2").style.visibility = 'hidden';
		vis2 = false;
	}
}

function myFunction3() {
	if (vis3 == false) {
		document.getElementById("accept3").style.visibility = 'visible';
		document.getElementById("reject3").style.visibility = 'visible';
		vis3 = true;
	}
	else {
		document.getElementById("accept3").style.visibility = 'hidden';
		document.getElementById("reject3").style.visibility = 'hidden';
		vis3 = false;
	}
}

