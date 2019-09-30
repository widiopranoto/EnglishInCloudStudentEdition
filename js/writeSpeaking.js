function writeSpeaking(elSpeaking,title,noKD){
writeSpeaking_(elSpeaking,title,noKD);
					var noKD=noKD;
					speakingPerlihatkan('#speakingItem'+noKD);
					//getSpeaking(noKD); 
                    getOfflineSpeaking(noKD); 					
                    localStorage.setItem('speakingNoDefault',noKD);					
					var speakingNoDefault=retrieveItem('speakingNoDefault');
					var speakingId='speakingItem'+speakingNoDefault;	
					var speakingItemDefault=localStorage.getItem(speakingId);
					localStorage.setItem('speakingItemDefault',speakingItemDefault);
					document.getElementById(speakingId).innerHTML=speakingItemDefault;	
					//if badge and medal exists
					//delete badge and medal
					//var pref = 'speakingBadge';
                    //var key = pref;
                    //removeLSPref(pref, key);
					
					var speakingNoDefault=localStorage.getItem('speakingNoDefault');
					var speakingBadgeKD='speakingBadgeKD'+noKD+'_';
					
					var speakingBadgeId1=speakingBadgeKD+1;
					var speakingBadgeId1_=speakingBadgeKD+1+'_';
					var speakingBadgeId2=speakingBadgeKD+2;
					var speakingBadgeId2_=speakingBadgeKD+2+'_';					
					var speakingBadgeId3=speakingBadgeKD+3;
					var speakingBadgeId3_=speakingBadgeKD+3+'_';						
					var speakingBadgeId4=speakingBadgeKD+4;
					var speakingBadgeId4_=speakingBadgeKD+4+'_';						
					var speakingBadgeId5=speakingBadgeKD+5;
					var speakingBadgeId5_=speakingBadgeKD+5+'_';					
					var speakingBadgeId6=speakingBadgeKD+6;
					var speakingBadgeId6_=speakingBadgeKD+6+'_';					
					var speakingBadgeId7=speakingBadgeKD+7;
					var speakingBadgeId7_=speakingBadgeKD+7+'_';					
					var speakingBadgeId8=speakingBadgeKD+8;
					var speakingBadgeId8_=speakingBadgeKD+8+'_';					
					var speakingBadgeId9=speakingBadgeKD+9;
					var speakingBadgeId9_=speakingBadgeKD+9+'_';					
					var speakingBadgeId10=speakingBadgeKD+10;
					var speakingBadgeId10_=speakingBadgeKD+10+'_';	
					
					var speakingBadge1=localStorage.getItem(speakingBadgeKD+1);
					var speakingBadge2=localStorage.getItem(speakingBadgeKD+2);
					var speakingBadge3=localStorage.getItem(speakingBadgeKD+3);
					var speakingBadge4=localStorage.getItem(speakingBadgeKD+4);
					var speakingBadge5=localStorage.getItem(speakingBadgeKD+5);
					var speakingBadge6=localStorage.getItem(speakingBadgeKD+6);
					var speakingBadge7=localStorage.getItem(speakingBadgeKD+7);
					var speakingBadge8=localStorage.getItem(speakingBadgeKD+8);
					var speakingBadge9=localStorage.getItem(speakingBadgeKD+9);
					var speakingBadge10=localStorage.getItem(speakingBadgeKD+10);
                    
					var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";	
					
					if(speakingBadge1==1){
					document.getElementById(speakingBadgeId1).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId1_).innerHTML=speakingBadgeWrite;
					}
					if(speakingBadge2==1){
					document.getElementById(speakingBadgeId2).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId2_).innerHTML=speakingBadgeWrite;
					}					
					if(speakingBadge3==1){
					document.getElementById(speakingBadgeId3).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId3_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge4==1){
					document.getElementById(speakingBadgeId4).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId4_).innerHTML=speakingBadgeWrite;
					}
					if(speakingBadge5==1){
					document.getElementById(speakingBadgeId5).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId5_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge6==1){
					document.getElementById(speakingBadgeId6).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId6_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge7==1){
					document.getElementById(speakingBadgeId7).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId7_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge8==1){
					document.getElementById(speakingBadgeId8).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId8_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge9==1){
					document.getElementById(speakingBadgeId9).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId9_).innerHTML=speakingBadgeWrite;
					}	
					if(speakingBadge10==1){
					document.getElementById(speakingBadgeId10).innerHTML=speakingBadgeWrite;
					document.getElementById(speakingBadgeId10_).innerHTML=speakingBadgeWrite;
					}						
                    //if score exists
					var speakingScoreKD='speakingScoreKD'+noKD+'_';
					var speakingScoreId1=speakingScoreKD+1;
					var speakingScoreId2=speakingScoreKD+2;
					var speakingScoreId3=speakingScoreKD+3;
					var speakingScoreId4=speakingScoreKD+4;
					var speakingScoreId5=speakingScoreKD+5;
					var speakingScoreId6=speakingScoreKD+6;
					var speakingScoreId7=speakingScoreKD+7;
					var speakingScoreId8=speakingScoreKD+8;
					var speakingScoreId9=speakingScoreKD+9;
					var speakingScoreId10=speakingScoreKD+10;
					
					var speakingScore1=parseInt(localStorage.getItem(speakingScoreId1));
					var speakingScore2=parseInt(localStorage.getItem(speakingScoreId2));
					var speakingScore3=parseInt(localStorage.getItem(speakingScoreId3));
					var speakingScore4=parseInt(localStorage.getItem(speakingScoreId4));
					var speakingScore5=parseInt(localStorage.getItem(speakingScoreId5));
					var speakingScore6=parseInt(localStorage.getItem(speakingScoreId6));
					var speakingScore7=parseInt(localStorage.getItem(speakingScoreId7));
					var speakingScore8=parseInt(localStorage.getItem(speakingScoreId8));
					var speakingScore9=parseInt(localStorage.getItem(speakingScoreId9));
					var speakingScore10=parseInt(localStorage.getItem(speakingScoreId10));
					
					var speakingNote1=localStorage.getItem('speakingNote1');
					var speakingNote2=localStorage.getItem('speakingNote2');
					var speakingNote3=localStorage.getItem('speakingNote3');
					var speakingNote4=localStorage.getItem('speakingNote4');
					var speakingNote5=localStorage.getItem('speakingNote5');
					var speakingNote6=localStorage.getItem('speakingNote6');
					var speakingNote7=localStorage.getItem('speakingNote7');
					var speakingNote8=localStorage.getItem('speakingNote8');
					var speakingNote9=localStorage.getItem('speakingNote9');
					var speakingNote10=localStorage.getItem('speakingNote10');	

					if(speakingScore1>0){
					document.getElementById('speakingNote1').innerHTML=speakingNote1;
					document.getElementById(speakingScoreId1).innerHTML=speakingScore1;
					}
					
					if(speakingScore2>0){
					document.getElementById('speakingNote2').innerHTML=speakingNote2;
					document.getElementById(speakingScoreId2).innerHTML=speakingScore2;
					}

					if(speakingScore3>0){
					document.getElementById('speakingNote3').innerHTML=speakingNote3;
					document.getElementById(speakingScoreId3).innerHTML=speakingScore3;
					}

					if(speakingScore4>0){
					document.getElementById('speakingNote4').innerHTML=speakingNote4;
					document.getElementById(speakingScoreId4).innerHTML=speakingScore4;
					}

					if(speakingScore5>0){
					document.getElementById('speakingNote5').innerHTML=speakingNote5;
					document.getElementById(speakingScoreId5).innerHTML=speakingScore5;
					}

					if(speakingScore6>0){
					document.getElementById('speakingNote6').innerHTML=speakingNote6;
					document.getElementById(speakingScoreId6).innerHTML=speakingScore6;
					}

					if(speakingScore7>0){
					document.getElementById('speakingNote7').innerHTML=speakingNote7;
					document.getElementById(speakingScoreId7).innerHTML=speakingScore7;
					}

					if(speakingScore8>0){
					document.getElementById('speakingNote8').innerHTML=speakingNote8;
					document.getElementById(speakingScoreId8).innerHTML=speakingScore8;
					}

					if(speakingScore9>0){
					document.getElementById('speakingNote9').innerHTML=speakingNote9;
					document.getElementById(speakingScoreId9).innerHTML=speakingScore9;
					}

					if(speakingScore10>10){
					document.getElementById('speakingNote10').innerHTML=speakingNote10;
					document.getElementById(speakingScoreId10).innerHTML=speakingScore10;
					}					
					//jika lolos KD
					var speakingCupKDId='speakingCupKD'+noKD;
					var speakingPassKDDefault='speakingPassKD'+noKD;
					var speakingPassKDValue=localStorage.getItem(speakingPassKDDefault);
					if(speakingPassKDValue=='passed'){
		                var speakingCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(speakingCupKDId).innerHTML=speakingCupWrite;
					}
					speakingPerlihatkan('#speakingDiv1');
}

