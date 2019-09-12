function notAppear(){
  $('#load_questions').hide();
  $('#direction1').hide();
  $('#direction2').hide();
  $('#direction3').hide();
  $('#direction4').hide();
  $('#direction5').hide();
  $('#q1').hide(); 
  $('#q2').hide(); 
  $('#q3').hide(); 
  $('#q4').hide(); 
  $('#q5').hide(); 
  $('#q6').hide(); 
  $('#q7').hide(); 
  $('#q8').hide(); 
  $('#q9').hide(); 
  $('#q10').hide(); 
  $('#q11').hide();   
  $('#q12').hide(); 
  $('#q13').hide();   
  $('#q14').hide(); 
  $('#q15').hide();   
  $('#q16').hide(); 
  $('#q17').hide(); 
  $('#q18').hide(); 
  $('#q19').hide(); 
  $('#q20').hide(); 
  $('#q21').hide(); 
  $('#q22').hide(); 
  $('#q23').hide(); 
  $('#q24').hide(); 
  $('#q25').hide(); 
  $('#q26').hide(); 
  $('#q27').hide(); 
  $('#q28').hide(); 
  $('#q29').hide(); 
  $('#q30').hide(); 
  $('#q31').hide(); 
  $('#q32').hide(); 
  $('#q33').hide(); 
  $('#q34').hide(); 
  $('#q35').hide(); 
  $('#q36').hide(); 
  $('#q37').hide(); 
  $('#q38').hide(); 
  $('#q39').hide(); 
  $('#q40').hide(); 
  $('#q41').hide(); 
  $('#q42').hide(); 
  $('#q43').hide(); 
  $('#q44').hide(); 
  $('#q45').hide(); 
  $('#q46').hide(); 
  $('#q47').hide(); 
  $('#q48').hide(); 
  $('#q49').hide(); 
  $('#q50').hide(); 
  $('#submit_all').hide(); 
  $('#score').hide(); 
  $('#explanation').hide(); 
}
function appear(idContainer){
  notAppear();
  $(idContainer).fadeIn();
}
function appearPauseAud(idDiv,idContainer){
  notAppear();
  $(idContainer).fadeIn();
  if(idDiv.length==2){var last_1=idDiv.slice(-1);var curAud="countAud_q_"+last_1;pauseAud(curAud);}
  else if(idDiv.length==3){var last_1=idDiv.slice(-2);var curAud="countAud_q_"+last_1;pauseAud(curAud);}
}
function appearPauseAudDir(idAudio,idContainer){
  notAppear();
  $(idContainer).fadeIn();
  var last_1=idAudio.slice(-1);
  var curAud="countAud_dir_"+last_1;
  pauseAud(curAud);
}	
function storeAnswerNoShow(idSelect,idToStore){
	var storage = document.getElementById(idSelect).value;
	localStorage.setItem(idToStore,storage);
	var valToStore = localStorage.getItem(idToStore);
	appear(next);
}
function store(idQ,idSelected,varStored,elShown,next){
	var storage = document.getElementById(idSelected).value;
	localStorage.setItem(varStored,storage);
	var show = localStorage.getItem(varStored);
	document.getElementById(elShown).innerHTML=show;
	if(idQ.length==3)
	{
	  var len=idQ.slice(-1);
	  var toPause='countAud_q_'+len;
	  appear(next);	  
	  pauseAud(toPause);
	}
	else if(idQ.length==4)
	{
	  var len=idQ.slice(-2);
	  var toPause='countAud_q_'+len;
	  appear(next);	  
	  pauseAud(toPause);
	}
}
function showAnswer(varSelected,elShown){
	var show_it = localStorage.getItem(varSelected);
	document.getElementById(elShown).innerHTML=show_it;	
}
function showAnswerJSON(varSelected,elShown){
	var show_it = localStorage.getItem(varSelected);
	document.getElementById(elShown).innerHTML=show_it;	
}
function showAnswer(varSelected,elShown){
	var show_it = localStorage.getItem(varSelected);
	document.getElementById(elShown).innerHTML=show_it;	
}
function storeQuestion(id,varStored){
var valStored = JSON.stringify(varStored);
localStorage.setItem(id, valStored);	
}
function resetTimer(){
  var val=JSON.stringify(0);
  localStorage.setItem('minutes',val);
}
function resetCounterAud(countAud){
  var val=JSON.stringify(0);
  localStorage.setItem(countAud,val);
}
function resetAllAudios(){
  for (i = 1; i < 51; i++) {
	 count="countAud_q_"+i; 
	 resetCounterAud(count);
	}
}	
function storeAllQuestions(){
	 storeQuestion('dir_1',dir_1);
	 storeQuestion('dir_2',dir_2);
	 storeQuestion('dir_3',dir_3);
	 storeQuestion('dir_4',dir_4);
	 storeQuestion('dir_5',dir_5);
     storeQuestion('q_1',q_1);
     storeQuestion('q_2',q_2);
     storeQuestion('q_3',q_3);
     storeQuestion('q_4',q_4);
     storeQuestion('q_5',q_5);
     storeQuestion('q_6',q_6);
     storeQuestion('q_7',q_7);
     storeQuestion('q_8',q_8);
     storeQuestion('q_9',q_9);
     storeQuestion('q_10',q_10);
     storeQuestion('q_11',q_11);
     storeQuestion('q_12',q_12);
     storeQuestion('q_13',q_13);
     storeQuestion('q_14',q_14);
     storeQuestion('q_15',q_15);
     storeQuestion('q_16',q_16);
     storeQuestion('q_17',q_17);
     storeQuestion('q_18',q_18);
     storeQuestion('q_19',q_19);
     storeQuestion('q_20',q_20);
	 storeQuestion('q_21',q_21);
     storeQuestion('q_22',q_22);
     storeQuestion('q_23',q_23);
     storeQuestion('q_24',q_24);
     storeQuestion('q_25',q_25);
     storeQuestion('q_26',q_26);
     storeQuestion('q_27',q_27);
     storeQuestion('q_28',q_28);
     storeQuestion('q_29',q_29);
     storeQuestion('q_30',q_30);
	 storeQuestion('q_31',q_31);
     storeQuestion('q_32',q_32);
     storeQuestion('q_33',q_33);
     storeQuestion('q_34',q_34);
     storeQuestion('q_35',q_35);
     storeQuestion('q_36',q_36);
     storeQuestion('q_37',q_37);
     storeQuestion('q_38',q_38);
     storeQuestion('q_39',q_39);
     storeQuestion('q_40',q_40);
     storeQuestion('q_41',q_41);
     storeQuestion('q_42',q_42);
     storeQuestion('q_43',q_43);
     storeQuestion('q_44',q_44);
     storeQuestion('q_45',q_45);
     storeQuestion('q_46',q_46);
     storeQuestion('q_47',q_47);
     storeQuestion('q_48',q_48);
     storeQuestion('q_49',q_49);
     storeQuestion('q_50',q_50);
}
function retrieveKey(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.key;
}
function showKey(idQuestion,elShown){
  	retrieveKey(idQuestion);
    document.getElementById(elShown).innerHTML = obj.key;
}
function retrieveAnswer(idAnswer){
    var a=localStorage.getItem(idAnswer);
	return a;
}
function score(idAnswer,idQuestion){
	var a=retrieveAnswer(idAnswer);
	var b=retrieveKey(idQuestion);
	var c;
	if(a==b){c=2;}else {c=0;}
	return c;
}
function storeScore(idAnswer, idQuestion, idScore){
   var nilai=score(idAnswer,idQuestion);
   localStorage.setItem(idScore,nilai);
}
function storeAllScores(){
	for(i=1;i<51;i++)
	{
	  ans= "answer_"+i;
	  q="q_"+i;
	  sco="score_"+i;
	  storeScore(ans,q,sco)
	}
}
function showScore(idScore,elShown){
	var score=localStorage.getItem(idScore);
    document.getElementById(elShown).innerHTML = score;
}

