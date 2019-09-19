function writeListening(noKD,idListening,title,idYoutube,idSoal){
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
"        <button class='w3-button w3-yellow' onclick=showAndSound('#learn','squeak')>Back<i class='w3-margin-left fa fa-angle-double-left'></i></button>"+
"   </div>"
//"</div>"
)
var noBarisYT=1;
var noKolomYT=noKD;
var noBarisSoal=2;
var noKolomSoal=noKD;
       
	   //kasih link youtube
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisYT,noKolomYT,idYoutube);
	   var a=retrieveItem(idYoutube);
       document.getElementById(idYoutube).innerHTML="<iframe width='100%' height='400' src="+a+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";	   
	   //kasih link soal
	   storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','listening','getOneItem',noBarisSoal,noKolomSoal,idSoal);
	   var b=retrieveItem(idSoal);
       document.getElementById(idSoal).innerHTML="<iframe width='100%' height='400' src="+b+"></iframe>";
					//cek jika lolos KD
}	  
function listeningCekCup(noKD){
					var listeningCupKDId='listeningCupKD'+noKD;					
					var listeningPassKDId='listeningPassKD'+noKD;
					var listeningPassKDDefault=localStorage.getItem(listeningPassKDId);
					var listeningScoreTotalKDId='listeningScoreTotalKD'+noKD;	
					var listeningScoreTotalKDDefault=localStorage.getItem(listeningScoreTotalKDId);
                    if(listeningPassKDDefault==null || listeningPassKDDefault==undefined || listeningScoreTotalKDDefault==null || listeningScoreTotalKDDefault==undefined)
                    {
					  storeNilaiSkillKD('hasil_listening','listening',noKD)
                      var listeningScoreTotalKDDefault=localStorage.getItem(listeningScoreTotalKDId);
					  if(parseInt(listeningScoreTotalKDDefault)>79){localStorage.setItem('listeningPassKD'+noKD,1);}
					  if(parseInt(listeningScoreTotalKDDefault)<80){localStorage.setItem('listeningPassKD'+noKD,0);}
                    }						
                    if(listeningPassKDDefault!==null || listeningPassKDDefault!=undefined || listeningScoreTotalKDDefault!=null || listeningScoreTotalKDDefault!=undefined)
                    {
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
}	  