function writeSpeakingModalScore(elSpeakingModalScore,noKD)
{
var noKD=noKD;	
var speakingScore1='speakingScoreKD'+noKD+'_'+1;
var speakingScore2='speakingScoreKD'+noKD+'_'+2;
var speakingScore3='speakingScoreKD'+noKD+'_'+3;
var speakingScore4='speakingScoreKD'+noKD+'_'+4;
var speakingScore5='speakingScoreKD'+noKD+'_'+5;
var speakingScore6='speakingScoreKD'+noKD+'_'+6;
var speakingScore7='speakingScoreKD'+noKD+'_'+7;
var speakingScore8='speakingScoreKD'+noKD+'_'+8;
var speakingScore9='speakingScoreKD'+noKD+'_'+9;
var speakingScore10='speakingScoreKD'+noKD+'_'+10;

var speakingBadge1_='speakingBadgeKD'+noKD+'_'+1+'_';
var speakingBadge2_='speakingBadgeKD'+noKD+'_'+2+'_';
var speakingBadge3_='speakingBadgeKD'+noKD+'_'+3+'_';
var speakingBadge4_='speakingBadgeKD'+noKD+'_'+4+'_';
var speakingBadge5_='speakingBadgeKD'+noKD+'_'+5+'_';
var speakingBadge6_='speakingBadgeKD'+noKD+'_'+6+'_';
var speakingBadge7_='speakingBadgeKD'+noKD+'_'+7+'_';
var speakingBadge8_='speakingBadgeKD'+noKD+'_'+8+'_';
var speakingBadge9_='speakingBadgeKD'+noKD+'_'+9+'_';
var speakingBadge10_='speakingBadgeKD'+noKD+'_'+10+'_';
var speakingModalScoreKDDefault='speakingModalScoreKD'+noKD;
var class_ ="'w3-button w3-xlarge w3-display-topright'"+">&times;</span>";
document.getElementById(elSpeakingModalScore).innerHTML=(
"    <div class='w3-modal-content w3-card-4'>"+ 
"       <header class='w3-container w3-red'><span onclick="+"document.getElementById('"+speakingModalScoreKDDefault+"').style.display='none' class="+class_+
"         <h3>My Record (KD "+noKD+")</h3>"+ 
"       </header>"+ 
"       <div class='w3-container'>"+ 
"   <table class='w3-table-all'>"+ 
"     <tr>"+ 
"       <th>No</th>"+ 
"       <th>Record</th>"+ 
"       <th>Score</th>"+ 
"       <th>Badge</th>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>1</td>"+ 
"       <td id='speakingNote1'></td>"+ 
"       <td id="+speakingScore1+"></td>"+ 
"       <td id="+speakingBadge1_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>2</td>"+ 
"       <td id='speakingNote2'></td>"+ 
"       <td id="+speakingScore2+"></td>"+ 
"       <td id="+speakingBadge2_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>3</td>"+ 
"       <td id='speakingNote3'></td>"+ 
"       <td id="+speakingScore3+"></td>"+ 
"       <td id="+speakingBadge3_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>4</td>"+ 
"       <td id='speakingNote4'></td>"+ 
"       <td id="+speakingScore4+"></td>"+ 
"       <td id="+speakingBadge4_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>5</td>"+ 
"       <td id='speakingNote5'></td>"+ 
"       <td id="+speakingScore5+"></td>"+ 
"       <td id="+speakingBadge5_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>6</td>"+ 
"       <td id='speakingNote6'></td>"+ 
"       <td id="+speakingScore6+"></td>"+ 
"       <td id="+speakingBadge6_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>7</td>"+ 
"       <td id='speakingNote7'></td>"+ 
"       <td id="+speakingScore7+"></td>"+ 
"       <td id="+speakingBadge7_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>8</td>"+ 
"       <td id='speakingNote8'></td>"+ 
"       <td id="+speakingScore8+"></td>"+ 
"       <td id="+speakingBadge8_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>9</td>"+ 
"       <td id='speakingNote9'></td>"+ 
"       <td id="+speakingScore9+"></td>"+ 
"       <td id="+speakingBadge9_+"></td>"+ 
"     </tr>"+ 
"     <tr>"+ 
"       <td>10</td>"+ 
"       <td id='speakingNote10'></td>"+ 
"       <td id="+speakingScore10+"></td>"+ 
"       <td id="+speakingBadge10_+"></td>"+ 
"     </tr>"+ 
"   </table>"+ 
"        </div>"+ 
"     </div>"
)
}	

