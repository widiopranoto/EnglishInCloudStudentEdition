try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

var speakingKDDefault=localStorage.getItem('speakingKDDefault');
var noteId="#note-textarea"+speakingKDDefault;
var noteTextarea = $(noteId);
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};

recognition.onstart = function() { 
  instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}
/*-----------------------------
      App buttons and input 
------------------------------*/

function startRecord(){
  if (noteContent.length) {
    noteContent += ' ';
  }
   recognition.start();	
    
}

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
    recognition.start();
});

function pauseRecord(){
  recognition.stop();
  instructions.text('Voice recognition paused.');	
}

$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});


function noteRecord(){
  noteContent = $(this).val();
}	

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

function saveRecord(){
  var noKD=localStorage.getItem('speakingKDDefault');
  recognition.stop();
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

	if(localStorage.getItem(speakingScore1)===null || localStorage.getItem(speakingScore1)===undefined){localStorage.setItem(speakingScore1,0);}
	if(localStorage.getItem(speakingScore2)===null || localStorage.getItem(speakingScore2)===undefined){localStorage.setItem(speakingScore2,0);}
	if(localStorage.getItem(speakingScore3)===null || localStorage.getItem(speakingScore3)===undefined){localStorage.setItem(speakingScore3,0);}
	if(localStorage.getItem(speakingScore4)===null || localStorage.getItem(speakingScore4)===undefined){localStorage.setItem(speakingScore4,0);}
	if(localStorage.getItem(speakingScore5)===null || localStorage.getItem(speakingScore5)===undefined){localStorage.setItem(speakingScore5,0);}
	if(localStorage.getItem(speakingScore6)===null || localStorage.getItem(speakingScore6)===undefined){localStorage.setItem(speakingScore6,0);}
	if(localStorage.getItem(speakingScore7)===null || localStorage.getItem(speakingScore7)===undefined){localStorage.setItem(speakingScore7,0);}
	if(localStorage.getItem(speakingScore8)===null || localStorage.getItem(speakingScore8)===undefined){localStorage.setItem(speakingScore8,0);}
	if(localStorage.getItem(speakingScore9)===null || localStorage.getItem(speakingScore9)===undefined){localStorage.setItem(speakingScore9,0);}
	if(localStorage.getItem(speakingScore10)===null || localStorage.getItem(speakingScore10)===undefined){localStorage.setItem(speakingScore10,0);}

  if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
	document.getElementById('speakingModal').style.display='block';	
	playAudio('fail');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
	var speakingNoDefault=localStorage.getItem('speakingNoDefault');
    saveNote(speakingNoDefault,noteContent,noKD);
	//update record
	var speakingId='speakingNoteKD'+noKD+'_'+speakingNoDefault;
	var speakingNote='speakingNoteKD'+noKD+'_'+speakingNoDefault;
	var speakingItem=localStorage.getItem(speakingNote);
	document.getElementById(speakingId).innerHTML=speakingItem;
    //update score
	var speakingScoreId='speakingScoreKD'+noKD+'_'+speakingNoDefault;
	var speakingScoreId_=speakingScoreId+'_';
	var speakingBadgeId='speakingBadgeKD'+noKD+'_'+speakingNoDefault;
	var speakingBadgeId_=speakingBadgeId+'_';
	
	if(speakingItem.length>0)
	{
	var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";
	document.getElementById(speakingBadgeId).innerHTML=speakingBadgeWrite;
	document.getElementById(speakingBadgeId_).innerHTML=speakingBadgeWrite;	
	document.getElementById(speakingScoreId).innerHTML=10;	
	localStorage.setItem(speakingScoreId,10);
    localStorage.setItem(speakingBadgeId,1);
	playAudio('score');
	b(noKD);
	}
	//if finish
	if(speakingNoDefault==10)
	{	
	var speakingScore1=parseInt(localStorage.getItem(speakingScore1));
	var speakingScore2=parseInt(localStorage.getItem(speakingScore2));
	var speakingScore3=parseInt(localStorage.getItem(speakingScore3));
	var speakingScore4=parseInt(localStorage.getItem(speakingScore4));
	var speakingScore5=parseInt(localStorage.getItem(speakingScore5));
	var speakingScore6=parseInt(localStorage.getItem(speakingScore6));
	var speakingScore7=parseInt(localStorage.getItem(speakingScore7));
	var speakingScore8=parseInt(localStorage.getItem(speakingScore8));
	var speakingScore9=parseInt(localStorage.getItem(speakingScore9));
	var speakingScore10=parseInt(localStorage.getItem(speakingScore10));

	var speakingKDNo='speakingKDNo'+noKD;
	noKD=parseInt(noKD);
    if(noKD==1){var noSoal1=3;var noSoal2=4;var noSoal3=5;var noSoal4=6;var noSoal5=7; var noSoal6=8;var noSoal7=9;var noSoal8=10;var noSoal9=11;var noSoal10=12;}
    if(noKD==2){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==3){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==4){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==5){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==6){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==7){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==8){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==9){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==10){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==11){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==12){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==13){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==14){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==15){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==16){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==17){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==18){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==19){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==20){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==21){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==22){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==23){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==24){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==25){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==26){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==27){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==28){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==29){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==30){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==31){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==32){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==33){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==34){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==35){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==36){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}
    if(noKD==37){var noSoal1=noKD-1+'3';var noSoal2=noKD-1+'4';var noSoal3=noKD-1+'5';var noSoal4=noKD-1+'6';var noSoal5=noKD-1+'7'; var noSoal6=noKD-1+'8';var noSoal7=noKD-1+'9';var noSoal8=noKD+'0';var noSoal9=noKD+'1';var noSoal10=noKD+'2';}	
    //simpan hasil di server
	var usernameStored=retrieveItem('usernameStored');
	var inputUrlSpreadSheet="https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing";
	var inputNamaSheet="hasil_speaking_peritem";
	var action="sendItem";
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore1,noSoal1);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore2,noSoal2);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore3,noSoal3);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore4,noSoal4);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore5,noSoal5);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore6,noSoal6);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore7,noSoal7);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore8,noSoal8);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore9,noSoal9);
	sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,speakingScore10,noSoal10);
	//hitung total
	var speakingScoreTotalKD=speakingScore1+speakingScore2+speakingScore3+speakingScore4+speakingScore5+speakingScore6+speakingScore7+speakingScore8+speakingScore9+speakingScore10;
      //jika sudah ada nilai total KD speaking
	//var speakingKDNo=localStorage.getItem('speakingKDDefault');  
	var speakingScoreTotalKDDefault='speakingScoreTotalKD'+noKD;
	//cek apakah eksis
    if(localStorage.getItem(speakingScoreTotalKDDefault)===null || localStorage.getItem(speakingScoreTotalKDDefault)===undefined)
	{
		localStorage.setItem(speakingScoreTotalKDDefault,speakingScoreTotalKD);
		}	
	//jika sudah nilai total KD speaking > KKM
	if(parseInt(speakingScoreTotalKD)>79)
	  {   //simpan speakingPass
          var speakingScoreTotalKD=localStorage.getItem(speakingScoreTotalKDDefault);          
		  var speakingPassKDDefault='speakingPassKD'+noKD;
		  localStorage.setItem(speakingPassKDDefault,'passed');
		  //tulis cup
		  var speakingCupKDId='speakingCupKD'+noKD;
		  var speakingCupKDId_='speakingCupKD'+noKD+'_';		  
		  var speakingCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(speakingCupKDId).innerHTML=speakingCupWrite;
		  document.getElementById(speakingCupKDId_).innerHTML=speakingCupWrite;
		  //tampilkan modal
		  modalkan('speakingModalCup');
		  playAudio('yeah');

	  }
	var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";
	document.getElementById(speakingBadgeId).innerHTML=speakingBadgeWrite;
	document.getElementById(speakingBadgeId+"_").innerHTML=speakingBadgeWrite;		
	}
	//end 10
	//if no score
	if(speakingItem.length<1){
	document.getElementById(speakingScoreId).innerHTML=0;
    playAudio('fail');	
	}
    // Reset variables and update UI.
    noteContent = '';
    //renderNotes(getAllNotes());
    noteTextarea.val('');
    instructions.text('Note saved successfully.');
  }	
}


