function hideAll(){
  w3.hide('#home');	
  w3.hide('#login');
  w3.hide('#practice');
  w3.hide('#learn');
  w3.hide('#un');
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
function storeLogin(idSelected1,varStored1,idSelected2,varStored2){
	var storage1 = document.getElementById(idSelected1).value;
	localStorage.setItem(varStored1,storage1);
    var storage2 = document.getElementById(idSelected2).value;
	localStorage.setItem(varStored2,storage1);
	statusLogin(storage1,storage2);
	//location.reload(1);
	}
function showStorage(idStorage,elShown){
	var item= localStorage.getItem(idStorage);
    document.getElementById(elShown).innerHTML = item;
}
function removeLogin(varStored1,varStored2){
	localStorage.removeItem(varStored1);
    localStorage.removeItem(varStored2);
	statusLogin('11111','11111');
	//location.reload(1);
}

function statusLogin(username,password){
          var inputUrlSpreadSheet =
            'https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing';
        var inputNamaSheet = 'login';
        var action = 'login';
        //var username = '12345';
        //var password = '12345';
        w3.getHttpObject(
            "https://script.google.com/macros/s/AKfycbyb4tZUywn6hnDd1ieSpPZ4BSaaWDBfXJBEDkZS2cYZ4BtmZCc/exec?inputUrlSpreadSheet=" +
            inputUrlSpreadSheet + "&inputNamaSheet=" + inputNamaSheet + "&action=" + action + "&username=" +
            username + "&password=" + password,
            myFunction);

        function myFunction(myObject) {
            w3.displayObject("login", myObject);
        }
}