function writeSpeaking_(elSpeaking,title,noKD){
var noKD=noKD;
var speakingBadgeKDDefault='speakingBadgeKD'+noKD;
var speakingBadgeKDDefault1=speakingBadgeKDDefault+'_1';
var speakingBadgeKDDefault2=speakingBadgeKDDefault+'_2';
var speakingBadgeKDDefault3=speakingBadgeKDDefault+'_3';
var speakingBadgeKDDefault4=speakingBadgeKDDefault+'_4';
var speakingBadgeKDDefault5=speakingBadgeKDDefault+'_5';
var speakingBadgeKDDefault6=speakingBadgeKDDefault+'_6';
var speakingBadgeKDDefault7=speakingBadgeKDDefault+'_7';
var speakingBadgeKDDefault8=speakingBadgeKDDefault+'_8';
var speakingBadgeKDDefault9=speakingBadgeKDDefault+'_9';
var speakingBadgeKDDefault10=speakingBadgeKDDefault+'_10';	
var speakingCupKDDefault='speakingCupKD'+noKD;
var saveRecord="saveRecord("+"'"+noKD+"'"+")";
var speakingModalScore="modalkan("+"'"+"speakingModalScoreKD"+noKD+"'"+")";

document.getElementById(elSpeaking).innerHTML=(
"<h2 class='w3-animate-left'>"+title+"</h2>"+
"<table border='0'>"+
"<tr>"+
"<td id="+speakingBadgeKDDefault1+"></td>"+
"<td id="+speakingBadgeKDDefault2+"></td>"+
"<td id="+speakingBadgeKDDefault3+"></td>"+
"<td id="+speakingBadgeKDDefault4+"></td>"+
"<td id="+speakingBadgeKDDefault5+"></td>"+
"</tr>"+
"<tr>"+
"<td id="+speakingBadgeKDDefault6+"></td>"+
"<td id="+speakingBadgeKDDefault7+"></td>"+
"<td id="+speakingBadgeKDDefault8+"></td>"+
"<td id="+speakingBadgeKDDefault9+"></td>"+
"<td id="+speakingBadgeKDDefault10+"></td>"+
"</tr>"+
"</table>"+
"<table border='0'>"+
"<tr>"+
"<td id="+speakingCupKDDefault+"></td>"+
"</tr>"+
"</table>"+
"<div class='w3-row-padding w3-theme'>"+
"      <div class='w3-section'>"+
"          <div class='w3-card-2'>"+
"              <img src='image/speaking.png'>"+
"              <div class='w3-container w3-light-gray'>"+
"                <div class='app'>"+
"				 <p>Speak this word/sentence:</p>"+
"				<div class='' id='speakingDiv1'><p id=''><h2>1</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem1'></label></div>"+
"				<div class='' id='speakingDiv2'><p id=''><h2>2</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem2'></label></div>"+
"				<div class='' id='speakingDiv3'><p id=''><h2>3</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem3'></label></div>"+
"				<div class='' id='speakingDiv4'><p id=''><h2>4</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem4'></label></div>"+
"				<div class='' id='speakingDiv5'><p id=''><h2>5</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem5'></label></div>"+
"				<div class='' id='speakingDiv6'><p id=''><h2>6</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem6'></label></div>"+
"				<div class='' id='speakingDiv7'><p id=''><h2>7</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem7'></label></div>"+
"				<div class='' id='speakingDiv8'><p id=''><h2>8</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem8'></label></div>"+
"				<div class='' id='speakingDiv9'><p id=''><h2>9</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem9'></label></div>"+
"				<div class='' id='speakingDiv10'><p id=''><h2>10</h2></p><label class='w3-input w3-border w3-white' type='text' id='speakingItem10'></label></div>"+
"				<div class='w3-center'><div class='w3-bar'>"+
"				<button class='w3-bar-item w3-yellow' id='' title='How to speak it' onclick='getSpeakingItem()'><i class='fa fa-volume-up fa-2x'></i></button>"+
"               <button class='w3-bar-item w3-green' id='start-record-btn' title='Start recording' onclick='startRecord()'><i class='fa fa-microphone fa-2x'></i></button>"+
"              <button class='w3-bar-item w3-red' id='pause-record-btn' title='Pause recording'><i class='fa fa-pause fa-2x' onclick='pauseRecord()'></i></button>"+
"             <button class='w3-bar-item w3-blue' id='save-note-btn' title='Save record' onclick="+saveRecord+"><i class='fa fa-save fa-2x'></i></button>"+
"			</div></div>"+
"				<div class='w3-center'><div class='w3-bar'>"+
"				<button class='w3-bar-item w3-yellow' id='back' title='Back' onclick='c()'><i class='fa fa-angle-left fa-2x'></i></button>"+
"				<button class='w3-bar-item w3-yellow' id='next' title='Next question' onclick='b()'><i class='fa fa-angle-right fa-2x'></i></button>"+
"				</div></div>"+
//"			    <p>You speak:</p>"+
//"<input class='w3-input w3-border' type='text' id='note-textarea' oninput='noteSpeaking()'></input>"+
"			 <p>Tap speaker button to listen to how the word/sentence is spoken</p>"+
"                 <p id='recording-instructions'>Tap microphone button and allow access, and speak the word/sentence</p>"+
"				 <p>Tap pause button to stop recording</p>"+
"				 <p>Tap save button to save your recording</p>"+
"			  </div>"+
"	          </div>"+
"			  <div class='w3-center'>"+
"			    <div class='w3-bar'>"+
"				<button class='w3-bar-item w3-yellow' id='' title='Show records, scores, and badges' onclick="+speakingModalScore+">Show My Records</i></button>"+
"				</div>"+
"			  </div>"+
"          </div>"+
"        </div>"+
"    </div>"
)	
}

