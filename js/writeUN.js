function modalkan(id){
	document.getElementById(id).style.display='block';	
}

function showScoreUN(noKD){
  var elToShow='unScoreKD'+noKD;	
  var valToShow='unScoreTotalKD'+noKD;
  var nilai=parseInt(localStorage.getItem(valToShow));
  document.getElementById(elToShow).innerHTML=nilai;
  unCupModal(nilai,noKD);
}	

function writeUNKD(noKD){
//back
var back='#home';	
var modalkan='unModalScoreKD'+noKD;
var idUN='un_kd'+noKD;
var title='UN'+noKD;
var idYoutube='un_youtube_kd'+noKD;
var idSoal='un_soal_kd'+noKD;
//var unScoreTotalKDId='unScoreTotalKD'+noKD;
document.getElementById(idUN).innerHTML=
(	
"  <h2 class'w3-animate-left'>"+title+"</h2>"+
"  <table border='0'>"+
"  <tr>"+
"  <td id="+"'unCupKD"+noKD+"'"+" title='You have passed it!'></td>"+
"  </tr>"+
"  </table>"+
"				    <p>Practice of National Examination</p>"+
"					<div id="+idSoal+"></div>"+
"   <div class='w3-center'>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Go back to previous page' onclick=showAndSound('"+back+"','squeak')><i class='w3-margin-right fa fa-angle-double-left'></i>Back</button>"+
"        <button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick=showScoreUN('"+noKD+"');modalkan('"+modalkan+"')>Show My Records<i class='w3-margin-left fa fa-bars'></i></button>"+
"   </div>"
)
var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
    
   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','un','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe width='100%' height='400' src="+b+"></iframe>";
  //kasihNoKD
  unCekCup(noKD);  
}	  
function unCekCup(noKD){
					var unCupKDId='unCupKD'+noKD;					
					var unPassKDId='unPassKD'+noKD;
					var unPassKDDefault=localStorage.getItem(unPassKDId);
					var unScoreTotalKDId='unScoreTotalKD'+noKD;	
					var unScoreTotalKDDefault=localStorage.getItem(unScoreTotalKDId);
					if(parseInt(localStorage.getItem('loginOnline'))==1)
					{
					  getAndStoreNilaiSkillKD('hasil_un','un',noKD);
                      var unScoreTotalKDDefault=localStorage.getItem(unScoreTotalKDId);
					  if(parseInt(unScoreTotalKDDefault)>79){localStorage.setItem('unPassKD'+noKD,1);}
					  if(parseInt(unScoreTotalKDDefault)<80){localStorage.setItem('unPassKD'+noKD,0);}
					}
    				unPassKDDefault=localStorage.getItem(unPassKDId);
					if(unPassKDDefault==1){
		                var unCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(unCupKDId).innerHTML=unCupWrite;
					  }			   
} 

function unCupModal(unScoreTotalKDDefault,noKD){
	var unScoreTotalKDId='unScoreTotalKD'+noKD;
	var unScoreTotalKDDefault=parseInt(localStorage.getItem(unScoreTotalKDId));
	//cek apakah eksis
    if(unScoreTotalKDDefault>79)
	{
		  var unCupKDId='unCupKD'+noKD;
		  var unCupKDId_='unCupKD'+noKD+'_';		  
		  var unCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(unCupKDId).innerHTML=unCupWrite;
		  document.getElementById(unCupKDId_).innerHTML=unCupWrite;
		  //tampilkan modal
		  modalkan('unModalCup');
		  playAudio('yeah');
	  }
	 if(unScoreTotalKDDefault<80)
	{
		  var unFistKDId='unFistKD'+noKD;
		  var unFistKDId_='unFistKD'+noKD+'_';		  
		  var unFistWrite="<img src='image/fist.png' width='100'></img>";
		  //document.getElementById(unCupKDId).innerHTML=unCupWrite;
		  document.getElementById(unFistKDId_).innerHTML=unFistWrite;
		  //tampilkan modal
		  modalkan('unModalFist');
		  playAudio('fail');
	  }  
}
function writeUNModalKD(noKD)
{
var unModalScoreKDId='unModalScoreKD'+noKD;	
var unScoreKDId='unScoreKD'+noKD;
var span="document.getElementById('"+unModalScoreKDId+"').style.display='none'";
var spasi=" class=";
var w3_button="w3-button w3-xlarge w3-display-topright";
document.getElementById(unModalScoreKDId).innerHTML= 
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
"      <td id='"+unScoreKDId+"'>"+
"	</tr>"+  
"  </table>"+		
"       </div>"+
"    </div>"
}	  