function showAnswerKeyScore(idAnswer,elAnswer,idQuestion,elQuestion,idScore,elScore){
  showAnswer(idAnswer,elAnswer);
  showKey(idQuestion,elQuestion);
  showScore(idScore,elScore);
}  
function showAll(){
storeAllScores();
for(i=1;i<51;i++)
{
  if(retrieveAnswer("answer_"+i))
  {
   showAnswerKeyScore("answer_"+i,"a_"+i,"q_"+i,"k_"+i,"score_"+i,"s_"+i);}
   else if(retrieveAnswer("answer_"+i)!='A' || retrieveAnswer("answer_"+i)!='B' || retrieveAnswer("answer_"+i)!='C' || retrieveAnswer("answer_"+i)!='D')
   {
	 showAnswerKeyScore("answer_"+i,"a_"+i,"q_"+i,"k_"+i,"score_"+i,"s_"+i);$("#k_"+i).hide();$("#s_"+i).hide();
   }
}	
showTotalScores('total');
congrats();
$('#page_score').hide();
$('#explanation').fadeIn();
}
function submitAllNoConfirm(){
storeAllScores();
showAnswerKeyScore('answer_1','a_1','q_1','k_1','score_1','s_1');
showAnswerKeyScore('answer_2','a_2','q_2','k_2','score_2','s_2');
showAnswerKeyScore('answer_3','a_3','q_3','k_3','score_3','s_3');
showAnswerKeyScore('answer_4','a_4','q_4','k_4','score_4','s_4');
showAnswerKeyScore('answer_5','a_5','q_5','k_5','score_5','s_5');
showAnswerKeyScore('answer_6','a_6','q_6','k_6','score_6','s_6');
showAnswerKeyScore('answer_7','a_7','q_7','k_7','score_7','s_7');
showAnswerKeyScore('answer_8','a_8','q_8','k_8','score_8','s_8');
showAnswerKeyScore('answer_9','a_9','q_9','k_9','score_9','s_9');
showAnswerKeyScore('answer_10','a_10','q_10','k_10','score_10','s_10');
showAnswerKeyScore('answer_11','a_11','q_11','k_11','score_11','s_11');
showAnswerKeyScore('answer_12','a_12','q_12','k_12','score_12','s_12');
showAnswerKeyScore('answer_13','a_13','q_13','k_13','score_13','s_13');
showAnswerKeyScore('answer_14','a_14','q_14','k_14','score_14','s_14');
showAnswerKeyScore('answer_15','a_15','q_15','k_15','score_15','s_15');
showAnswerKeyScore('answer_16','a_16','q_16','k_16','score_16','s_16');
showAnswerKeyScore('answer_17','a_17','q_17','k_17','score_17','s_17');
showAnswerKeyScore('answer_18','a_18','q_18','k_18','score_18','s_18');
showAnswerKeyScore('answer_19','a_19','q_19','k_19','score_19','s_19');
showAnswerKeyScore('answer_20','a_20','q_20','k_20','score_20','s_20');
showAnswerKeyScore('answer_21','a_21','q_21','k_21','score_21','s_21');
showAnswerKeyScore('answer_22','a_22','q_22','k_22','score_22','s_22');
showAnswerKeyScore('answer_23','a_23','q_23','k_23','score_23','s_23');
showAnswerKeyScore('answer_24','a_24','q_24','k_24','score_24','s_24');
showAnswerKeyScore('answer_25','a_25','q_25','k_25','score_25','s_25');
showAnswerKeyScore('answer_26','a_26','q_26','k_26','score_26','s_26');
showAnswerKeyScore('answer_27','a_27','q_27','k_27','score_27','s_27');
showAnswerKeyScore('answer_28','a_28','q_28','k_28','score_28','s_28');
showAnswerKeyScore('answer_29','a_29','q_29','k_29','score_29','s_29');
showAnswerKeyScore('answer_30','a_30','q_30','k_30','score_30','s_30');
showAnswerKeyScore('answer_31','a_31','q_31','k_31','score_31','s_31');
showAnswerKeyScore('answer_32','a_32','q_32','k_32','score_32','s_32');
showAnswerKeyScore('answer_33','a_33','q_33','k_33','score_33','s_33');
showAnswerKeyScore('answer_34','a_34','q_34','k_34','score_34','s_34');
showAnswerKeyScore('answer_35','a_35','q_35','k_35','score_35','s_35');
showAnswerKeyScore('answer_36','a_36','q_36','k_36','score_36','s_36');
showAnswerKeyScore('answer_37','a_37','q_37','k_37','score_37','s_37');
showAnswerKeyScore('answer_38','a_38','q_38','k_38','score_38','s_38');
showAnswerKeyScore('answer_39','a_39','q_39','k_39','score_39','s_39');
showAnswerKeyScore('answer_40','a_40','q_40','k_40','score_40','s_40');
showAnswerKeyScore('answer_41','a_41','q_41','k_41','score_41','s_41');
showAnswerKeyScore('answer_42','a_42','q_42','k_42','score_42','s_42');
showAnswerKeyScore('answer_43','a_43','q_43','k_43','score_43','s_43');
showAnswerKeyScore('answer_44','a_44','q_44','k_44','score_44','s_44');
showAnswerKeyScore('answer_45','a_45','q_45','k_45','score_45','s_45');
showAnswerKeyScore('answer_46','a_46','q_46','k_46','score_46','s_46');
showAnswerKeyScore('answer_47','a_47','q_47','k_47','score_47','s_47');
showAnswerKeyScore('answer_48','a_48','q_48','k_48','score_48','s_48');
showAnswerKeyScore('answer_49','a_49','q_49','k_49','score_49','s_49');
showAnswerKeyScore('answer_50','a_50','q_50','k_50','score_50','s_50');
showTotalScores('total');
congrats();
}
function submitAll(){
storeAllScores();
if(isAnswersComplete()==false){alert("You have not answered all questions. Try again after you have done it. Go back and then click 'Show My Answers' to find out where you missed the answer(s)"); return false;}
else if(isAnswersComplete()==true){alert("You have answered all questions."); return true;}
}