function getSpeakingItem()
{
var speakingNoDefault=retrieveItem('speakingNoDefault');
var speakingId='speakingItem'+speakingNoDefault;
var speakingItemDefault=localStorage.getItem(speakingId);
document.getElementById(speakingId).innerHTML=speakingItemDefault;
readOutLoud(speakingItemDefault);
}

function getOfflineSpeaking(noKD){
var rnd=getRndInteger(1,20).toString();
var speakingNo1=storeItem('speakingNo1',getRndInteger(1,2).toString());
var speakingNo2=storeItem('speakingNo2',getRndInteger(3,4).toString());
var speakingNo3=storeItem('speakingNo3',getRndInteger(5,6).toString());
var speakingNo4=storeItem('speakingNo4',getRndInteger(7,8).toString());
var speakingNo5=storeItem('speakingNo5',getRndInteger(9,10).toString());
var speakingNo6=storeItem('speakingNo6',getRndInteger(11,12).toString());
var speakingNo7=storeItem('speakingNo7',getRndInteger(13,14).toString());
var speakingNo8=storeItem('speakingNo8',getRndInteger(15,16).toString());
var speakingNo9=storeItem('speakingNo9',getRndInteger(17,18).toString());
var speakingNo10=storeItem('speakingNo10',getRndInteger(19,20).toString());
var speakingItem1='speakingItemKD'+noKD+'_'+'1';
var speakingItem2='speakingItemKD'+noKD+'_'+'2';
var speakingItem3='speakingItemKD'+noKD+'_'+'3';
var speakingItem4='speakingItemKD'+noKD+'_'+'4';
var speakingItem5='speakingItemKD'+noKD+'_'+'5';
var speakingItem6='speakingItemKD'+noKD+'_'+'6';
var speakingItem7='speakingItemKD'+noKD+'_'+'7';
var speakingItem8='speakingItemKD'+noKD+'_'+'8';
var speakingItem9='speakingItemKD'+noKD+'_'+'9';
var speakingItem10='speakingItemKD'+noKD+'_'+'10';

var speakingContent1=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo1)-1));
var speakingContent2=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo2)-1));
var speakingContent3=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo3)-1));
var speakingContent4=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo4)-1));
var speakingContent5=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo5)-1));
var speakingContent6=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo6)-1));
var speakingContent7=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo7)-1));
var speakingContent8=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo8)-1));
var speakingContent9=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo9)-1));
var speakingContent10=parseItem('speakingSoalKD'+noKD+'_1',toString(parseInt(speakingNo10)-1));

