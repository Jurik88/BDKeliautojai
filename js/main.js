$(document).ready(function(){
    $('.parallax').parallax();
});
$('#mygtukas1').click(function(){
    var parent = document.getElementById("IDCON");
    var child = document.getElementById("DIV6");
    parent.removeChild(child);

    /*var para = document.createElement("DIV5");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para, child);  */     
});