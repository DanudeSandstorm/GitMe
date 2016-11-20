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