localStorage.setItem(speakingItem1,speakingContent1);
localStorage.setItem(speakingItem2,speakingContent2);
localStorage.setItem(speakingItem3,speakingContent3);
localStorage.setItem(speakingItem4,speakingContent4);
localStorage.setItem(speakingItem5,speakingContent5);
localStorage.setItem(speakingItem6,speakingContent6);
localStorage.setItem(speakingItem7,speakingContent7);
localStorage.setItem(speakingItem8,speakingContent8);
localStorage.setItem(speakingItem9,speakingContent9);
localStorage.setItem(speakingItem10,speakingContent10);

//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo1'),noKD,speakingItem1);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo2'),noKD,speakingItem2);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo3'),noKD,speakingItem3);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo4'),noKD,speakingItem4);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo5'),noKD,speakingItem5);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo6'),noKD,speakingItem6);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo7'),noKD,speakingItem7);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo8'),noKD,speakingItem8);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo9'),noKD,speakingItem9);
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo10'),noKD,speakingItem10);
var speakingItem1=retrieveItem(speakingItem1);	
var speakingItem2=retrieveItem(speakingItem2);	
var speakingItem3=retrieveItem(speakingItem3);	
var speakingItem4=retrieveItem(speakingItem4);	
var speakingItem5=retrieveItem(speakingItem5);	
var speakingItem6=retrieveItem(speakingItem6);	
var speakingItem7=retrieveItem(speakingItem7);	
var speakingItem8=retrieveItem(speakingItem8);	
var speakingItem9=retrieveItem(speakingItem9);	
var speakingItem10=retrieveItem(speakingItem10);	
				
//storeItem('noSpeaking',rnd);
//var noSpeaking=retrieveItem('noSpeaking');
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',noSpeaking,1,'itemSpeaking');
//var itemSpeaking=retrieveItem('itemSpeaking');
}

function getSpeakingItem()
{
var speakingNoDefault=retrieveItem('speakingNoDefault');
var speakingId='speakingItem'+speakingNoDefault;
var speakingItemDefault=localStorage.getItem(speakingId);
document.getElementById(speakingId).innerHTML=speakingItemDefault;
readOutLoud(speakingItemDefault);
}

function getSpeaking(noKD){
var rnd=getRndInteger(1,20).toString();
var speakingNo1=storeItem('speakingNo1',getRndInteger(1,2).toString());
var speakingNo2=storeItem('speakingNo2',getRndInteger(3,4).toString());
var speakingNo3=storeItem('speakingNo3',getRndInteger(5,6).toString());
var speakingNo4=storeItem('speakingNo4',getRndInteger(7,8).toString());
var speakingNo5=storeItem('speakingNo5',getRndInteger(9,10).toString());
var speakingNo6=storeItem('speakingNo6',getRndInteger(11,12).toString());
var speakingNo7=storeItem('speakingNo7',getRndInteger(13,14).toString());
var speakingNo8=storeItem('speakingNo8',getRndInteger(15,16).toString());
var speakingNo9=storeItem('speakingNo9',getRndInteger(17,18).toString());
var speakingNo10=storeItem('speakingNo10',getRndInteger(19,20).toString());
var speakingItem1='speakingItemKD'+noKD+'_'+'1';
var speakingItem2='speakingItemKD'+noKD+'_'+'2';
var speakingItem3='speakingItemKD'+noKD+'_'+'3';
var speakingItem4='speakingItemKD'+noKD+'_'+'4';
var speakingItem5='speakingItemKD'+noKD+'_'+'5';
var speakingItem6='speakingItemKD'+noKD+'_'+'6';
var speakingItem7='speakingItemKD'+noKD+'_'+'7';
var speakingItem8='speakingItemKD'+noKD+'_'+'8';
var speakingItem9='speakingItemKD'+noKD+'_'+'9';
var speakingItem10='speakingItemKD'+noKD+'_'+'10';
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo1'),noKD,speakingItem1);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo2'),noKD,speakingItem2);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo3'),noKD,speakingItem3);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo4'),noKD,speakingItem4);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo5'),noKD,speakingItem5);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo6'),noKD,speakingItem6);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo7'),noKD,speakingItem7);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo8'),noKD,speakingItem8);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo9'),noKD,speakingItem9);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',retrieveItem('speakingNo10'),noKD,speakingItem10);
var speakingItem1=retrieveItem(speakingItem1);	
var speakingItem2=retrieveItem(speakingItem2);	
var speakingItem3=retrieveItem(speakingItem3);	
var speakingItem4=retrieveItem(speakingItem4);	
var speakingItem5=retrieveItem(speakingItem5);	
var speakingItem6=retrieveItem(speakingItem6);	
var speakingItem7=retrieveItem(speakingItem7);	
var speakingItem8=retrieveItem(speakingItem8);	
var speakingItem9=retrieveItem(speakingItem9);	
var speakingItem10=retrieveItem(speakingItem10);	
				
