	window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = '';
    let recognition = new window.SpeechRecognition();

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}

function startRecord(noKD){    
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      document.getElementById('note-textarea'+noKD).innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
    }
    recognition.start();
}

function pauseRecord(){
  recognition.stop();
}

function saveRecord(noKD){
  var noKD=noKD;
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
}