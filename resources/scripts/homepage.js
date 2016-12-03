[].forEach.call(document.getElementsByClassName("accept"), function(button, index) {
	button.style.visibility = 'visible';
});
[].forEach.call(document.getElementsByClassName("reject"), function(button, index) {
	button.style.visibility = 'visible';
});

function myFunction1() {
	document.getElementById("pr1").remove();
}

function myFunction2() {
	document.getElementById("pr2").remove();
}

function myFunction3() {
	document.getElementById("pr3").remove();
}

