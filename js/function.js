function hideAll(){
  w3.hide('#home');	
  w3.hide('#login');
  w3.hide('#practice');
  w3.hide('#learn');
  w3.hide('#setting');
  w3.hide('#howto');
}
function show(idContainer){
  hideAll();
  w3.show(idContainer);
}
function openLink(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}