$('#save-note-btn').on('click', function(e) {
  recognition.stop();
    
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

	if(localStorage.getItem(speakingScore1)===null || localStorage.getItem(speakingScore1)===undefined){localStorage.setItem(speakingScore1,0);}
	if(localStorage.getItem(speakingScore2)===null || localStorage.getItem(speakingScore2)===undefined){localStorage.setItem(speakingScore2,0);}
	if(localStorage.getItem(speakingScore3)===null || localStorage.getItem(speakingScore3)===undefined){localStorage.setItem(speakingScore3,0);}
	if(localStorage.getItem(speakingScore4)===null || localStorage.getItem(speakingScore4)===undefined){localStorage.setItem(speakingScore4,0);}
	if(localStorage.getItem(speakingScore5)===null || localStorage.getItem(speakingScore5)===undefined){localStorage.setItem(speakingScore5,0);}
	if(localStorage.getItem(speakingScore6)===null || localStorage.getItem(speakingScore6)===undefined){localStorage.setItem(speakingScore6,0);}
	if(localStorage.getItem(speakingScore7)===null || localStorage.getItem(speakingScore7)===undefined){localStorage.setItem(speakingScore7,0);}
	if(localStorage.getItem(speakingScore8)===null || localStorage.getItem(speakingScore8)===undefined){localStorage.setItem(speakingScore8,0);}
	if(localStorage.getItem(speakingScore9)===null || localStorage.getItem(speakingScore9)===undefined){localStorage.setItem(speakingScore9,0);}
	if(localStorage.getItem(speakingScore10)===null || localStorage.getItem(speakingScore10)===undefined){localStorage.setItem(speakingScore10,0);}

  if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
	document.getElementById('speakingModal').style.display='block';	
	playAudio('fail');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
	var speakingNoDefault=localStorage.getItem('speakingNoDefault');
    saveNote(speakingNoDefault,noteContent);
	//update record
	var speakingId='speakingNoteKD'+noKD+'_'+speakingNoDefault;
	var speakingNote='speakingNoteKD'+noKD+'_'+speakingNoDefault;
	var speakingItem=localStorage.getItem(speakingNote);
	document.getElementById(speakingId).innerHTML=speakingItem;
    //update score
	var speakingScoreId='speakingScoreKD'+noKD+'_'+speakingNoDefault;
	var speakingScoreId_=speakingScoreId+'_';
	var speakingBadgeId='speakingBadgeKD'+noKD+'_'+speakingNoDefault;
	var speakingBadgeId_=speakingBadgeId+'_';
	
	if(speakingItem.length>0)
	{
	var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";
	document.getElementById(speakingBadgeId).innerHTML=speakingBadgeWrite;
	document.getElementById(speakingBadgeId_).innerHTML=speakingBadgeWrite;	
	document.getElementById(speakingScoreId).innerHTML=10;	
	localStorage.setItem(speakingScoreId,10);
    localStorage.setItem(speakingBadgeId,1);
	playAudio('score');
	b();
	}
	//if finish
	if(speakingNoDefault==10)
	{	
	var speakingScore1=parseInt(localStorage.getItem(speakingScore1));
	var speakingScore2=parseInt(localStorage.getItem(speakingScore2));
	var speakingScore3=parseInt(localStorage.getItem(speakingScore3));
	var speakingScore4=parseInt(localStorage.getItem(speakingScore4));
	var speakingScore5=parseInt(localStorage.getItem(speakingScore5));
	var speakingScore6=parseInt(localStorage.getItem(speakingScore6));
	var speakingScore7=parseInt(localStorage.getItem(speakingScore7));
	var speakingScore8=parseInt(localStorage.getItem(speakingScore8));
	var speakingScore9=parseInt(localStorage.getItem(speakingScore9));
	var speakingScore10=parseInt(localStorage.getItem(speakingScore10));

	var speakingKDNo='speakingKDNo'+noKD;
    localStorage.setItem('speakingKDDefault',noKD);
	
	var speakingScoreTotalKD=speakingScore1+speakingScore2+speakingScore3+speakingScore4+speakingScore5+speakingScore6+speakingScore7+speakingScore8+speakingScore9+speakingScore10;
      //jika sudah ada nilai total KD speaking
	//var speakingKDNo=localStorage.getItem('speakingKDDefault');  
	var speakingScoreTotalKDDefault='speakingScoreTotalKD'+noKD;
	//cek apakah eksis
    if(localStorage.getItem(speakingScoreTotalKDDefault)===null || localStorage.getItem(speakingScoreTotalKDDefault)===undefined)
	{
		localStorage.setItem(speakingScoreTotalKDDefault,speakingScoreTotalKD);
		}	
	//jika sudah nilai total KD speaking > KKM
	if(parseInt(speakingScoreTotalKD)>79)
	  {   //simpan speakingPass
          var speakingScoreTotalKD=localStorage.getItem(speakingScoreTotalKDDefault);          
		  var speakingPassKDDefault='speakingPassKD'+noKD;
		  localStorage.setItem(speakingPassKDDefault,'passed');
		  //tulis cup
		  var speakingCupKDId='speakingCupKD'+noKD;
		  var speakingCupKDId_='speakingCupKD'+noKD+'_';		  
		  var speakingCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(speakingCupKDId).innerHTML=speakingCupWrite;
		  document.getElementById(speakingCupKDId_).innerHTML=speakingCupWrite;
		  //tampilkan modal
		  modalkan('speakingModalCup');
		  playAudio('yeah');
	  }
	var speakingBadgeWrite="<img src='image/badge.png' width='50'></img>";
	document.getElementById(speakingBadgeId).innerHTML=speakingBadgeWrite;
	document.getElementById(speakingBadgeId+"_").innerHTML=speakingBadgeWrite;		
	}
	//end 10
	//if no score
	if(speakingItem.length<1){
	document.getElementById(speakingScoreId).innerHTML=0;
    playAudio('fail');	
	}
    // Reset variables and update UI.
    noteContent = '';
    //renderNotes(getAllNotes());
    noteTextarea.val('');
    instructions.text('Note saved successfully.');
  }
      
})

notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);

  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();
    readOutLoud(content);
  }

  // Delete note.
  if(target.hasClass('delete-note')) {
    var speakingNoDefault = target.siblings('.speakingNoDefault').text();  
    deleteNote(speakingNoDefault);
    target.closest('.note').remove();
  }
});

/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}

/*-----------------------------
      Helper Functions 
------------------------------*/

function saveNote(speakingNoDefault, content, noKD) {
  localStorage.setItem('speakingNoteKD'+noKD+'_'+speakingNoDefault, content);
}

function playAudio(idAudio) { 
  var x = document.getElementById(idAudio); 
  x.play(); 
} 