function retrieveScore(idScore){
  var x = localStorage.getItem(idScore);
  var y = parseInt(x);
  return y;
}
function retrieveTotalScores(){
  var t=retrieveScore('score_1')+retrieveScore('score_2')+retrieveScore('score_3')+retrieveScore('score_4')+retrieveScore('score_5')+retrieveScore('score_6')+retrieveScore('score_7')+retrieveScore('score_8')+retrieveScore('score_9')+retrieveScore('score_10')+retrieveScore('score_11')+retrieveScore('score_12')+retrieveScore('score_13')+retrieveScore('score_14')+retrieveScore('score_15')+retrieveScore('score_16')+retrieveScore('score_17')+retrieveScore('score_18')+retrieveScore('score_19')+retrieveScore('score_20')+retrieveScore('score_21')+retrieveScore('score_22')+retrieveScore('score_23')+retrieveScore('score_24')+retrieveScore('score_25')+retrieveScore('score_26')+retrieveScore('score_27')+retrieveScore('score_28')+retrieveScore('score_29')+retrieveScore('score_30')+retrieveScore('score_31')+retrieveScore('score_32')+retrieveScore('score_33')+retrieveScore('score_34')+retrieveScore('score_35')+retrieveScore('score_36')+retrieveScore('score_37')+retrieveScore('score_38')+retrieveScore('score_39')+retrieveScore('score_40')+retrieveScore('score_41')+retrieveScore('score_42')+retrieveScore('score_43')+retrieveScore('score_44')+retrieveScore('score_45')+retrieveScore('score_46')+retrieveScore('score_47')+retrieveScore('score_48')+retrieveScore('score_49')+retrieveScore('score_50');
  return t;
}
function showTotalScores(elShown){
	  var tot=retrieveTotalScores();
      document.getElementById(elShown).innerHTML = tot ;
}
function cobaParse(){
var x = retrieveScore('score_1')+retrieveScore('score_2');
document.getElementById("total").innerHTML = x;
}
function removeDir(idAnswer){
	localStorage.removeItem(idAnswer);
}
function removeQ(idAnswer){
	localStorage.removeItem(idAnswer);
}
function removeAllDirsQs(){
	 for (i = 1; i < 6; i++) 
	 {
		dir="dir_"+i;
	    if(localStorage.getItem(dir))
    	{
	      rem_dir="dir_"+i; 
	      localStorage.removeItem(rem_dir);
        }
	 }
	 for (j = 1; j < 51; j++) 
	 {
		q="q_"+i;
	    if(localStorage.getItem(q))
    	{
	      rem_q="q_"+i; 
	      localStorage.removeItem(rem_q);
        }
	 }
}	
function removeAnswer(idAnswer){
	localStorage.removeItem(idAnswer);
}
function removeAllAnswersScores(){
	 for (i = 1; i < 51; i++) 
	 {
		ans="answer_"+i; 
	    if(localStorage.getItem(ans))
    	{
	      rem_ans="answer_"+i; 
	      rem_sco="score_"+i; 
	      localStorage.removeItem(rem_ans);
	      localStorage.removeItem(rem_sco);
	    }
	  }
	showTotalScores('total');
}
function retrieveQ(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
	if(type=='pictures' || type=='question_responses'){return "";}
	else {return obj.q;}
}
function showQ(idQuestion,elShown){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var pic=obj.pic;
  	if(retrieveQ(idQuestion)=="" && idQuestion=="q_1"){var a="<div class='thumbnail'><a href='#' target=_blank'><img src=./images/"+pic+" alt='Question_1'></a></div>";document.getElementById(elShown).innerHTML = a;}
	else if(retrieveQ(idQuestion)=="" && idQuestion=="q_2"){var b="<div class='thumbnail'><a href='#' target=_blank'><img src=./images/"+pic+" alt='Question_2'></a></div>";document.getElementById(elShown).innerHTML = b;}
	else if(retrieveQ(idQuestion)=="" && idQuestion=="q_3"){var c="<div class='thumbnail'><a href='#' target=_blank'><img src=./images/"+pic+" alt='Question_3'></a></div>";document.getElementById(elShown).innerHTML = c;}
	else if(retrieveQ(idQuestion)=="" && idQuestion=="q_4"){var d="<div class='thumbnail'><a href='#' target=_blank'><img src=./images/"+pic+" alt='Question_4'></a></div>";document.getElementById(elShown).innerHTML = d;}
	else if(retrieveQ(idQuestion)!=""){document.getElementById(elShown).innerHTML = obj.q;}
}
function showA(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.A;
}
function showB(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.B;
}
function showC(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.C;
}
function showD(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.D;
}
function retrieveTran(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.tran;
}
function retrieveType(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.type;
}
function showTran(idQuestion,elShown){
	var tran=retrieveTran(idQuestion);
	var type=retrieveType(idQuestion);
	if(type=="reading" || type=="dialog")
	{
	 document.getElementById(elShown).innerHTML="<table class='table table-bordered'><tbody><tr><td class='text-justify'>"+tran+"</td></tr></tbody></table>";}
	else {return "";}
}
function retrieveOpt(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.tran;
}
function showOpt(idQuestion,elShown){
  	if(retrieveOpt(idQuestion)==""){document.getElementById(elShown).innerHTML = "(A) "+obj.A+"</br>"+"(B) "+obj.B+"</br>"+"(C) "+obj.C+"</br>"+"(D) "+obj.D;}
	else if(retrieveOpt(idQuestion)!=""){document.getElementById(elShown).innerHTML = obj.tran;}
}
function retrieveExpl(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.expl;
}
function showExpl(idQuestion,elShown){
  	retrieveExpl(idQuestion);
    document.getElementById(elShown).innerHTML = obj.expl;
}
function showQOptExpl(idQ,elQ,idOpt,elOpt,idExpl,elExpl){
  showQ(idQ,elQ);
  showOpt(idOpt,elOpt);
  showExpl(idExpl,elExpl);
}
function showAllQsTransExpls(){
  if(isAnswersComplete()==false){alert("You have to answer all questions before opening the explanation");return false;}	
  showQOptExpl('q_1','q_1','q_1','t_1','q_1','e_1');
  showQOptExpl('q_2','q_2','q_2','t_2','q_2','e_2');
  showQOptExpl('q_3','q_3','q_3','t_3','q_3','e_3');
  showQOptExpl('q_4','q_4','q_4','t_4','q_4','e_4');
  showQOptExpl('q_5','q_5','q_5','t_5','q_5','e_5');
  showQOptExpl('q_6','q_6','q_6','t_6','q_6','e_6');
  showQOptExpl('q_7','q_7','q_7','t_7','q_7','e_7');
  showQOptExpl('q_8','q_8','q_8','t_8','q_8','e_8');
  showQOptExpl('q_9','q_9','q_9','t_9','q_9','e_9');
  showQOptExpl('q_10','q_10','q_10','t_10','q_10','e_10');
  showQOptExpl('q_11','q_11','q_11','t_11','q_11','e_11');
  showQOptExpl('q_12','q_12','q_12','t_12','q_12','e_12');
  showQOptExpl('q_13','q_13','q_13','t_13','q_13','e_13');
  showQOptExpl('q_14','q_14','q_14','t_14','q_14','e_14');
  showQOptExpl('q_15','q_15','q_15','t_15','q_15','e_15');
  showQOptExpl('q_16','q_16','q_16','t_16','q_16','e_16');
  showQOptExpl('q_17','q_17','q_17','t_17','q_17','e_17');
  showQOptExpl('q_18','q_18','q_18','t_18','q_18','e_18');
  showQOptExpl('q_19','q_19','q_19','t_19','q_19','e_19');
  showQOptExpl('q_20','q_20','q_20','t_20','q_20','e_20');
  showQOptExpl('q_21','q_21','q_21','t_21','q_21','e_21');
  showQOptExpl('q_22','q_22','q_22','t_22','q_22','e_22');
  showQOptExpl('q_23','q_23','q_23','t_23','q_23','e_23');
  showQOptExpl('q_24','q_24','q_24','t_24','q_24','e_24');
  showQOptExpl('q_25','q_25','q_25','t_25','q_25','e_25');
  showQOptExpl('q_26','q_26','q_26','t_26','q_26','e_26');
  showQOptExpl('q_26','q_27','q_27','t_27','q_27','e_27');
  showQOptExpl('q_28','q_28','q_28','t_28','q_28','e_28');
  showQOptExpl('q_29','q_29','q_29','t_29','q_29','e_29');
  showQOptExpl('q_30','q_30','q_30','t_30','q_30','e_30');
  showQOptExpl('q_31','q_31','q_31','t_31','q_31','e_31');
  showQOptExpl('q_32','q_32','q_32','t_32','q_32','e_32');
  showQOptExpl('q_33','q_33','q_33','t_33','q_33','e_33');
  showQOptExpl('q_34','q_34','q_34','t_34','q_34','e_34');
  showQOptExpl('q_35','q_35','q_35','t_35','q_35','e_35');
  showQOptExpl('q_36','q_36','q_36','t_36','q_36','e_36');
  showQOptExpl('q_37','q_37','q_37','t_37','q_37','e_37');
  showQOptExpl('q_38','q_38','q_38','t_38','q_38','e_38');
  showQOptExpl('q_39','q_39','q_39','t_39','q_39','e_39');
  showQOptExpl('q_40','q_40','q_40','t_40','q_40','e_40');
  showQOptExpl('q_41','q_41','q_41','t_41','q_41','e_41');
  showQOptExpl('q_42','q_42','q_42','t_42','q_42','e_42');
  showQOptExpl('q_43','q_43','q_43','t_43','q_43','e_43');
  showQOptExpl('q_44','q_44','q_44','t_44','q_44','e_44');
  showQOptExpl('q_45','q_45','q_45','t_45','q_45','e_45');
  showQOptExpl('q_46','q_46','q_46','t_46','q_46','e_46');
  showQOptExpl('q_47','q_47','q_47','t_47','q_47','e_47');
  showQOptExpl('q_48','q_48','q_48','t_48','q_48','e_48');
  showQOptExpl('q_49','q_49','q_49','t_49','q_49','e_49');
  showQOptExpl('q_50','q_50','q_50','t_50','q_50','e_50');
}
function writeDivQ(idDiv,leftOrCenter,NO_QUEST,idQ1,idQ2,idQuestion,idAudio,idA,idB,idC,idD,idSelect,idAnswer,idContainer,previous,next){
resetTimer();
var toWrite_1 ="<div id="+idDiv+" class='container-fluid'><h3>QUESTION "+NO_QUEST+"</h3>";
var toWrite_2="<p id="+idQ1+">"+pointPicOrQ(idQuestion);+"</p>";
var toWrite_2a ="<article class='success'>"+pointPic(idQuestion);+"</article>";
var toWrite_4="<p id="+idAudio+">"+pointAudio(idQuestion);+"<p>";
var toWrite_5="<p id="+idA+">(A) "+pointA(idQuestion);+"</p>";
var toWrite_6="<p id="+idB+">(B) "+pointB(idQuestion);+"</p>";
var toWrite_7="<p id="+idC+">(C) "+pointC(idQuestion);+"</p>";
var toWrite_8="<p id="+idD+">(D) "+pointD(idQuestion);+"</p>";
var toStore_1="storeAnswerNoShow(";
var toStore_2=idSelect;
var toStore_3=idAnswer;
var toStore_4=idContainer;
var toStore_5=")";
var toStore_6=toStore_1.concat("'",toStore_2,"'",",","'",toStore_3,"'",")");
var toWrite_9="<p><div class='form-group'><form onSubmit='return false'><label>Choose A, B, C, or D and click 'Submit'</label><select class='form-control' id="+idSelect+"><option value='A'>(A)</option><option value='B'>(B)</option><option value='C'>(C)</option><option value='D'>(D)</option></select></p><p><input type='button' class='btn btn-success' value='Submit' onClick="+toStore_6+" align='center'></form></div></p>";
var toWrite_10="<p>Your answer is:<div id="+idContainer+"></div>";
var toAppear_1="appear(";
var toAppear_2=previous;
var toAppear_3=")";
var toAppear_4=toAppear_1.concat("'",toAppear_2,"'",toAppear_3);	
var toAppear_5=next;
var toAppear_6=toAppear_1.concat("'",toAppear_5,"'",toAppear_3);
var toWrite_11="<p class='button'><a class='btn btn-success ' onClick="+toAppear_4+">Previous</a><a class='btn btn-success ' onClick="+toAppear_6+">Next</a></p><p>"+pagination()+"</p></div>";
document.getElementById(idDiv).innerHTML = toWrite_1+toWrite_2+toWrite_2a+toWrite_4+toWrite_5+toWrite_6+toWrite_7+toWrite_8+toWrite_9+toWrite_10+toWrite_11;
} 
function pointPicOrQ(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
    var q = obj.q;
	var pic = obj.pic;
  	if(pic != "" && q != ""){
		return q;}
	else if(pic != "" && q ==""){
		var a="<img src=";
		var b="images/";
		var c= pic;
		var d= ">";
		var e=a.concat(b,c,d);
		return e;
		}
	else {return "";}
}
function playAud(idAud)
{
  	aud=document.getElementById(idAud);
	aud.play();
}	
function pauseAud(idAud)
{
  	aud=document.getElementById(idAud);
	aud.pause();
}	
function stopAud(idAud) {
  	aud=document.getElementById(idAud);
    aud.pause();
    aud.currentTime = 0;
}
function pointAudio(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
    var aud = obj.aud;
	var elShown="countAud_"+idQuestion;
	var playAud="playAud("+"'"+elShown+"'"+")";
	var pauseAud="pauseAud("+"'"+elShown+"'"+")";
	var idPlay="play_"+elShown;
	var idPause="pause_"+elShown;
  	if(aud != ""){
		var a="<audio preload='auto' id="+elShown+" class='audio300'><source src=";
		var b="audio/";
		var c=aud;
		var d=" type='audio/mpeg'>Your browser does not support the audio element.</audio>";
		var e="<table class='borderless' id='btn_aud'><tbody><tr><td><div id="+idPlay+"><button onclick="+playAud+" class='btn btn-success '>Play Audio</button></div></td>";
		var f="<td class='invisible'>BLA</td><td><div id="+idPause+"><button onclick="+pauseAud+" class='btn btn-success '>Pause Audio</button></div></td></tr></tbody></table>";
		var g=a+b+c+d+e+f;
		return g;
		}	
	else{return "";}
}
function pointAnswer(idAnswer){
  var text=localStorage.getItem(idAnswer);
  return text;
}
function pointA(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
    if(type == "reading" || type == "short_conversations" || type == "short_talks" || type=="dialog" || type=="incomplete_dialog" || type=="cloze_text"){return obj.A;}
    else{return "";}
}
function pointB(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
    if(type == "reading" || type == "short_conversations" || type == "short_talks" || type=="dialog" || type=="incomplete_dialog" || type=="cloze_text"){return obj.B;}
    else{return "";}
}
function pointC(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
    if(type == "reading" || type == "short_conversations" || type == "short_talks" || type=="dialog" || type=="incomplete_dialog" || type=="cloze_text"){return obj.C;}
    else{return "";}
}
function pointD(idQuestion){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
	var type = obj.type;
    if(type == "reading" || type == "short_conversations" || type == "short_talks" || type=="dialog" || type=="incomplete_dialog" || type=="cloze_text"){return obj.D;}
    else{return "";}
}
function pointDir(idQuestion,abcdefg){
  	var text = localStorage.getItem(idQuestion);
    var obj = JSON.parse(text);
  	if(abcdefg=='a'){
		var v="<p>";
		var w=obj.dir_a;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='b'){
		var v="<p>";
		var w=obj.dir_b;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='c'){
		var v="<p>";
		var w=obj.dir_c;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='d'){
		var v="<p>";
		var w=obj.dir_d;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='e'){
		var v="<p>";
		var w=obj.dir_e;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='f'){
		var v="<p>";
		var w=obj.dir_f;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	if(abcdefg=='g'){
		var v="<p>";
		var w=obj.dir_g;
		var x="</p>";
		var y=v.concat(w,x);
		return y;
		}	
  	else {
		return "";
        }
}
function writeDivDir(idDiv,title,idQuestion,idAudio,previous,idPage,next){
var toWrite_1="<div id='direction1' class='container-fluid'>";
var toWrite_2="<p><h3>"+title+"</h3></p>";
var toWrite_3="<p id="+idAudio+">"+pointAudio(idQuestion)+"</p>";
var toWrite_3a="<p>"+pointPicOrQ(idQuestion)+"</p>";
var toWrite_4=pointDir(idQuestion,'a');
var toWrite_5=pointDir(idQuestion,'b');
var toWrite_6=pointDir(idQuestion,'c');
var toWrite_7=pointDir(idQuestion,'d');
var toWrite_8=pointDir(idQuestion,'e');
var toWrite_9=pointDir(idQuestion,'f');
var toWrite_10=pointDir(idQuestion,'g');
//pagination
var toWrite_11="appearPauseAudDir";
var toWrite_12="("+"'"+idAudio+"'"+",";
var toWrite_13='select_page.value';
var toWrite_14 =")";
var toWrite_15=toWrite_11.concat(toWrite_12,toWrite_13,toWrite_14);
var toAppear_1="appearPauseAudDir('"+idAudio+"'"+",";
var toAppear_2=previous;
var toAppear_3=")";
var toAppear_4=toAppear_1.concat("'",previous,"'",toAppear_3);	
var toAppear_5=next;
var toAppear_6="appearPauseAudDir("+"'"+idAudio+"'"+","+"'"+next+"')";
var a="<p><table class='table no-border'><thead><tr align='center'><p align='center'>Go to Page:</p></tr></thead>";
var b="<td><a class='btn btn-success ' onClick="+toAppear_4+">Previous</a></td>";
var c="<td><div class='form-group'><form id='form_sm' onSubmit='return false' align='center'><select class='form-control' id='select_page'><option value='#direction1'>Dir 1</option><option value='#q1'>1</option><option value='#q2'>2</option><option value='#q3'>3</option><option value='#direction2'>Dir 2</option><option value='#q4'>4</option><option value='#q5'>5</option><option value='#q6'>6</option><option value='#q7'>7</option><option value='#direction3'>Dir 3</option><option value='#q8'>8</option><option value='#q9'>9</option><option value='#q10'>10</option><option value='#q11'>11</option><option value='#direction4'>Dir 4</option><option value='#q12'>12</option><option value='#q13'>13</option><option value='#q14'>14</option><option value='#q15'>15</option><option value='#direction5'>Direction 5</option><option value='#q16'>16</option><option value='#q17'>17</option><option value='#q18'>18</option><option value='#q19'>19</option><option value='#q20'>20</option><option value='#q21'>21</option><option value='#q22'>22</option><option value='#q23'>23</option><option value='#q24'>24</option><option value='#q25'>25</option><option value='#q26'>26</option><option value='#q27'>27</option><option value='#q28'>28</option><option value='#q29'>29</option><option value='#q30'>30</option>";
var d="<option value='#q31'>31</option><option value='#q32'>32</option><option value='#q33'>33</option><option value='#q34'>34</option><option value='#q35'>35</option><option value='#q36'>36</option><option value='#q37'>37</option><option value='#q38'>38</option><option value='#q39'>39</option><option value='#q40'>40</option><option value='#q41'>41</option><option value='#q42'>42</option><option value='#q43'>43</option><option value='#q44'>44</option><option value='#q45'>45</option><option value='#q46'>46</option><option value='#q47'>47</option><option value='#q48'>48</option><option value='#q49'>49</option><option value='#q50'>50</option><option value='#score'>Score</option><option value='#explanation'>Explanation</option></select><p><input type='button' class='btn btn-success ' value='Go' onClick="+toWrite_15+" align='center'></p></form></div></td>";
var e="<td><a class='btn btn-success ' onClick="+toAppear_6+">Next</a></td></tr></tbody></table></p>";
var f=a+b+c+d+e;
//--end--pagination
document.getElementById(idDiv).innerHTML = toWrite_1+toWrite_2+toWrite_3+toWrite_3a+toWrite_4+toWrite_5+toWrite_6+toWrite_7+toWrite_8+toWrite_9+toWrite_10+f;
}
/*
function showQ(idQuestion,elShown){
  	if(retrieveQ(idQuestion)=="" && idQuestion=="q_1"){var a="<div class='thumbnail'><a href='#' target=_blank'><img src='images/2016_q_1.jpg' alt='Question_1'></a></div>";document.getElementById(elShown).innerHTML = a;}
	else if(retrieveQ(idQuestion)=="" && idQuestion=="q_2"){var b="<div class='thumbnail'><a href='#' target=_blank'><img src='images/2016_q_2.jpg' alt='Question_2'></a></div>";document.getElementById(elShown).innerHTML = b;}
	else if(retrieveQ(idQuestion)=="" && idQuestion=="q_3"){var c="<div class='thumbnail'><a href='#' target=_blank'><img src='images/2016_q_3.jpg' alt='Question_3'></a></div>";document.getElementById(elShown).innerHTML = c;}
	//text = localStorage.getItem(idQuestion);
    //obj = JSON.parse(text);
    else if (retrieveQ(idQuestion)!=""){document.getElementById(elShown).innerHTML = obj.q;}
}
*/
function pointPic(idQuestion){
	var txt=localStorage.getItem(idQuestion);
	var obj=JSON.parse(txt);
    var type=obj.type;
	var pic=retrievePic(idQuestion);
    var a="<img src=";
	var b="images/";
    var c= pic;
	var d= ">";
	var e=a+b+c+d;
	if(type == "question_responses" || type == "short_conversations" || type == "short_talks"|| type=="reading" || type== "dialog"|| type=="incomplete_dialog"){return "";}
	else {return e;}
}
function retrievePic(idQuestion){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	return obj.pic;
}
function showPic(idQuestion,elShown){
	var pic=retrievePic(idQuestion);
    var a="<img src=";
	var b="images/";
    var c= pic;
	var d= ">";
	var e=a.concat(b,c,d);
    document.getElementById(elShown).innerHTML = e;
}
function showA(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.A;
}
function showB(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.B;
}
function showC(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.C;
}
function showD(idQuestion,elShown){
  	text = localStorage.getItem(idQuestion);
    obj = JSON.parse(text);
	document.getElementById(elShown).innerHTML = obj.D;
}
function isAnswersComplete(){
  if(retrieveAnswer('answer_1')==null){return false;}
  if(retrieveAnswer('answer_2')==null){return false;}
  if(retrieveAnswer('answer_3')==null){return false;}
  if(retrieveAnswer('answer_5')==null){return false;}
  if(retrieveAnswer('answer_6')==null){return false;}
  if(retrieveAnswer('answer_7')==null){return false;}
  if(retrieveAnswer('answer_8')==null){return false;}
  if(retrieveAnswer('answer_9')==null){return false;}
  if(retrieveAnswer('answer_10')==null){return false;}
  if(retrieveAnswer('answer_11')==null){return false;}
  if(retrieveAnswer('answer_12')==null){return false;}
  if(retrieveAnswer('answer_13')==null){return false;}
  if(retrieveAnswer('answer_14')==null){return false;}
  if(retrieveAnswer('answer_15')==null){return false;}
  if(retrieveAnswer('answer_16')==null){return false;}
  if(retrieveAnswer('answer_17')==null){return false;}
  if(retrieveAnswer('answer_18')==null){return false;}
  if(retrieveAnswer('answer_19')==null){return false;}
  if(retrieveAnswer('answer_20')==null){return false;}
  if(retrieveAnswer('answer_21')==null){return false;}
  if(retrieveAnswer('answer_22')==null){return false;}
  if(retrieveAnswer('answer_23')==null){return false;}
  if(retrieveAnswer('answer_24')==null){return false;}
  if(retrieveAnswer('answer_25')==null){return false;}
  if(retrieveAnswer('answer_26')==null){return false;}
  if(retrieveAnswer('answer_27')==null){return false;}
  if(retrieveAnswer('answer_28')==null){return false;}
  if(retrieveAnswer('answer_29')==null){return false;}
  if(retrieveAnswer('answer_30')==null){return false;}
  if(retrieveAnswer('answer_31')==null){return false;}
  if(retrieveAnswer('answer_32')==null){return false;}
  if(retrieveAnswer('answer_33')==null){return false;}
  if(retrieveAnswer('answer_34')==null){return false;}
  if(retrieveAnswer('answer_35')==null){return false;}
  if(retrieveAnswer('answer_36')==null){return false;}
  if(retrieveAnswer('answer_37')==null){return false;}
  if(retrieveAnswer('answer_38')==null){return false;}
  if(retrieveAnswer('answer_39')==null){return false;}
  if(retrieveAnswer('answer_40')==null){return false;}
  if(retrieveAnswer('answer_41')==null){return false;}
  if(retrieveAnswer('answer_42')==null){return false;}
  if(retrieveAnswer('answer_43')==null){return false;}
  if(retrieveAnswer('answer_44')==null){return false;}
  if(retrieveAnswer('answer_45')==null){return false;}
  if(retrieveAnswer('answer_46')==null){return false;}
  if(retrieveAnswer('answer_47')==null){return false;}
  if(retrieveAnswer('answer_48')==null){return false;}
  if(retrieveAnswer('answer_49')==null){return false;}
  if(retrieveAnswer('answer_50')==null){return false;}
}
function alertIsAnswersComplete(){
  if(isAnswersComplete()==false){alert("You have not answered all questions");}
}
function showAnswerBottom(idAnswer,elShown){
	var a=retrieveAnswer(idAnswer);
	document.getElementById(elShown).innerHTML=a;
}
function showAllAnswers(){
	showAnswerBottom('answer_1','a_1');
	showAnswerBottom('answer_2','a_2');
	showAnswerBottom('answer_3','a_3');
	showAnswerBottom('answer_4','a_4');
	showAnswerBottom('answer_5','a_5');
	showAnswerBottom('answer_6','a_6');
	showAnswerBottom('answer_7','a_7');
	showAnswerBottom('answer_8','a_8');
	showAnswerBottom('answer_9','a_9');
	showAnswerBottom('answer_10','a_10');
    showAnswerBottom('answer_11','a_11');
	showAnswerBottom('answer_12','a_12');
	showAnswerBottom('answer_13','a_13');
	showAnswerBottom('answer_14','a_14');
	showAnswerBottom('answer_15','a_15');
	showAnswerBottom('answer_16','a_16');
	showAnswerBottom('answer_17','a_17');
	showAnswerBottom('answer_18','a_18');
	showAnswerBottom('answer_19','a_19');
	showAnswerBottom('answer_20','a_20');
	showAnswerBottom('answer_21','a_21');
	showAnswerBottom('answer_22','a_22');
	showAnswerBottom('answer_23','a_23');
	showAnswerBottom('answer_24','a_24');
	showAnswerBottom('answer_25','a_25');
	showAnswerBottom('answer_26','a_26');
	showAnswerBottom('answer_27','a_27');
	showAnswerBottom('answer_28','a_28');
	showAnswerBottom('answer_29','a_29');
	showAnswerBottom('answer_30','a_30');
	showAnswerBottom('answer_31','a_31');
	showAnswerBottom('answer_32','a_32');
	showAnswerBottom('answer_33','a_33');
	showAnswerBottom('answer_34','a_34');
	showAnswerBottom('answer_35','a_35');
	showAnswerBottom('answer_36','a_36');
	showAnswerBottom('answer_37','a_37');
	showAnswerBottom('answer_38','a_38');
	showAnswerBottom('answer_39','a_39');
	showAnswerBottom('answer_40','a_40');	
	showAnswerBottom('answer_41','a_41');
	showAnswerBottom('answer_42','a_42');
	showAnswerBottom('answer_43','a_43');
	showAnswerBottom('answer_44','a_44');
	showAnswerBottom('answer_45','a_45');
	showAnswerBottom('answer_46','a_46');
	showAnswerBottom('answer_47','a_47');
	showAnswerBottom('answer_48','a_48');
	showAnswerBottom('answer_49','a_49');
	showAnswerBottom('answer_50','a_50');	
}
function writeQ(idDiv,numQ,idQ,idSelect,idAnswer,idContainer,idAnswerToCatch,previous,idPage,next){
var toWrite_2="<p><h2>Question Number "+numQ+"</h2></p>";
var toWrite_3="<p>"+pointPic(idQ)+"</p>";
var toWrite_4="<p>"+pointAudio(idQ)+"</p>";
var toTran="tran_"+idQ;
var toWrite_4a="<p id="+toTran+"></p>";
var toWrite_5="<p>"+retrieveQ(idQ)+"</p>";
var toWrite_6="<p>Options:</p>";
var toWrite_7="<p><table class='table table-borderless'><tbody><tr><td>A</td><td>"+pointA(idQ)+"</td></tr><tr><td>B</td><td>"+pointB(idQ)+"</td></tr><tr><td>C</td><td>"+pointC(idQ)+"</td></tr><tr><td>D</td><td>"+pointD(idQ)+"</td></tr></tbody></table></p>";
var toStore_1="store("+"'"+idQ+"'"+",";
var toStore_2=idSelect;
var toStore_3=idAnswer;
var toStore_4=idAnswerToCatch;
var toStore_5=")";
var toStore_6=toStore_1+"'"+idSelect+"'"+","+"'"+idAnswer+"'"+","+"'"+idAnswerToCatch+"'"+","+"'"+next+"'"+")";
var toWrite_8="<p><div class='form-group'><label>Choose A, B, C, or D and click 'Submit'</label><table class='borderless'><tbody><tr><td><form id='form_sm' onSubmit='return false'><select class='form-control' id="+idSelect+"><option value='A'>(A)</option><option value='B'>(B)</option><option value='C'>(C)</option><option value='D'>(D)</option></select></p></td><td class='invisible'>BLA</td><td><p><input type='button' class='btn btn-success' value='Submit' onClick="+toStore_6+"></form></td></tr></tbody></table></div></p>";
var toWrite_8a="showMyAnswers("+"'"+idContainer+"'"+")";
var toWrite_9="<div class='container'><table class='table'><thead><tr class='warning'><td><p align='center'>Click the button below to show your answer(s):</p></td></tr></thead></table><tbody><tr><td><p align='center'><button type='button' class='btn btn-success ' data-toggle='collapse' onclick="+toWrite_8a+" data-target=#"+idContainer+">Show My Answer(s)</button></p></p><div id="+idContainer+" class='collapse'></div></td></tr></tbody></table></div>";
var toWrite_10a="<p><div id="+idAnswerToCatch+"></div></p>";
//pagination
var toWrite_11="appearPauseAud";
var toWrite_12="("+"'"+idDiv+"'"+",";
var toWrite_13='select_page.value';
var toWrite_14 =")";
var toWrite_15=toWrite_11.concat(toWrite_12,toWrite_13,toWrite_14);
var toAppear_1="appearPauseAud("+"'"+idDiv+"'"+",";
var toAppear_2=previous;
var toAppear_3=")";
var toAppear_4=toAppear_1.concat("'",toAppear_2,"'",toAppear_3);	
var toAppear_5=next;
var toAppear_6="appearPauseAud("+"'"+idDiv+"'"+","+"'"+next+"')";
var a="<p><table class='table no-border'><thead><tr align='center'><p align='center'>Go to Page:</p></tr></thead>";
var b="<td><a class='btn btn-success ' onClick="+toAppear_4+">Previous</a></td>";
var c="<td><div class='form-group'><form id='form_sm' onSubmit='return false' align='center'><select class='form-control' id='select_page'><option value='#direction1'>Dir 1</option><option value='#q1'>1</option><option value='#q2'>2</option><option value='#q3'>3</option><option value='#direction2'>Dir 2</option><option value='#q4'>4</option><option value='#q5'>5</option><option value='#q6'>6</option><option value='#q7'>7</option><option value='#direction3'>Dir 3</option><option value='#q8'>8</option><option value='#q9'>9</option><option value='#q10'>10</option><option value='#q11'>11</option><option value='#direction4'>Dir 4</option><option value='#q12'>12</option><option value='#q13'>13</option><option value='#q14'>14</option><option value='#q15'>15</option><option value='#direction5'>Direction 5</option><option value='#q16'>16</option><option value='#q17'>17</option><option value='#q18'>18</option><option value='#q19'>19</option><option value='#q20'>20</option><option value='#q21'>21</option><option value='#q22'>22</option><option value='#q23'>23</option><option value='#q24'>24</option><option value='#q25'>25</option><option value='#q26'>26</option><option value='#q27'>27</option><option value='#q28'>28</option><option value='#q29'>29</option><option value='#q30'>30</option>";
var d="<option value='#q31'>31</option><option value='#q32'>32</option><option value='#q33'>33</option><option value='#q34'>34</option><option value='#q35'>35</option><option value='#q36'>36</option><option value='#q37'>37</option><option value='#q38'>38</option><option value='#q39'>39</option><option value='#q40'>40</option><option value='#q41'>41</option><option value='#q42'>42</option><option value='#q43'>43</option><option value='#q44'>44</option><option value='#q45'>45</option><option value='#q46'>46</option><option value='#q47'>47</option><option value='#q48'>48</option><option value='#q49'>49</option><option value='#q50'>50</option><option value='#score'>Score</option><option value='#explanation'>Explanation</option></select><p><input type='button' class='btn btn-success ' value='Go' onClick="+toWrite_15+" align='center'></p></form></div></td>";
var e="<td><a class='btn btn-success ' onClick="+toAppear_6+">Next</a></td></tr></tbody></table></p>";
var pagination=a+b+c+d+e;
//--end--pagination
document.getElementById(idDiv).innerHTML=toWrite_2+toWrite_3+toWrite_4+toWrite_4a+toWrite_5+toWrite_6+toWrite_7+toWrite_8+toWrite_9+pagination;
showTran(idQ,toTran);
}
function showMyAnswers(idContainer){
var a="<div class='row'><div class='col-md-8 col-md-offset-2'><div class='thumbnail'><table class='table' align='center'><thead><tr align='center'><td class='success'>No</td><td class='success'>Your Answer</td></tr></thead><tbody><tr><td>1</td><td id='a_1'>"+pointAnswer('answer_1')+"</td></tr><tr><td>2</td><td id='a_2'>"+pointAnswer('answer_2')+"</td></tr><tr><td>3</td><td id='a_3'>"+pointAnswer('answer_3')+"</td></tr><tr><td>4</td><td id='a_4'>"+pointAnswer('answer_4')+"</td></tr><tr><td>5</td><td id='a_5'>"+pointAnswer('answer_5')+"</td></tr><tr><td>6</td><td id='a_6'>"+pointAnswer('answer_6')+"</td></tr><tr><td>7</td><td id='a_7'>"+pointAnswer('answer_7')+"</td></tr><tr><td>8</td><td id='a_8'>"+pointAnswer('answer_8')+"</td></tr><tr><td>9</td><td id='a_9'>"+pointAnswer('answer_9')+"</td></tr><tr><td>10</td><td id='a_10'>"+pointAnswer('answer_10')+"</td></tr><tr><td>11</td><td id='a_11'>"+pointAnswer('answer_11')+"</td></tr><tr><td>12</td><td id='a_12'>"+pointAnswer('answer_12')+"</td></tr><tr><td>13</td><td id='a_13'>"+pointAnswer('answer_13')+"</td></tr><tr><td>14</td><td id='a_14'>"+pointAnswer('answer_14')+"</td></tr><tr><td>15</td><td id='a_15'>"+pointAnswer('answer_15')+"</td></tr><tr><td>16</td><td id='a_16'>"+pointAnswer('answer_16')+"</td></tr><tr><td>17</td><td id='a_17'>"+pointAnswer('answer_17')+"</td></tr><tr><td>18</td><td id='a_18'>"+pointAnswer('answer_18')+"</td></tr><tr><td>19</td><td id='a_19'>"+pointAnswer('answer_19')+"</td></tr><tr><td>20</td><td id='a_20'>"+pointAnswer('answer_20')+"</td></tr><tr><td>21</td><td id='a_21'>"+pointAnswer('answer_21')+"</td></tr><tr><td>22</td><td id='a_22'>"+pointAnswer('answer_22')+"</td></tr><tr><td>23</td><td id='a_23'>"+pointAnswer('answer_23')+"</td></tr><tr><td>24</td><td id='a_24'>"+pointAnswer('answer_24')+"</td></tr><tr><td>25</td><td id='a_25'>"+pointAnswer('answer_25')+"</td></tr><tr><td>26</td><td id='a_26'>"+pointAnswer('answer_26')+"</td></tr><tr><td>27</td><td id='a_27'>"+pointAnswer('answer_27')+"</td></tr><tr><td>28</td><td id='a_28'>"+pointAnswer('answer_28')+"</td></tr><tr><td>29</td><td id='a_29'>"+pointAnswer('answer_29')+"</td></tr><tr><td>30</td><td id='a_30'>"+pointAnswer('answer_30')+"</td></tr><tr><td>31</td><td id='a_31'>"+pointAnswer('answer_31')+"</td></tr><tr><td>32</td><td id='a_32'>"+pointAnswer('answer_32')+"</td></tr><tr><td>33</td><td id='a_33'>"+pointAnswer('answer_33')+"</td></tr><tr><td>34</td><td id='a_34'>"+pointAnswer('answer_34')+"</td></tr><tr><td>35</td><td id='a_35'>"+pointAnswer('answer_35')+"</td></tr><tr><td>36</td><td id='a_36'>"+pointAnswer('answer_36')+"</td></tr><tr><td>37</td><td id='a_37'>"+pointAnswer('answer_37')+"</td></tr><tr><td>38</td><td id='a_38'>"+pointAnswer('answer_38')+"</td></tr><tr><td>39</td><td id='a_39'>"+pointAnswer('answer_39')+"</td></tr><tr><td>40</td><td id='a_40'>"+pointAnswer('answer_40')+"</td></tr><tr><td>41</td><td id='a_41'>"+pointAnswer('answer_41')+"</td></tr><tr><td>42</td><td id='a_42'>"+pointAnswer('answer_42')+"</td></tr><tr><td>43</td><td id='a_43'>"+pointAnswer('answer_43')+"</td></tr><tr><td>44</td><td id='a_44'>"+pointAnswer('answer_44')+"</td></tr><tr><td>45</td><td id='a_45'>"+pointAnswer('answer_45')+"</td></tr><tr><td>46</td><td id='a_46'>"+pointAnswer('answer_46')+"</td></tr><tr><td>47</td><td id='a_47'>"+pointAnswer('answer_47')+"</td></tr><tr><td>48</td><td id='a_48'>"+pointAnswer('answer_48')+"</td></tr><tr><td>49</td><td id='a_49'>"+pointAnswer('answer_49')+"</td></tr><tr><td>50</td><td id='a_50'>"+pointAnswer('answer_50')+"</td></tr></tbody></table></div></div></div>";
document.getElementById(idContainer).innerHTML=a;
}
function pagination(elShown,previous,next){
//pagination
var toWrite_11="appear";
var toWrite_12="(";
var toWrite_13='select_page.value';
var toWrite_14 =")";
var toWrite_15=toWrite_11.concat(toWrite_12,toWrite_13,toWrite_14);
var toAppear_1="appear(";
var toAppear_2=previous;
var toAppear_3=")";
var toAppear_4=toAppear_1.concat("'",toAppear_2,"'",toAppear_3);	
var toAppear_5=next;
var toAppear_6="appear("+"'"+next+"')";
var a="<p><table class='table no-border'><thead><tr align='center'><p align='center'>Go to Page:</p></tr></thead>";
var b="<td><a class='btn btn-success ' onClick="+toAppear_4+">Previous</a></td>";
var c="<td><div class='form-group'><form id='form_sm' onSubmit='return false' align='center'><select class='form-control' id='select_page'><option value='#direction1'>Dir 1</option><option value='#q1'>1</option><option value='#q2'>2</option><option value='#q3'>3</option><option value='#direction2'>Dir 2</option><option value='#q4'>4</option><option value='#q5'>5</option><option value='#q6'>6</option><option value='#q7'>7</option><option value='#direction3'>Dir 3</option><option value='#q8'>8</option><option value='#q9'>9</option><option value='#q10'>10</option><option value='#q11'>11</option><option value='#direction4'>Dir 4</option><option value='#q12'>12</option><option value='#q13'>13</option><option value='#q14'>14</option><option value='#q15'>15</option><option value='#direction5'>Direction 5</option><option value='#q16'>16</option><option value='#q17'>17</option><option value='#q18'>18</option><option value='#q19'>19</option><option value='#q20'>20</option><option value='#q21'>21</option><option value='#q22'>22</option><option value='#q23'>23</option><option value='#q24'>24</option><option value='#q25'>25</option><option value='#q26'>26</option><option value='#q27'>27</option><option value='#q28'>28</option><option value='#q29'>29</option><option value='#q30'>30</option>";
var d="<option value='#q31'>31</option><option value='#q32'>32</option><option value='#q33'>33</option><option value='#q34'>34</option><option value='#q35'>35</option><option value='#q36'>36</option><option value='#q37'>37</option><option value='#q38'>38</option><option value='#q39'>39</option><option value='#q40'>40</option><option value='#q41'>41</option><option value='#q42'>42</option><option value='#q43'>43</option><option value='#q44'>44</option><option value='#q45'>45</option><option value='#q46'>46</option><option value='#q47'>47</option><option value='#q48'>48</option><option value='#q49'>49</option><option value='#q50'>50</option><option value='#score'>Score</option><option value='#explanation'>Explanation</option></select><p><input type='button' class='btn btn-success ' value='Go' onClick="+toWrite_15+" align='center'></p></form></div></td>";
var e="<td><a class='btn btn-success ' onClick="+toAppear_6+">Next</a></td></tr></tbody></table></p>";
var pagination=a+b+c+d+e;
//--end--pagination
document.getElementById(elShown).innerHTML=pagination;
}
function disableAud(idQuestion)
{
  countAud="countAud_"+idQuestion;	
  if(localStorage.countAud)
  {	
   var idPlay="play_"+idQuestion;
   var idPause="pause_"+idQuestion;
   var val=localStorage.getItem(countAud);	
   var count=parseInt(localStorage.getItem(val));	
   if(count>=1)
   {
	  alert('sdh 1 x');
   }	
  }
}	
function counterAud(idAud,countAud){
	        aud=document.getElementById(idAud);
			aud.onended=function()
			{
             var i = parseInt(localStorage.getItem(countAud));
             i++;
             localStorage.setItem(countAud, i);
			 if(localStorage.getItem(countAud)==2)
			 {
			    var idPlay="play_"+idAud;
				var idPause="pause_"+idAud;
				var val=localStorage.getItem(countAud);	
				var count=parseInt(localStorage.getItem(val));	
				var disablePlay="<button id="+idPlay+" class='btn btn-success ' disabled='disabled'>Play Audio</button>";
				var disablePause="<button id="+idPause+" class='btn btn-success ' disabled='disabled'>Pause Audio</button>";
				document.getElementById(idPlay).innerHTML=disablePlay;
				document.getElementById(idPause).innerHTML=disablePause;
			 }
             return false;
			};
}

function enableControls(idAud) { 
    var med=documemt.getElementBuId(idAud);
	med.controls = true;
    med.load();
} 

function disableControls(idAud) { 
    var med=documemt.getElementBuId(idAud);
    med.controls = false;
    med.load();
} 
function writeLoadQ(elShown,latihan_un,smk,mapel,practice,ready,next)
{
 a="<article align='center'>";
 b="<h1>"+latihan_un+"</h1>";
 c="<h2>"+smk+"</h2>";
 d="<h2>"+mapel+"</h2>";
 dd="<h2>TIME ALLOTMENT: 120 MINUTES</h2>";
 e="<h3>"+practice+"</h3></br>";
 f="<h3>"+ready+"<h3></br>";
 g="<p class='button'><a class='btn btn-success' href="+next+">Start</a></p></br>";
 h="<h3>(c) widiopranoto@gmail.com</h3></br></article>";
 i=a+b+c+d+dd+e+f+g+h;
 document.getElementById(elShown).innerHTML=i;	
}
function removeAllAnswersScores_bottom()
{
  removeAllAnswersScores();	
}
function counterAudAll(){
counterAud('countAud_q_1','countAud_q_1');
counterAud('countAud_q_2','countAud_q_2');
counterAud('countAud_q_3','countAud_q_3');
counterAud('countAud_q_4','countAud_q_4');
counterAud('countAud_q_5','countAud_q_5');
counterAud('countAud_q_6','countAud_q_6');
counterAud('countAud_q_7','countAud_q_7');
counterAud('countAud_q_8','countAud_q_8');
counterAud('countAud_q_9','countAud_q_9');
counterAud('countAud_q_10','countAud_q_10');
counterAud('countAud_q_11','countAud_q_11');
counterAud('countAud_q_12','countAud_q_12');
counterAud('countAud_q_13','countAud_q_13');
counterAud('countAud_q_14','countAud_q_14');
counterAud('countAud_q_15','countAud_q_15');
}
function timeIsUp() {
    setTimeout(myTimeAlert, 7200000) 
}
function myTimeAlert(){
	alert('Time is up. 120 minutes (2 hours)have passed');
	submitAllNoConfirm();
	appear('#score');
    $('#pre_submit').hide();
}
function congrats(){
  if(retrieveTotalScores()>=80){document.getElementById("congrats").innerHTML = "<h3>CONGRATULATIONS!</br> YOU ACHIEVED SCORE MORE THAN 80!</br>KEEP PRACTICING!</H3>";}
  else if(retrieveTotalScores()<80 && retrieveTotalScores()>=70){document.getElementById("congrats").innerHTML = "<h3>CONGRATULATIONS!</BR> YOU ACHIEVED SCORE MORE THAN 70! </BR>PRACTICE MORE!</H3>";}
  else if(retrieveTotalScores()<70){document.getElementById("congrats").innerHTML = "<h3>YOUR SCORE IS LESS THAN 70!</BR> YOU NEED TO PRACTICE MORE!</H3>";} 
}
function writeScore(){
document.writeln(" <div id='score' class='container-fluid' style='display:none;'> "); 
document.writeln("   <table class='table'> "); 
document.writeln("     <thead> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	    <td class='success' align='center'><h3>SCORE</h3> "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	  	<td>If the score(s) doesn't appear, you have not filled all questions. "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</thead> "); 
document.writeln("   </table> "); 
document.writeln("     <table class='table' id='pre_submit'> "); 
document.writeln("     <thead> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	    <td class='success' align='center'>Click 'Submit All' button to submit all of your answer(s) "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	  	<td align='center'><button class='btn btn-success' onclick='submitAll()'>Submit All</button> "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</thead> "); 
document.writeln("   </table>	 "); 
document.writeln("   <table class='table' id='after_submit'> "); 
document.writeln("     <thead> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	    <td class='success' align='center'>Click 'Show My Score(s)' button to show your score(s). After seeing you score(s), you can't go back to the questions. "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	  	<td align='center'><button class='btn btn-success' data-toggle='collapse' data-target='#table_score' onclick='showAll()'>Show My Score(s)</button> "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</thead> "); 
document.writeln("   </table>	 "); 
document.writeln("   <div id='table_score' class='collapse' align='center'> "); 
document.writeln("     <div class='col-md-8 col-md-offset-2'> "); 
document.writeln("       <div class='thumbnail'> "); 
document.writeln(" <table class='table'> "); 
document.writeln(" <thead> "); 
document.writeln("   <tr> "); 
document.writeln("     <td class='success' width='auto' align='center'>No.</td><td class='success' width='auto' align='center'>Your Answer(s)</td><td class='success' width='auto' align='center'>Key</td><td class='success' width='auto' align='center'>Your Score</td></tr></thead> "); 
document.writeln(" <tbody> "); 
document.writeln(" <tr align='center'><td>1</td><td><div id='a_1'></div></td><td><div id='k_1'></td><td><div id='s_1'></td></tr> "); 
document.writeln(" <tr align='center'><td>2</td><td><div id='a_2'></div></td><td><div id='k_2'></td><td><div id='s_2'></td></tr> "); 
document.writeln(" <tr align='center'><td>3</td><td><div id='a_3'></div></td><td><div id='k_3'></td><td><div id='s_3'></td></tr> "); 
document.writeln(" <tr align='center'><td>4</td><td><div id='a_4'></div></td><td><div id='k_4'></td><td><div id='s_4'></td></tr> "); 
document.writeln(" <tr align='center'><td>5</td><td><div id='a_5'></div></td><td><div id='k_5'></td><td><div id='s_5'></td></tr> "); 
document.writeln(" <tr align='center'><td>6</td><td><div id='a_6'></div></td><td><div id='k_6'></td><td><div id='s_6'></td></tr> "); 
document.writeln(" <tr align='center'><td>7</td><td><div id='a_7'></div></td><td><div id='k_7'></td><td><div id='s_7'></td></tr> "); 
document.writeln(" <tr align='center'><td>8</td><td><div id='a_8'></div></td><td><div id='k_8'></td><td><div id='s_8'></td></tr> "); 
document.writeln(" <tr align='center'><td>9</td><td><div id='a_9'></div></td><td><div id='k_9'></td><td><div id='s_9'></td></tr> "); 
document.writeln(" <tr align='center'><td>10</td><td><div id='a_10'></div></td><td><div id='k_10'></td><td><div id='s_10'></td></tr> "); 
document.writeln(" <tr align='center'><td>11</td><td><div id='a_11'></div></td><td><div id='k_11'></td><td><div id='s_11'></td></tr> "); 
document.writeln(" <tr align='center'><td>12</td><td><div id='a_12'></div></td><td><div id='k_12'></td><td><div id='s_12'></td></tr> "); 
document.writeln(" <tr align='center'><td>13</td><td><div id='a_13'></div></td><td><div id='k_13'></td><td><div id='s_13'></td></tr> "); 
document.writeln(" <tr align='center'><td>14</td><td><div id='a_14'></div></td><td><div id='k_14'></td><td><div id='s_14'></td></tr> "); 
document.writeln(" <tr align='center'><td>15</td><td><div id='a_15'></div></td><td><div id='k_15'></td><td><div id='s_15'></td></tr> "); 
document.writeln(" <tr align='center'><td>16</td><td><div id='a_16'></div></td><td><div id='k_16'></td><td><div id='s_16'></td></tr> "); 
document.writeln(" <tr align='center'><td>17</td><td><div id='a_17'></div></td><td><div id='k_17'></td><td><div id='s_17'></td></tr> "); 
document.writeln(" <tr align='center'><td>18</td><td><div id='a_18'></div></td><td><div id='k_18'></td><td><div id='s_18'></td></tr> "); 
document.writeln(" <tr align='center'><td>19</td><td><div id='a_19'></div></td><td><div id='k_19'></td><td><div id='s_19'></td></tr> "); 
document.writeln(" <tr align='center'><td>20</td><td><div id='a_20'></div></td><td><div id='k_20'></td><td><div id='s_20'></td></tr> "); 
document.writeln(" <tr align='center'><td>21</td><td><div id='a_21'></div></td><td><div id='k_21'></td><td><div id='s_21'></td></tr> "); 
document.writeln(" <tr align='center'><td>22</td><td><div id='a_22'></div></td><td><div id='k_22'></td><td><div id='s_22'></td></tr> "); 
document.writeln(" <tr align='center'><td>23</td><td><div id='a_23'></div></td><td><div id='k_23'></td><td><div id='s_23'></td></tr> "); 
document.writeln(" <tr align='center'><td>24</td><td><div id='a_24'></div></td><td><div id='k_24'></td><td><div id='s_24'></td></tr> "); 
document.writeln(" <tr align='center'><td>25</td><td><div id='a_25'></div></td><td><div id='k_25'></td><td><div id='s_25'></td></tr> "); 
document.writeln(" <tr align='center'><td>26</td><td><div id='a_26'></div></td><td><div id='k_26'></td><td><div id='s_26'></td></tr> "); 
document.writeln(" <tr align='center'><td>27</td><td><div id='a_27'></div></td><td><div id='k_27'></td><td><div id='s_27'></td></tr> "); 
document.writeln(" <tr align='center'><td>28</td><td><div id='a_28'></div></td><td><div id='k_28'></td><td><div id='s_28'></td></tr> "); 
document.writeln(" <tr align='center'><td>29</td><td><div id='a_29'></div></td><td><div id='k_29'></td><td><div id='s_29'></td></tr> "); 
document.writeln(" <tr align='center'><td>30</td><td><div id='a_30'></div></td><td><div id='k_30'></td><td><div id='s_30'></td></tr> "); 
document.writeln(" <tr align='center'><td>31</td><td><div id='a_31'></div></td><td><div id='k_31'></td><td><div id='s_31'></td></tr> "); 
document.writeln(" <tr align='center'><td>32</td><td><div id='a_32'></div></td><td><div id='k_32'></td><td><div id='s_32'></td></tr> "); 
document.writeln(" <tr align='center'><td>33</td><td><div id='a_33'></div></td><td><div id='k_33'></td><td><div id='s_33'></td></tr> "); 
document.writeln(" <tr align='center'><td>34</td><td><div id='a_34'></div></td><td><div id='k_34'></td><td><div id='s_34'></td></tr> "); 
document.writeln(" <tr align='center'><td>35</td><td><div id='a_35'></div></td><td><div id='k_35'></td><td><div id='s_35'></td></tr> "); 
document.writeln(" <tr align='center'><td>36</td><td><div id='a_36'></div></td><td><div id='k_36'></td><td><div id='s_36'></td></tr> "); 
document.writeln(" <tr align='center'><td>37</td><td><div id='a_37'></div></td><td><div id='k_37'></td><td><div id='s_37'></td></tr> "); 
document.writeln(" <tr align='center'><td>38</td><td><div id='a_38'></div></td><td><div id='k_38'></td><td><div id='s_38'></td></tr> "); 
document.writeln(" <tr align='center'><td>39</td><td><div id='a_39'></div></td><td><div id='k_39'></td><td><div id='s_39'></td></tr> "); 
document.writeln(" <tr align='center'><td>40</td><td><div id='a_40'></div></td><td><div id='k_40'></td><td><div id='s_40'></td></tr> "); 
document.writeln(" <tr align='center'><td>41</td><td><div id='a_41'></div></td><td><div id='k_41'></td><td><div id='s_41'></td></tr> "); 
document.writeln(" <tr align='center'><td>42</td><td><div id='a_42'></div></td><td><div id='k_42'></td><td><div id='s_42'></td></tr> "); 
document.writeln(" <tr align='center'><td>43</td><td><div id='a_43'></div></td><td><div id='k_43'></td><td><div id='s_43'></td></tr> "); 
document.writeln(" <tr align='center'><td>44</td><td><div id='a_44'></div></td><td><div id='k_44'></td><td><div id='s_44'></td></tr> "); 
document.writeln(" <tr align='center'><td>45</td><td><div id='a_45'></div></td><td><div id='k_45'></td><td><div id='s_45'></td></tr> "); 
document.writeln(" <tr align='center'><td>46</td><td><div id='a_46'></div></td><td><div id='k_46'></td><td><div id='s_46'></td></tr> "); 
document.writeln(" <tr align='center'><td>47</td><td><div id='a_47'></div></td><td><div id='k_47'></td><td><div id='s_47'></td></tr> "); 
document.writeln(" <tr align='center'><td>48</td><td><div id='a_48'></div></td><td><div id='k_48'></td><td><div id='s_48'></td></tr> "); 
document.writeln(" <tr align='center'><td>49</td><td><div id='a_49'></div></td><td><div id='k_49'></td><td><div id='s_49'></td></tr> "); 
document.writeln(" <tr align='center'><td>50</td><td><div id='a_50'></div></td><td><div id='k_50'></td><td><div id='s_50'></td></tr> "); 
document.writeln(" </tbody> "); 
document.writeln(" </table>  "); 
document.writeln("   <table class='table'> "); 
document.writeln("     <thead> "); 
document.writeln("       <tr align='center'> "); 
document.writeln("         <td class='warning'><h3>TOTAL SCORE: <div id='total'></div><script>showTotalScores('total');</script></h3> "); 
document.writeln("         </td> "); 
document.writeln(" 	  </tr> "); 
document.writeln("     <tbody>	  	 "); 
document.writeln("       <tr class='danger'> "); 
document.writeln(" 	    <td align='center'><div id='congrats'></div> "); 
document.writeln("         </td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</tbody> "); 
document.writeln("   </table> "); 
document.writeln("   </div> "); 
document.writeln(" </div>	   "); 
document.writeln(" </div> "); 
document.writeln("   <p id='page_score'><script>pagination('page_score','#q50','#explanation');</script></p> "); 
document.writeln(" </div> "); 
document.writeln("  ");
}
function writeExpl(){
document.writeln(" <div id='explanation' class='container-fluid' style='display:none;'> "); 
document.writeln("   <table class='table'> "); 
document.writeln("     <thead> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	    <td class='success' align='center'><h3>EXPLANATION</h3> "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	  	<td>If the explanation doesn't appear, you have not filled all questions. Go back to the questions. "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</thead> "); 
document.writeln("   </table> "); 
document.writeln("   <table class='table'> "); 
document.writeln("     <thead> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	    <td class='success' align='center'>Click 'Explanation' button to show the explanation "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	  <tr> "); 
document.writeln(" 	  	<td align='center'><button class='btn btn-success' data-toggle='collapse' data-target='#table_expl' onclick='showAllQsTransExpls()'>Explanation</button> "); 
document.writeln(" 		</td> "); 
document.writeln(" 	  </tr> "); 
document.writeln(" 	</thead> "); 
document.writeln("   </table>	 "); 
document.writeln("   <div id='table_expl' class='collapse'> "); 
document.writeln(" <table class='table'> "); 
document.writeln(" <thead><tr><td class='success' width='auto' align='center'>No.</td><td class='success' width='auto' align='center'>Question</td><td class='success' width='auto' align='center'>Transcription</td><td class='success' width='auto' align='center'>Explanation</td></tr></thead><tbody> "); 
document.writeln(" <tr><td>1</td><td><div id='q_1'></div></td><td><div id='t_1'></td><td><div id='e_1'></td></tr> "); 
document.writeln(" <tr><td>2</td><td><div id='q_2'></div></td><td><div id='t_2'></td><td><div id='e_2'></td></tr> "); 
document.writeln(" <tr><td>3</td><td><div id='q_3'></div></td><td><div id='t_3'></td><td><div id='e_3'></td></tr> "); 
document.writeln(" <tr><td>4</td><td><div id='q_4'></div></td><td><div id='t_4'></td><td><div id='e_4'></td></tr> "); 
document.writeln(" <tr><td>5</td><td><div id='q_5'></div></td><td><div id='t_5'></td><td><div id='e_5'></td></tr> "); 
document.writeln(" <tr><td>6</td><td><div id='q_6'></div></td><td><div id='t_6'></td><td><div id='e_6'></td></tr> "); 
document.writeln(" <tr><td>7</td><td><div id='q_7'></div></td><td><div id='t_7'></td><td><div id='e_7'></td></tr> "); 
document.writeln(" <tr><td>8</td><td><div id='q_8'></div></td><td><div id='t_8'></td><td><div id='e_8'></td></tr> "); 
document.writeln(" <tr><td>9</td><td><div id='q_9'></div></td><td><div id='t_9'></td><td><div id='e_9'></td></tr> "); 
document.writeln(" <tr><td>10</td><td><div id='q_10'></div></td><td><div id='t_10'></td><td><div id='e_10'></td></tr> "); 
document.writeln(" <tr><td>11</td><td><div id='q_11'></div></td><td><div id='t_11'></td><td><div id='e_11'></td></tr> "); 
document.writeln(" <tr><td>12</td><td><div id='q_12'></div></td><td><div id='t_12'></td><td><div id='e_12'></td></tr> "); 
document.writeln(" <tr><td>13</td><td><div id='q_13'></div></td><td><div id='t_13'></td><td><div id='e_13'></td></tr> "); 
document.writeln(" <tr><td>14</td><td><div id='q_14'></div></td><td><div id='t_14'></td><td><div id='e_14'></td></tr> "); 
document.writeln(" <tr><td>15</td><td><div id='q_15'></div></td><td><div id='t_15'></td><td><div id='e_15'></td></tr> "); 
document.writeln(" <tr><td>16</td><td><div id='q_16'></div></td><td><div id='t_16'></td><td><div id='e_16'></td></tr> "); 
document.writeln(" <tr><td>17</td><td><div id='q_17'></div></td><td><div id='t_17'></td><td><div id='e_17'></td></tr> "); 
document.writeln(" <tr><td>18</td><td><div id='q_18'></div></td><td><div id='t_18'></td><td><div id='e_18'></td></tr> "); 
document.writeln(" <tr><td>19</td><td><div id='q_19'></div></td><td><div id='t_19'></td><td><div id='e_19'></td></tr> "); 
document.writeln(" <tr><td>20</td><td><div id='q_20'></div></td><td><div id='t_20'></td><td><div id='e_20'></td></tr> "); 
document.writeln(" <tr><td>21</td><td><div id='q_21'></div></td><td><div id='t_21'></td><td><div id='e_21'></td></tr> "); 
document.writeln(" <tr><td>22</td><td><div id='q_22'></div></td><td><div id='t_22'></td><td><div id='e_22'></td></tr> "); 
document.writeln(" <tr><td>23</td><td><div id='q_23'></div></td><td><div id='t_23'></td><td><div id='e_23'></td></tr> "); 
document.writeln(" <tr><td>24</td><td><div id='q_24'></div></td><td><div id='t_24'></td><td><div id='e_24'></td></tr> "); 
document.writeln(" <tr><td>25</td><td><div id='q_25'></div></td><td><div id='t_25'></td><td><div id='e_25'></td></tr> "); 
document.writeln(" <tr><td>26</td><td><div id='q_26'></div></td><td><div id='t_26'></td><td><div id='e_26'></td></tr> "); 
document.writeln(" <tr><td>27</td><td><div id='q_27'></div></td><td><div id='t_27'></td><td><div id='e_27'></td></tr> "); 
document.writeln(" <tr><td>28</td><td><div id='q_28'></div></td><td><div id='t_28'></td><td><div id='e_28'></td></tr> "); 
document.writeln(" <tr><td>29</td><td><div id='q_29'></div></td><td><div id='t_29'></td><td><div id='e_29'></td></tr> "); 
document.writeln(" <tr><td>30</td><td><div id='q_30'></div></td><td><div id='t_30'></td><td><div id='e_30'></td></tr> "); 
document.writeln(" <tr><td>31</td><td><div id='q_31'></div></td><td><div id='t_31'></td><td><div id='e_31'></td></tr> "); 
document.writeln(" <tr><td>32</td><td><div id='q_32'></div></td><td><div id='t_32'></td><td><div id='e_32'></td></tr> "); 
document.writeln(" <tr><td>33</td><td><div id='q_33'></div></td><td><div id='t_33'></td><td><div id='e_33'></td></tr> "); 
document.writeln(" <tr><td>34</td><td><div id='q_34'></div></td><td><div id='t_34'></td><td><div id='e_34'></td></tr> "); 
document.writeln(" <tr><td>35</td><td><div id='q_35'></div></td><td><div id='t_35'></td><td><div id='e_35'></td></tr> "); 
document.writeln(" <tr><td>36</td><td><div id='q_36'></div></td><td><div id='t_36'></td><td><div id='e_36'></td></tr> "); 
document.writeln(" <tr><td>37</td><td><div id='q_37'></div></td><td><div id='t_37'></td><td><div id='e_37'></td></tr> "); 
document.writeln(" <tr><td>38</td><td><div id='q_38'></div></td><td><div id='t_38'></td><td><div id='e_38'></td></tr> "); 
document.writeln(" <tr><td>39</td><td><div id='q_39'></div></td><td><div id='t_39'></td><td><div id='e_39'></td></tr> "); 
document.writeln(" <tr><td>40</td><td><div id='q_40'></div></td><td><div id='t_40'></td><td><div id='e_40'></td></tr> "); 
document.writeln(" <tr><td>41</td><td><div id='q_41'></div></td><td><div id='t_41'></td><td><div id='e_41'></td></tr> "); 
document.writeln(" <tr><td>42</td><td><div id='q_42'></div></td><td><div id='t_42'></td><td><div id='e_42'></td></tr> "); 
document.writeln(" <tr><td>43</td><td><div id='q_43'></div></td><td><div id='t_43'></td><td><div id='e_43'></td></tr> "); 
document.writeln(" <tr><td>44</td><td><div id='q_44'></div></td><td><div id='t_44'></td><td><div id='e_44'></td></tr> "); 
document.writeln(" <tr><td>45</td><td><div id='q_45'></div></td><td><div id='t_45'></td><td><div id='e_45'></td></tr> "); 
document.writeln(" <tr><td>46</td><td><div id='q_46'></div></td><td><div id='t_46'></td><td><div id='e_46'></td></tr> "); 
document.writeln(" <tr><td>47</td><td><div id='q_47'></div></td><td><div id='t_47'></td><td><div id='e_47'></td></tr> "); 
document.writeln(" <tr><td>48</td><td><div id='q_48'></div></td><td><div id='t_48'></td><td><div id='e_48'></td></tr> "); 
document.writeln(" <tr><td>49</td><td><div id='q_49'></div></td><td><div id='t_49'></td><td><div id='e_49'></td></tr> "); 
document.writeln(" <tr><td>50</td><td><div id='q_50'></div></td><td><div id='t_50'></td><td><div id='e_50'></td></tr> "); 
document.writeln(" </tbody> "); 
document.writeln(" </table>   "); 
document.writeln("   </div> <!--div container tabel--> "); 
document.writeln("  "); 
document.writeln("   <div class='row' align='center'> "); 
document.writeln(" <!--<script>showAllQsTransExpls();</script>--> "); 
document.writeln("   </div><!--row--> "); 
document.writeln("    <p id='page_expl'><script>pagination('page_expl','#score','#explanation');</script></p> "); 
document.writeln(" </div> "); 
document.writeln(" </div> "); 
}	


