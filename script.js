function T(){
  var now = new Date();
  var pib = "";
  var table = document.body.children[3];
    for(var i=1; i<6; i++){
		var people=table.rows[i].cells[0].innerHTML;
		pib= people;
		
		var DateHuman = new Date(table.rows[i].cells[1].innerHTML);
		var y = parseInt(((now-DateHuman)/1000/3600/24/365));
		var D = new Date(table.rows[i].cells[2].innerHTML += y + " років");
		console.log(pib +" "+ y);
	}
}

/*
//↓працює
document.getElementById("dtTbl").onclick=function(){
var table = document.body.children[3];
for(var i=1; i<6; i++){
	a= alert(table.rows[i].cells[1].innerHTML);
	}
}
var now = new Date();
var d1 = new Date(2007, 8, 27);
	var y = ((now-d1)/3600/24/1000);
	alert( y +"days or " +(y/365)+ " years");
*/
