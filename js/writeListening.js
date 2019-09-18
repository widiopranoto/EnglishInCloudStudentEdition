function writeListening(idListening,title,noBarisYT,noKolomYT,noBarisSoal,noKolomSoal,idYoutube,idSoal){
document.getElementById(idListening).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <div class='w3-row-padding w3-theme'>"+
"        <div class='w3-section'>"+
"            <div class='w3-card-2'>"+
"                <img src='image/listening.png'>"+
"                <div class='w3-container w3-light-gray'>"+
"                  <div class=''>"+
"				    <h3>Watch this video and fill in the gaps:</h3>"+
"					<div id="+idYoutube+"></div>"+
"				    <p>Questions:</p>"+
"					<div id="+idSoal+"></div>"+
"		          </div>"+
"              </div>"+
"            </div>"+
"	    </div>"+
"  </div>"+
	
"   <div class='w3-center'>"+
"        <button class='w3-button w3-yellow' onclick=showAndSound('#listening','fail')>Back<i class='w3-margin-left fa fa-angle-double-left'></i></button>"+
"   </div>"
//"</div>"
)
	   //kasih link youtube
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisYT,noKolomYT,idYoutube);
	   var a=retrieveItem(idYoutube);
       document.getElementById(idYoutube).innerHTML="<iframe width='100%' height='400' src="+a+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe width='100%' height='400' src="+b+"></iframe>";
}	   