var i = 0;
setInterval(function() {
	if (i == 100) clearInterval(this);
	else document.getElementById("job").innerHTML = i++;
}, 200);

var j = 0;
setInterval(function() {
	if (j == 100) clearInterval(this);
	else document.getElementById("plesment").innerHTML = j++;
}, 200);
var h = 0;
setInterval(function() {
	if (h == 500) clearInterval(this);
	else document.getElementById("student").innerHTML = h++;
}, 35);