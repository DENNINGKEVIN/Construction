$(document).ready(function(){
  $("#hover1").hover(function(){
    $("#show1").fadeToggle()
  });
  var myIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length){
    myIndex = 1
  }
  x[myIndex-1].style.display = "block";
  setTimeout(carousel,4000);
}
});
