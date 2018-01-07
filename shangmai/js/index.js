function closeit(){
	var a=document.getElementById("close");
	var b=document.getElementsByClassName("qq");
	var c=document.getElementById("tiebian");
	for(var i=0;i<b.length;i++){
		b[i].index=i;
		b[i].style.display="none";
	}
	c.style.display="block";
}
function openit(){
	var a=document.getElementById("close");
	var b=document.getElementsByClassName("qq");
	var c=document.getElementById("tiebian");
	for(var i=0;i<b.length;i++){
		b[i].index=i;
		b[i].style.display="block";
	}
	c.style.display="none";
}
