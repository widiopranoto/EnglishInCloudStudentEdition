function modalkan(id){
	document.getElementById(id).style.display='block';	
}

function showScoreListening(noKD){
  var elToShow='listeningScoreKD'+noKD;	
  var valToShow='listeningScoreTotalKD'+noKD;
  if(parseInt(localStorage.getItem('loginOnline'))==1)
  {  getAndStoreNilaiSkillKD('hasil_listening','listening',noKD);
     var nilai=parseInt(localStorage.getItem(valToShow));
  }
  else if(parseInt(localStorage.getItem('loginOnline'))!=1)
  {  var nilai=parseInt(localStorage.getItem(valToShow));  }
  document.getElementById(elToShow).innerHTML=nilai;
  listeningCupModal(nilai,noKD);
}	

function writeListeningKD(noKD,jumlahYoutube){
//back
var back='#learn_kd'+noKD;	
var modalkan='listeningModalScoreKD'+noKD;
var idListening='listening_kd'+noKD;
var title='Practice Listening KD '+noKD;
var idYoutube='listeningYoutubeKD'+noKD;
var idSoal='listeningSoalKD'+noKD;
//var listeningScoreTotalKDId='listeningScoreTotalKD'+noKD;
if(parseInt(jumlahYoutube)<1){
document.getElementById(idListening).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'listeningCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"                <img src='image/listening.png'>"+
"				    <p>Listen to the dialog and fill in the gaps:</p>"+
"					<div id="+idSoal+"></div>"+
"   <div class='w3-center'>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreListening('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)
var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe src="+b+"></iframe>";
	   //cek cup
	   listeningCekCup(noKD);
}
else if (parseInt(jumlahYoutube)>0)
{
document.getElementById(idListening).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'listeningCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
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
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreListening('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)

var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
	   //kasih link youtube
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisYT,noKolomYT,idYoutube);
	   var a=retrieveItem(idYoutube);
       document.getElementById(idYoutube).innerHTML="<iframe src="+a+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe src="+b+"></iframe>";
	   //cek cup
	   listeningCekCup(noKD);
}	   
}	  
function listeningCekCup(noKD){
					var listeningCupKDId='listeningCupKD'+noKD;					
					var listeningPassKDId='listeningPassKD'+noKD;
					var listeningPassKDDefault=localStorage.getItem(listeningPassKDId);
					var listeningScoreTotalKDId='listeningScoreTotalKD'+noKD;	
					var listeningScoreTotalKDDefault=localStorage.getItem(listeningScoreTotalKDId);
					if(parseInt(localStorage.getItem('loginOnline'))==1)
					{
					  getAndStoreNilaiSkillKD('hasil_listening','listening',noKD);
                      var listeningScoreTotalKDDefault=localStorage.getItem(listeningScoreTotalKDId);
					  if(parseInt(listeningScoreTotalKDDefault)>79){localStorage.setItem('listeningPassKD'+noKD,1);}
					  if(parseInt(listeningScoreTotalKDDefault)<80){localStorage.setItem('listeningPassKD'+noKD,0);}
					}
    				listeningPassKDDefault=localStorage.getItem(listeningPassKDId);
					if(listeningPassKDDefault==1){
		                var listeningCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(listeningCupKDId).innerHTML=listeningCupWrite;
					  }			   
} 

function listeningCupModal(TotalScore,noKD){
	var listeningScoreTotalKDId='listeningScoreTotalKD'+noKD;
	var listeningScoreTotalKDDefault=parseInt(localStorage.getItem(listeningScoreTotalKDId));
	//cek apakah eksis
    if(TotalScore>79)
	{
		  var listeningCupKDId='listeningCupKD'+noKD;
		  var listeningCupKDId_='listeningCupKD'+noKD+'_';		  
		  var listeningCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(listeningCupKDId).innerHTML=listeningCupWrite;
		  document.getElementById(listeningCupKDId_).innerHTML=listeningCupWrite;
		  //tampilkan modal
		  modalkan('listeningModalCup');
		  playAudio('yeah');
	  }
	 if(TotalScore<80)
	{
		  var listeningFistKDId='listeningFistKD'+noKD;
		  var listeningFistKDId_='listeningFistKD'+noKD+'_';		  
		  var listeningFistWrite="<img src='image/fist.png' width='100'></img>";
		  //document.getElementById(listeningCupKDId).innerHTML=listeningFistWrite;
		  document.getElementById(listeningFistKDId_).innerHTML=listeningFistWrite;
		  //tampilkan modal
		  modalkan('listeningModalFist');
		  playAudio('fail');
	  }  
}
function writeListeningModalKD(noKD)
{
var listeningModalScoreKDId='listeningModalScoreKD'+noKD;	
var listeningScoreKDId='listeningScoreKD'+noKD;
var span="document.getElementById('"+listeningModalScoreKDId+"').style.display='none'";
var spasi=" class=";
var w3_button="w3-button w3-xlarge w3-display-topright";
document.getElementById(listeningModalScoreKDId).innerHTML= 
"	<div class='w3-modal-content w3-card-4'>"+
"      <header class='w3-container w3-red '>"+ 
"        <span onclick="+span+spasi+w3_button+
">&times;</span>"+
"        <h3>My Record (KD "+noKD+")</h3>"+
"      </header>"+
"      <div class='w3-container'>"+
"  <table class='w3-table-all'>"+
"    <tr>"+
"      <th>Score</th>"+
"    </tr>"+
"    <tr>"+
"      <td id='"+listeningScoreKDId+"'>"+
"	</tr>"+  
"  </table>"+		
"       </div>"+
"    </div>"
}	  