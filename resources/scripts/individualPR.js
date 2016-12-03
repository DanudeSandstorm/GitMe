document.getElementById("add-comment").onclick = function () {
	var a = document.getElementById('comment-box');
	a.style.display = 'inherit';
};

document.getElementById("comment-accept").onclick = function () {
	var a = document.getElementById('comment-box');
	a.style.display = 'none';

	var div = document.createElement('div');
	div.className += "comment";

	var textarea = document.getElementById('text-area');
	div.appendChild(document.createTextNode(textarea.value));
	textarea.value = "";
	
	document.getElementById('comment').appendChild(div);
};

document.getElementById("comment-reject").onclick = function () {
	var a = document.getElementById('comment-box');
	a.style.display = 'none';
};

function toggle1A() {
    var a = document.getElementById('accept');
    var b = document.getElementById('reject');
    var r = document.getElementById('l1b');
    var t = document.getElementById('l1at');
    a.style.display = 'none';
    b.style.display = 'none';
    r.style.backgroundColor = '#4CAF50'
    t.className = "show";
}

function toggle1R() {
    var a = document.getElementById('accept');
    var b = document.getElementById('reject');
    var r = document.getElementById('l1b');
    var t = document.getElementById('l1rt');
    a.style.display = 'none';
    b.style.display = 'none';
    r.style.backgroundColor = '#f44336'
    t.className = "show";
}