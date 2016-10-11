function ajax(){
	var ajax = new XMLHttpRequest();
	ajax.open('get','php/1.php',true);
	ajax.send();
	ajax.onload = function(json){
		console.log(json);
	}
}