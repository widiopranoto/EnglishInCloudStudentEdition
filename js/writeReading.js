function modalkan(id){
	document.getElementById(id).style.display='block';	
}

function showScoreReading(noKD){
  var elToShow='readingScoreKD'+noKD;	
  var valToShow='readingScoreTotalKD'+noKD;
  if(parseInt(localStorage.getItem('loginOnline'))==1)
  {  getAndStoreNilaiSkillKD('hasil_reading','reading',noKD);
     var nilai=parseInt(localStorage.getItem(valToShow));
  }
  else if(parseInt(localStorage.getItem('loginOnline'))!=1)
  {  var nilai=parseInt(localStorage.getItem(valToShow));  }
  document.getElementById(elToShow).innerHTML=nilai;
  readingCupModal(nilai,noKD);
}	

function writeReadingKD(noKD,jumlahYoutube){
//back
var back='#learn_kd'+noKD;	
var modalkan='readingModalScoreKD'+noKD;
var idReading='reading_kd'+noKD;
var title='Practice Reading KD '+noKD;
var idYoutube='readingYoutubeKD'+noKD;
var idSoal='readingSoalKD'+noKD;
//var readingScoreTotalKDId='readingScoreTotalKD'+noKD;
if(parseInt(jumlahYoutube)<1){
document.getElementById(idReading).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'readingCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"                <img src='image/reading.png'>"+
"				    <p>Read and fill in the gaps:</p>"+
"					<div id="+idSoal+"></div>"+
"   <div class='w3-center'>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreReading('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)
var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','reading','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe src="+b+"></iframe>";
	   //cek cup
	   readingCekCup(noKD);
}
else if (parseInt(jumlahYoutube)>0)
{
document.getElementById(idReading).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'readingCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"  <div class='w3-row-padding w3-theme'>"+
"        <div class='w3-section'>"+
"            <div class='w3-card-2'>"+
"                <img src='image/reading.png'>"+
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
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreReading('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)

var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
	   //kasih link youtube
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','reading','getOneItem',noBarisYT,noKolomYT,idYoutube);
	   var a=retrieveItem(idYoutube);
       document.getElementById(idYoutube).innerHTML="<iframe src="+a+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','reading','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe src="+b+"></iframe>";
	   //cek cup
	   readingCekCup(noKD);
}	   
}	  
function readingCekCup(noKD){
					var readingCupKDId='readingCupKD'+noKD;					
					var readingPassKDId='readingPassKD'+noKD;
					var readingPassKDDefault=localStorage.getItem(readingPassKDId);
					var readingScoreTotalKDId='readingScoreTotalKD'+noKD;	
					var readingScoreTotalKDDefault=localStorage.getItem(readingScoreTotalKDId);
					if(parseInt(localStorage.getItem('loginOnline'))==1)
					{
					  getAndStoreNilaiSkillKD('hasil_reading','reading',noKD);
                      var readingScoreTotalKDDefault=localStorage.getItem(readingScoreTotalKDId);
					  if(parseInt(readingScoreTotalKDDefault)>79){localStorage.setItem('readingPassKD'+noKD,1);}
					  if(parseInt(readingScoreTotalKDDefault)<80){localStorage.setItem('readingPassKD'+noKD,0);}
					}
    				readingPassKDDefault=localStorage.getItem(readingPassKDId);
					if(readingPassKDDefault==1){
		                var readingCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(readingCupKDId).innerHTML=readingCupWrite;
					  }			   
} 

function readingCupModal(TotalScore,noKD){
	var readingScoreTotalKDId='readingScoreTotalKD'+noKD;
	var readingScoreTotalKDDefault=parseInt(localStorage.getItem(readingScoreTotalKDId));
	//cek apakah eksis
    if(TotalScore>79)
	{
		  var readingCupKDId='readingCupKD'+noKD;
		  var readingCupKDId_='readingCupKD'+noKD+'_';		  
		  var readingCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(readingCupKDId).innerHTML=readingCupWrite;
		  document.getElementById(readingCupKDId_).innerHTML=readingCupWrite;
		  //tampilkan modal
		  modalkan('readingModalCup');
		  playAudio('yeah');
	  }
	 if(TotalScore<80)
	{
		  var readingFistKDId='readingFistKD'+noKD;
		  var readingFistKDId_='readingFistKD'+noKD+'_';		  
		  var readingFistWrite="<img src='image/fist.png' width='100'></img>";
		  //document.getElementById(readingCupKDId).innerHTML=readingFistWrite;
		  document.getElementById(readingFistKDId_).innerHTML=readingFistWrite;
		  //tampilkan modal
		  modalkan('readingModalFist');
		  playAudio('fail');
	  }  
}
function writeReadingModalKD(noKD)
{
var readingModalScoreKDId='readingModalScoreKD'+noKD;	
var readingScoreKDId='readingScoreKD'+noKD;
var span="document.getElementById('"+readingModalScoreKDId+"').style.display='none'";
var spasi=" class=";
var w3_button="w3-button w3-xlarge w3-display-topright";
document.getElementById(readingModalScoreKDId).innerHTML= 
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
"      <td id='"+readingScoreKDId+"'>"+
"	</tr>"+  
"  </table>"+		
"       </div>"+
"    </div>"
}	  