//storeItem('noSpeaking',rnd);
//var noSpeaking=retrieveItem('noSpeaking');
//storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','speaking','getOneItem',noSpeaking,1,'itemSpeaking');
//var itemSpeaking=retrieveItem('itemSpeaking');
}
function removeSpeaking(){
	localStorage.removeItem('speakingNo1');
	localStorage.removeItem('speakingNo2');
	localStorage.removeItem('speakingNo3');
	localStorage.removeItem('speakingNo4');
	localStorage.removeItem('speakingNo5');
	localStorage.removeItem('speakingNo6');
	localStorage.removeItem('speakingNo7');
	localStorage.removeItem('speakingNo8');
	localStorage.removeItem('speakingNo9');
	localStorage.removeItem('speakingNo10');
	localStorage.removeItem('speakingItem1');
	localStorage.removeItem('speakingItem2');
	localStorage.removeItem('speakingItem3');
	localStorage.removeItem('speakingItem4');
	localStorage.removeItem('speakingItem5');
	localStorage.removeItem('speakingItem6');
	localStorage.removeItem('speakingItem7');
	localStorage.removeItem('speakingItem8');
	localStorage.removeItem('speakingItem9');
	localStorage.removeItem('speakingItem10');
	localStorage.removeItem('speakingDefaultNo');
	localStorage.removeItem('speakingDefaultItem');
}
function removeLSPref(pref, newName) {
    for (var key in localStorage) {
        if (key.indexOf(pref) == 0) {
            if (key != newName) {
                localStorage.removeItem(key);
            }
        }
    }
}
function a(noKD){
					localStorage.setItem('speakingKDDefault',noKD);	
                    getSpeaking(noKD);
                    //if score exists
					var speakingScoreKD='speakingScoreKD'+noKD+'_';
					var speakingScoreId1=speakingScoreKD+1;
					var speakingScoreId2=speakingScoreKD+2;
					var speakingScoreId3=speakingScoreKD+3;
					var speakingScoreId4=speakingScoreKD+4;
					var speakingScoreId5=speakingScoreKD+5;
					var speakingScoreId6=speakingScoreKD+6;
					var speakingScoreId7=speakingScoreKD+7;
					var speakingScoreId8=speakingScoreKD+8;
					var speakingScoreId9=speakingScoreKD+9;
					var speakingScoreId10=speakingScoreKD+10;
					
					var speakingNoteKD='speakingNoteKD'+noKD+'_';
					var speakingNoteId1=speakingNoteKD+1;
					var speakingNoteId2=speakingNoteKD+2;
					var speakingNoteId3=speakingNoteKD+3;
					var speakingNoteId4=speakingNoteKD+4;
					var speakingNoteId5=speakingNoteKD+5;
					var speakingNoteId6=speakingNoteKD+6;
					var speakingNoteId7=speakingNoteKD+7;
					var speakingNoteId8=speakingNoteKD+8;
					var speakingNoteId9=speakingNoteKD+9;
					var speakingNoteId10=speakingNoteKD+10;
					
					//jika speakingScore tidak kosong
					if(localStorage.getItem(speakingScoreId1) !=null) {var speakingScore1=parseInt(localStorage.getItem(speakingScoreId1));}
					if(localStorage.getItem(speakingScoreId2) !=null) {var speakingScore2=parseInt(localStorage.getItem(speakingScoreId2));}
					if(localStorage.getItem(speakingScoreId3) !=null) {var speakingScore3=parseInt(localStorage.getItem(speakingScoreId3));}
					if(localStorage.getItem(speakingScoreId4) !=null) {var speakingScore4=parseInt(localStorage.getItem(speakingScoreId4));}
					if(localStorage.getItem(speakingScoreId5) !=null) {var speakingScore5=parseInt(localStorage.getItem(speakingScoreId5));}
					if(localStorage.getItem(speakingScoreId6) !=null) {var speakingScore6=parseInt(localStorage.getItem(speakingScoreId6));}
					if(localStorage.getItem(speakingScoreId7) !=null) {var speakingScore7=parseInt(localStorage.getItem(speakingScoreId7));}
					if(localStorage.getItem(speakingScoreId8) !=null) {var speakingScore8=parseInt(localStorage.getItem(speakingScoreId8));}
					if(localStorage.getItem(speakingScoreId9) !=null) {var speakingScore9=parseInt(localStorage.getItem(speakingScoreId9));}
					if(localStorage.getItem(speakingScoreId10) !=null) {var speakingScore10=parseInt(localStorage.getItem(speakingScoreId10));}
                    //jika speakingScore kosong
					if(localStorage.getItem(speakingScoreId1)==null || localStorage.getItem(speakingScoreId2)==null || localStorage.getItem(speakingScoreId3)==null || localStorage.getItem(speakingScoreId4)==null || localStorage.getItem(speakingScoreId5)==null || localStorage.getItem(speakingScoreId6)==null || localStorage.getItem(speakingScoreId7)==null || localStorage.getItem(speakingScoreId8)==null || localStorage.getItem(speakingScoreId9)==null || localStorage.getItem(speakingScoreId10)==null) 
					{ 
				      speakingScore1=parseInt(localStorage.getItem(speakingScoreId1));
				      speakingScore2=parseInt(localStorage.getItem(speakingScoreId2));
				      speakingScore3=parseInt(localStorage.getItem(speakingScoreId3));
				      speakingScore4=parseInt(localStorage.getItem(speakingScoreId4));
				      speakingScore5=parseInt(localStorage.getItem(speakingScoreId5));
				      speakingScore6=parseInt(localStorage.getItem(speakingScoreId6));
				      speakingScore7=parseInt(localStorage.getItem(speakingScoreId7));
				      speakingScore8=parseInt(localStorage.getItem(speakingScoreId8));
				      speakingScore9=parseInt(localStorage.getItem(speakingScoreId9));
				      speakingScore10=parseInt(localStorage.getItem(speakingScoreId10));
					}
					var speakingNote1=localStorage.getItem('speakingNote1'+noKD+'_'+'1');
					var speakingNote2=localStorage.getItem('speakingNote2'+noKD+'_'+'2');
					var speakingNote3=localStorage.getItem('speakingNote3'+noKD+'_'+'3');
					var speakingNote4=localStorage.getItem('speakingNote4'+noKD+'_'+'4');
					var speakingNote5=localStorage.getItem('speakingNote5'+noKD+'_'+'5');
					var speakingNote6=localStorage.getItem('speakingNote6'+noKD+'_'+'6');
					var speakingNote7=localStorage.getItem('speakingNote7'+noKD+'_'+'7');
					var speakingNote8=localStorage.getItem('speakingNote8'+noKD+'_'+'8');
					var speakingNote9=localStorage.getItem('speakingNote9'+noKD+'_'+'9');
					var speakingNote10=localStorage.getItem('speakingNote10'+noKD+'_'+'10');	

					//cek badge
					var speakingBadgeKD='speakingBadgeKD'+noKD+'_';
					var speakingBadgeId1=speakingBadgeKD+'1';
					var speakingBadgeId1_=speakingBadgeKD+'1'+'_';
					var speakingBadgeId2=speakingBadgeKD+'2';
					var speakingBadgeId2_=speakingBadgeKD+'2'+'_';					
					var speakingBadgeId3=speakingBadgeKD+'3';
					var speakingBadgeId3_=speakingBadgeKD+'3'+'_';						
					var speakingBadgeId4=speakingBadgeKD+'4';
					var speakingBadgeId4_=speakingBadgeKD+'4'+'_';						
					var speakingBadgeId5=speakingBadgeKD+'5';
					var speakingBadgeId5_=speakingBadgeKD+'5'+'_';					
					var speakingBadgeId6=speakingBadgeKD+'6';
					var speakingBadgeId6_=speakingBadgeKD+'6'+'_';					
					var speakingBadgeId7=speakingBadgeKD+'7';
					var speakingBadgeId7_=speakingBadgeKD+'7'+'_';					
					var speakingBadgeId8=speakingBadgeKD+'8';
					var speakingBadgeId8_=speakingBadgeKD+'8'+'_';					
					var speakingBadgeId9=speakingBadgeKD+'9';
					var speakingBadgeId9_=speakingBadgeKD+'9'+'_';					
					var speakingBadgeId10=speakingBadgeKD+'10';
					var speakingBadgeId10_=speakingBadgeKD+'10'+'_';	
					
					//cek badgeid exist
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge1=localStorage.getItem(speakingBadgeKD+'1');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge2=localStorage.getItem(speakingBadgeKD+'2');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge3=localStorage.getItem(speakingBadgeKD+'3');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge4=localStorage.getItem(speakingBadgeKD+'4');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge5=localStorage.getItem(speakingBadgeKD+'5');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge6=localStorage.getItem(speakingBadgeKD+'6');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge7=localStorage.getItem(speakingBadgeKD+'7');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge8=localStorage.getItem(speakingBadgeKD+'8');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge9=localStorage.getItem(speakingBadgeKD+'9');}
					if(localStorage.getItem(speakingBadgeId1) !=null || localStorage.getItem(speakingBadgeId1_) !=null) { var speakingBadge10=localStorage.getItem(speakingBadgeKD+'10');}
                    
					//tulis skor
					var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";	
			
					if(speakingScore1 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'1',1);speakingBadge1=1;document.getElementById(speakingScoreId1).innerHTML=speakingScore1;document.getElementById(speakingBadgeId1).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId1_).innerHTML=speakingBadgeWrite;}
					if(speakingScore2 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'2',1);speakingBadge2=1;document.getElementById(speakingScoreId2).innerHTML=speakingScore2;document.getElementById(speakingBadgeId2).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId2_).innerHTML=speakingBadgeWrite;}
					if(speakingScore3 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'3',1);speakingBadge3=1;document.getElementById(speakingScoreId3).innerHTML=speakingScore3;document.getElementById(speakingBadgeId3).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId3_).innerHTML=speakingBadgeWrite;}
					if(speakingScore4 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'4',1);speakingBadge4=1;document.getElementById(speakingScoreId4).innerHTML=speakingScore4;document.getElementById(speakingBadgeId4).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId4_).innerHTML=speakingBadgeWrite;}
					if(speakingScore5 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'5',1);speakingBadge5=1;document.getElementById(speakingScoreId5).innerHTML=speakingScore5;document.getElementById(speakingBadgeId5).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId5_).innerHTML=speakingBadgeWrite;}
					if(speakingScore6 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'6',1);speakingBadge6=1;document.getElementById(speakingScoreId6).innerHTML=speakingScore6;document.getElementById(speakingBadgeId6).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId6_).innerHTML=speakingBadgeWrite;}
					if(speakingScore7 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'7',1);speakingBadge7=1;document.getElementById(speakingScoreId7).innerHTML=speakingScore7;document.getElementById(speakingBadgeId7).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId7_).innerHTML=speakingBadgeWrite;}
					if(speakingScore8 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'8',1);speakingBadge8=1;document.getElementById(speakingScoreId8).innerHTML=speakingScore8;document.getElementById(speakingBadgeId8).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId8_).innerHTML=speakingBadgeWrite;}
					if(speakingScore9 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'9',1);speakingBadge9=1;document.getElementById(speakingScoreId9).innerHTML=speakingScore9;document.getElementById(speakingBadgeId9).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId9_).innerHTML=speakingBadgeWrite;}
					if(speakingScore10 > 0) 
					{ localStorage.setItem(speakingBadgeKD+'10',1);speakingBadge10=1;document.getElementById(speakingScoreId10).innerHTML=speakingScore10;document.getElementById(speakingBadgeId10).innerHTML=speakingBadgeWrite;document.getElementById(speakingBadgeId10_).innerHTML=speakingBadgeWrite;}				
					
					//cek jika lolos KD
					var speakingCupKDId='speakingCupKD'+noKD;					
					var speakingPassKDId='speakingPassKD'+noKD;	
                    if(localStorage.getItem(speakingPassKDId)==null)
                    {
                      var speakingScoreTotalKDDefaultId='speakingScoreTotalKD'+noKD;
                      var speakingScoreTotalKDDefault=speakingScore1+speakingScore2+speakingScore3+speakingScore4+speakingScore5+speakingScore6+speakingScore7+speakingScore8+speakingScore9+speakingScore10;
					  localStorage.setItem(speakingScoreTotalKDDefaultId,speakingScoreTotalKDDefault);
					  if(parseInt(speakingScoreTotalKDDefault)>79){localStorage.setItem('speakingPassKD'+noKD,1);}
					  if(parseInt(speakingScoreTotalKDDefault)<80){localStorage.setItem('speakingPassKD'+noKD,0);}
                    }						
					if(localStorage.getItem(speakingPassKDId)!=null || parseInt(localStorage.getItem(speakingPassKDId))<80)
                    {
                      speakingScoreTotalKDDefaultId='speakingScoreTotalKD'+noKD;
                      speakingScoreTotalKDDefault=speakingScore1+speakingScore2+speakingScore3+speakingScore4+speakingScore5+speakingScore6+speakingScore7+speakingScore8+speakingScore9+speakingScore10;
					  localStorage.setItem(speakingScoreTotalKDDefaultId,speakingScoreTotalKDDefault);
					  if(parseInt(speakingScoreTotalKDDefault)>79){localStorage.setItem('speakingPassKD'+noKD,1);}
					  if(parseInt(speakingScoreTotalKDDefault)<80){localStorage.setItem('speakingPassKD'+noKD,0);}
					}
					  var speakingPassKDDefault=localStorage.getItem(speakingPassKDId);
					  if(speakingPassKDDefault==1){
		                var speakingCupWrite="<img src='image/cup.png' width='100'></img>";						
						document.getElementById(speakingCupKDId).innerHTML=speakingCupWrite;
					  }					
					var speakingNoDefault=1;
					localStorage.setItem('speakingNoDefault',speakingNoDefault);
					var speakingId='speakingItemKD'+noKD+'_'+speakingNoDefault;	
					var speakingItemDefault=localStorage.getItem(speakingId);
	                localStorage.setItem('speakingItemDefault',speakingItemDefault);					
	                document.getElementById(speakingId).innerHTML=speakingItemDefault;	
					speakingPerlihatkan('#speakingDiv1');
}

