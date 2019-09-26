function modalkan(id){
	document.getElementById(id).style.display='block';	
}

function showScoreTheory(noKD){
  var elToShow='theoryScoreKD'+noKD;	
  var valToShow='theoryScoreTotalKD'+noKD;
  var nilai=parseInt(localStorage.getItem(valToShow));
  document.getElementById(elToShow).innerHTML=nilai;
  theoryCupModal(nilai,noKD);
}	

function writeTheoryKD(noKD,jumlahLatihan){
//back
var back='#learn_kd'+noKD;	
var modalkan='theoryModalScoreKD'+noKD;
var idTheory='theory_kd'+noKD;
var title='Theory KD '+noKD;
var idDocument1='theoryDocumentKD'+noKD+'_1';
var idSoal1='theorySoalKD'+noKD+'_1';
var idDocument2='theoryDocumentKD'+noKD+'_2';
var idSoal2='theorySoalKD'+noKD+'_2';
if(parseInt(jumlahLatihan)>1){
document.getElementById(idTheory).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'theoryCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"                   <h2>Theory #1 (Skill) - Teori Aspek Keterampilan</h2>"+
"				    <h3>Observe this video/document:</h3>"+
"					<div id="+idDocument1+"></div>"+
"				    <p>After observing the video/reading the document, answer these questions to check your understanding:</p>"+
"					<div id="+idSoal1+"></div>"+
"                   <h2>Theory #2 (Knowledge) - Teori Aspek Pengetahuan</h2>"+
"				    <h3>Observe this video/document:</h3>"+
"					<div id="+idDocument2+"></div>"+
"				    <p>After observing the video/reading the document, answer these questions to check your understanding:</p>"+
"					<div id="+idSoal2+"></div>"+
"   <div class='w3-center'>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreTheory('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)}
if(parseInt(jumlahLatihan)==1){
document.getElementById(idTheory).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'theoryCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"                   <h2>Theory #1 (Skill) - Teori Aspek Keterampilan</h2>"+
"				    <h3>Observe this video/document:</h3>"+
"					<div id="+idDocument1+"></div>"+
"				    <p>After observing the video/reading the document, answer these questions to check your understanding:</p>"+
"					<div id="+idSoal1+"></div>"+
"   <div class='w3-center'>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreTheory('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)}
var noBarisYT1=1;
var noKolomYT1=noKD;
var noBarisSoal1=2;
var noKolomSoal1=noKD;
var noBarisYT2=3;
var noKolomYT2=noKD;
var noBarisSoal2=4;
var noKolomSoal2=noKD;       
	   //kasih link dok
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisYT1,noKolomYT1,idDocument1);
	   var a=retrieveItem(idDocument1);
       document.getElementById(idDocument1).innerHTML="<iframe src="+a+"></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisSoal1,noKolomSoal1,idSoal1);
	   var b=retrieveItem(idSoal1);
       document.getElementById(idSoal1).innerHTML="<iframe src="+b+"></iframe>";
	   if(parseInt(jumlahLatihan)>1){
	   //kasih link dok
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisYT2,noKolomYT2,idDocument2);
	   var c=retrieveItem(idDocument2);
       document.getElementById(idDocument2).innerHTML="<iframe src="+c+"></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','theory','getOneItem',noBarisSoal2,noKolomSoal2,idSoal2);
	   var d=retrieveItem(idSoal2);
       document.getElementById(idSoal2).innerHTML="<iframe src="+d+"></iframe>";
	   }
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