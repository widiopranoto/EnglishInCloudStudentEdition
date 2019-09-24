function modalkan(id){
	document.getElementById(id).style.display='block';	
}

function showScoreTheory(noKD){
  var elToShow='listeningScoreKD'+noKD;	
  var valToShow='listeningScoreTotalKD'+noKD;
  var nilai=parseInt(localStorage.getItem(valToShow));
  document.getElementById(elToShow).innerHTML=nilai;
  theoryCupModal(nilai,noKD);
}	

function writeTheoryKD(noKD){
//back
var back='#learn_kd'+noKD;	
var modalkan='theoryModalScoreKD'+noKD;
var idTheory='theory_kd'+noKD;
var title='Theory KD '+noKD;
var idYoutube='theory_youtube_kd'+noKD;
var idSoal='theory_soal_kd'+noKD;
//var theoryScoreTotalKDId='theoryScoreTotalKD'+noKD;
document.getElementById(idTheory).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'theoryCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"  <div class='w3-row-padding w3-theme'>"+
"        <div class='w3-section'>"+
"            <div class='w3-card-2'>"+
"                <img src='image/theory.png'>"+
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
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreTheory('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
//"</div>"
)
var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
       
	   //kasih link youtube
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisYT,noKolomYT,idYoutube);
	   var a=retrieveItem(idYoutube);
       document.getElementById(idYoutube).innerHTML="<iframe width='100%' height='100%' src="+a+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe width='100%' height='100%' src="+b+"></iframe>";
	   theoryCekCup(noKD);
}	  
function theoryCekCup(noKD){
					var theoryCupKDId='theoryCupKD'+noKD;					
					var theoryPassKDId='theoryPassKD'+noKD;
					var theoryPassKDDefault=localStorage.getItem(theoryPassKDId);
					var theoryScoreTotalKDId='theoryScoreTotalKD'+noKD;	
					var theoryScoreTotalKDDefault=localStorage.getItem(theoryScoreTotalKDId);
					if(parseInt(localStorage.getItem('loginOnline'))==1)
					{
					  getAndStoreNilaiSkillKD('hasil_theory','theory',noKD);
                      var theoryScoreTotalKDDefault=localStorage.getItem(theoryScoreTotalKDId);
					  if(parseInt(theoryScoreTotalKDDefault)>79){localStorage.setItem('theoryPassKD'+noKD,1);}
					  if(parseInt(theoryScoreTotalKDDefault)<80){localStorage.setItem('theoryPassKD'+noKD,0);}
					}
    				theoryPassKDDefault=localStorage.getItem(theoryPassKDId);
					if(theoryPassKDDefault==1){
		                var theoryCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(theoryCupKDId).innerHTML=theoryCupWrite;
					  }			   
} 

function theoryCupModal(TotalScore,noKD){
	var theoryScoreTotalKDId='theoryScoreTotalKD'+noKD;
	var theoryScoreTotalKDDefault=parseInt(localStorage.getItem(theoryScoreTotalKDId));
	//cek apakah eksis
    if(TotalScore>79)
	{
		  var theoryCupKDId='theoryCupKD'+noKD;
		  var theoryCupKDId_='theoryCupKD'+noKD+'_';		  
		  var theoryCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(theoryCupKDId).innerHTML=theoryCupWrite;
		  document.getElementById(theoryCupKDId_).innerHTML=theoryCupWrite;
		  //tampilkan modal
		  modalkan('theoryModalCup');
		  playAudio('yeah');
	  }
	 if(TotalScore<80)
	{
		  var theoryFistKDId='theoryFistKD'+noKD;
		  var theoryFistKDId_='theoryFistKD'+noKD+'_';		  
		  var theoryFistWrite="<img src='image/fist.png' width='100'></img>";
		  //document.getElementById(theoryCupKDId).innerHTML=theoryCupWrite;
		  document.getElementById(theoryFistKDId_).innerHTML=theoryFistWrite;
		  //tampilkan modal
		  modalkan('theoryModalFist');
		  playAudio('fail');
	  }  
}
function writeTheoryModalKD(noKD)
{
var theoryModalScoreKDId='theoryModalScoreKD'+noKD;	
var theoryScoreKDId='theoryScoreKD'+noKD;
var span="document.getElementById('"+theoryModalScoreKDId+"').style.display='none'";
var spasi=" class=";
var w3_button="w3-button w3-xlarge w3-display-topright";
document.getElementById(theoryModalScoreKDId).innerHTML= 
"	<div class='w3-modal-content w3-card-4'>"+
"      <header class='w3-container w3-red'>"+ 
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
"      <td id='"+theoryScoreKDId+"'>"+
"	</tr>"+  
"  </table>"+		
"       </div>"+
"    </div>"
}	  