function b(noKD){
					var speakingNoDefault=localStorage.getItem('speakingNoDefault');
					var speakingNoDefault=parseInt(speakingNoDefault)+1;
	                if(speakingNoDefault>10){
						speakingNoDefault=10;
					} 
					if(speakingNoDefault<11){
						speakingNoDefault=speakingNoDefault;
						}
					localStorage.setItem('speakingNoDefault',speakingNoDefault);
					var speakingId='speakingItemKD'+noKD+'_'+speakingNoDefault;	
					var speakingItemDefault=localStorage.getItem(speakingId);
	                localStorage.setItem('speakingItemDefault',speakingItemDefault);					
	                document.getElementById(speakingId).innerHTML=speakingItemDefault;	
					
					var speakingDivDefault='#speakingDiv'+speakingNoDefault;
					speakingPerlihatkan(speakingDivDefault);
}

function c(noKD){
					var speakingNoDefault=retrieveItem('speakingNoDefault');
					var speakingNoDefault=parseInt(speakingNoDefault)-1;
	                if(speakingNoDefault<1){
						speakingNoDefault=1;
					} 
					if(speakingNoDefault>0){
						speakingNoDefault=speakingNoDefault;
						}					
					var speakingId='speakingItemKD'+noKD+'_'+speakingNoDefault;	
					var speakingItemDefault=localStorage.getItem(speakingId);
					localStorage.setItem('speakingNoDefault',speakingNoDefault)
					localStorage.setItem('speakingItemDefault',speakingItemDefault);
                    document.getElementById(speakingId).innerHTML=speakingItemDefault;
					var speakingDivDefault='#speakingDiv'+speakingNoDefault;
					speakingPerlihatkan(speakingDivDefault);
}

function speakingSembunyikanSemua(){
  w3.hide('#speakingDiv1');	
  w3.hide('#speakingDiv2');	
  w3.hide('#speakingDiv3');	
  w3.hide('#speakingDiv4');	
  w3.hide('#speakingDiv5');	
  w3.hide('#speakingDiv6');	
  w3.hide('#speakingDiv7');	
  w3.hide('#speakingDiv8');	
  w3.hide('#speakingDiv9');	
  w3.hide('#speakingDiv10');	
}
function speakingPerlihatkan(id) {
  speakingSembunyikanSemua();
  w3.show(id);
}
function speakingModalkan(id){
	document.getElementById(id).style.display='block';
	var speakingKDDefault=localStorage.getItem('speakingKDDefault');
    var speakingScoreTotalKD=parseInt(localStorage.getItem('speakingScoreTotalKD'+speakingKDDefault));
	if(speakingScoreTotalKD>79)
    {playAudio('yeah');}
    else if(speakingScoreTotalKD<80)
    {playAudio('fail');}
}

