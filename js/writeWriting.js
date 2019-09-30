function getWriting(noKD){
var writingNo1=storeItem('writingNo1',getRndInteger(1,2).toString());
var writingNo2=storeItem('writingNo2',getRndInteger(3,4).toString());
var writingNo3=storeItem('writingNo3',getRndInteger(5,6).toString());
var writingNo4=storeItem('writingNo4',getRndInteger(7,8).toString());
var writingNo5=storeItem('writingNo5',getRndInteger(9,10).toString());
var writingNo6=storeItem('writingNo6',getRndInteger(11,12).toString());
var writingNo7=storeItem('writingNo7',getRndInteger(13,14).toString());
var writingNo8=storeItem('writingNo8',getRndInteger(15,16).toString());
var writingNo9=storeItem('writingNo9',getRndInteger(17,18).toString());
var writingNo10=storeItem('writingNo10',getRndInteger(19,20).toString());
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo1'),noKD,writingItem1);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo2'),noKD,writingItem2);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo3'),noKD,writingItem3);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo4'),noKD,writingItem4);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo5'),noKD,writingItem5);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo6'),noKD,writingItem6);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo7'),noKD,writingItem7);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo8'),noKD,writingItem8);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo9'),noKD,writingItem9);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo10'),noKD,writingItem10);
var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	
}

function writingSembunyikanSemua(){
    w3.hide('#writingDiv1');	
	w3.hide('#writingDiv2');	
    w3.hide('#writingDiv3');	
    w3.hide('#writingDiv4');	
    w3.hide('#writingDiv5');	
    w3.hide('#writingDiv6');	
    w3.hide('#writingDiv7');	
    w3.hide('#writingDiv8');	
    w3.hide('#writingDiv9');	
    w3.hide('#writingDiv10');	
    }
function writingPerlihatkan(id) {
    writingSembunyikanSemua();
     w3.show(id);
}	
function writingIframeNext(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var next;
	if(parseInt(writingNoDefault)==9 || parseInt(writingNoDefault)>9){writingNoDefault=10;next=10;}
	else { next=parseInt(writingNoDefault)+1;}
	localStorage.setItem('writingNoDefault',next);
	var writingSoalIframeHTML='writingSoalNo'+next+'.html';
	var writingIframeNext="<iframe src="+writingSoalIframeHTML+"></iframe>";
	var writingKDDefault=localStorage.getItem('writingKDDefault');
	document.getElementById('writingSoalIframeId'+'_'+writingKDDefault).innerHTML=writingIframeNext;
	}
function writingIframeBack(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var back;
	if(parseInt(writingNoDefault)==1 || parseInt(writingNoDefault)<1){writingNoDefault=1;back=1;}
	else { back=parseInt(writingNoDefault)-1;}
	localStorage.setItem('writingNoDefault',back);
	var writingSoalIframeHTML='writingSoalNo'+back+'.html';
	var writingIframeBack="<iframe src="+writingSoalIframeHTML+"></iframe>";
	var writingKDDefault=localStorage.getItem('writingKDDefault');
	document.getElementById('writingSoalIframeId'+'_'+writingKDDefault).innerHTML=writingIframeBack;
	}	
function writingNext(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var next;
	if(parseInt(writingNoDefault)>9){writingNoDefault=10;next=10;}
	else { next=parseInt(writingNoDefault)+1;}
	var nextId='#writingDiv'+next;
	writingPerlihatkan(nextId);	
	localStorage.setItem('writingNoDefault',next);	
	}	
function writingNext1(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var next;
	if(parseInt(writingNoDefault)>9){writingNoDefault=10;next=10;}
	else { next=parseInt(writingNoDefault)+1;}
	var nextId='#writingDiv'+next;
	}
function writingNext2(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var next;
	if(parseInt(writingNoDefault)>9){writingNoDefault=10;next=10;}
	else { next=parseInt(writingNoDefault)+1;}
	var nextId='#writingDiv'+next;
	writingPerlihatkan(nextId);	
	localStorage.setItem('writingNoDefault',next);	
	}	
function writingBack(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var back;
	if(parseInt(writingNoDefault)<2){writingNoDefault=1;back=1;}
	else { back=parseInt(writingNoDefault)-1; }
	var backId='#writingDiv'+back;	
	localStorage.setItem('writingNoDefault',back);	
	writingPerlihatkan(backId);	
	}	
function writingBack1(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var back;
	if(parseInt(writingNoDefault)<2){writingNoDefault=1;back=1;}
	else { back=parseInt(writingNoDefault)-1; }
	var backId='#writingDiv'+back;	
	//writingPerlihatkan(backId);	
	}
function writingBack2(){
	var writingNoDefault=localStorage.getItem('writingNoDefault');
	var back;
	if(parseInt(writingNoDefault)<2){writingNoDefault=1;back=1;}
	else { back=parseInt(writingNoDefault)-1; }
	var backId='#writingDiv'+back;	
	writingPerlihatkan(backId);	
	localStorage.setItem('writingNoDefault',back);		
	}	
function writingModalkan(id){
	document.getElementById(id).style.display='block';	
} 
function writingPerlihatkan(id){
	document.getElementById(id).style.display='block';	
} 
function writingSembunyikan(id){
	document.getElementById(id).style.display='none';	
}   

function writeWritingTitle(){
  //tulis judul
  //var writingTitleId='writingTitle';
  var writingKDDefault=localStorage.getItem('writingKDDefault');
  var writingTitle='Practice Writing KD '+writingKDDefault;
  document.getElementById('writingTopicId').innerHTML=writingTitle;
}

function writeWritingScoreContent(){
	var writingKDDefault=localStorage.getItem('writingKDDefault');
	var writingScoreKDDefaultId_1='writingScoreKD'+writingKDDefault+'_'+1;
	var writingScoreKDDefaultId_2='writingScoreKD'+writingKDDefault+'_'+2;
	var writingScoreKDDefaultId_3='writingScoreKD'+writingKDDefault+'_'+3;
	var writingScoreKDDefaultId_4='writingScoreKD'+writingKDDefault+'_'+4;
	var writingScoreKDDefaultId_5='writingScoreKD'+writingKDDefault+'_'+5;
	var writingScoreKDDefaultId_6='writingScoreKD'+writingKDDefault+'_'+6;
	var writingScoreKDDefaultId_7='writingScoreKD'+writingKDDefault+'_'+7;
	var writingScoreKDDefaultId_8='writingScoreKD'+writingKDDefault+'_'+8;
	var writingScoreKDDefaultId_9='writingScoreKD'+writingKDDefault+'_'+9;
	var writingScoreKDDefaultId_10='writingScoreKD'+writingKDDefault+'_'+10;	
	var writingScoreKDDefault_1=localStorage.getItem(writingScoreKDDefaultId_1);
	var writingScoreKDDefault_2=localStorage.getItem(writingScoreKDDefaultId_2);
	var writingScoreKDDefault_3=localStorage.getItem(writingScoreKDDefaultId_3);
	var writingScoreKDDefault_4=localStorage.getItem(writingScoreKDDefaultId_4);
	var writingScoreKDDefault_5=localStorage.getItem(writingScoreKDDefaultId_5);
	var writingScoreKDDefault_6=localStorage.getItem(writingScoreKDDefaultId_6);
	var writingScoreKDDefault_7=localStorage.getItem(writingScoreKDDefaultId_7);
	var writingScoreKDDefault_8=localStorage.getItem(writingScoreKDDefaultId_8);
	var writingScoreKDDefault_9=localStorage.getItem(writingScoreKDDefaultId_9);
	var writingScoreKDDefault_10=localStorage.getItem(writingScoreKDDefaultId_10);
	document.getElementById(writingScoreKDDefaultId_1).innerHTML=writingScoreKDDefault_1;
	document.getElementById(writingScoreKDDefaultId_2).innerHTML=writingScoreKDDefault_2;
	document.getElementById(writingScoreKDDefaultId_3).innerHTML=writingScoreKDDefault_3;
	document.getElementById(writingScoreKDDefaultId_4).innerHTML=writingScoreKDDefault_4;
	document.getElementById(writingScoreKDDefaultId_5).innerHTML=writingScoreKDDefault_5;
	document.getElementById(writingScoreKDDefaultId_6).innerHTML=writingScoreKDDefault_6;
	document.getElementById(writingScoreKDDefaultId_7).innerHTML=writingScoreKDDefault_7;
	document.getElementById(writingScoreKDDefaultId_8).innerHTML=writingScoreKDDefault_8;
	document.getElementById(writingScoreKDDefaultId_9).innerHTML=writingScoreKDDefault_9;
	document.getElementById(writingScoreKDDefaultId_10).innerHTML=writingScoreKDDefault_10;
}

function writeWritingBadgeContent(){
	var writingKDDefault=localStorage.getItem('writingKDDefault');
	var writingScoreKDDefaultId_1='writingScoreKD'+writingKDDefault+'_'+1;
	var writingScoreKDDefaultId_2='writingScoreKD'+writingKDDefault+'_'+2;
	var writingScoreKDDefaultId_3='writingScoreKD'+writingKDDefault+'_'+3;
	var writingScoreKDDefaultId_4='writingScoreKD'+writingKDDefault+'_'+4;
	var writingScoreKDDefaultId_5='writingScoreKD'+writingKDDefault+'_'+5;
	var writingScoreKDDefaultId_6='writingScoreKD'+writingKDDefault+'_'+6;
	var writingScoreKDDefaultId_7='writingScoreKD'+writingKDDefault+'_'+7;
	var writingScoreKDDefaultId_8='writingScoreKD'+writingKDDefault+'_'+8;
	var writingScoreKDDefaultId_9='writingScoreKD'+writingKDDefault+'_'+9;
	var writingScoreKDDefaultId_10='writingScoreKD'+writingKDDefault+'_'+10;	
	var writingScoreKDDefault_1=localStorage.getItem(writingScoreKDDefaultId_1);
	var writingScoreKDDefault_2=localStorage.getItem(writingScoreKDDefaultId_2);
	var writingScoreKDDefault_3=localStorage.getItem(writingScoreKDDefaultId_3);
	var writingScoreKDDefault_4=localStorage.getItem(writingScoreKDDefaultId_4);
	var writingScoreKDDefault_5=localStorage.getItem(writingScoreKDDefaultId_5);
	var writingScoreKDDefault_6=localStorage.getItem(writingScoreKDDefaultId_6);
	var writingScoreKDDefault_7=localStorage.getItem(writingScoreKDDefaultId_7);
	var writingScoreKDDefault_8=localStorage.getItem(writingScoreKDDefaultId_8);
	var writingScoreKDDefault_9=localStorage.getItem(writingScoreKDDefaultId_9);
	var writingScoreKDDefault_10=localStorage.getItem(writingScoreKDDefaultId_10);
	var writeBadge="<img src='image/badge.png' width='50px'></img>";

	if(parseInt(writingScoreKDDefault_1)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+1+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_2)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+2+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_3)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+3+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_4)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+4+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_5)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+5+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_6)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+6+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_7)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+7+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_8)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+8+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_9)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+9+'_').innerHTML=writeBadge;}
	if(parseInt(writingScoreKDDefault_10)>0){document.getElementById('writingBadgeKD'+writingKDDefault+'_'+10+'_').innerHTML=writeBadge;}
}

function writeWriting(writingNoSoal,writingNoSoalId,writingTopic,writingTopicId,writingInstructionA,writingInstructionAId,writingInstructionB,writingInstructionBId,noKD)
{
var writingInstructionA="Drag the words onto the yellow bar in the right order!";
var writingInstructionB="Rearrange the sentence into "+writingTopic+"!";
var writingNoDefault=localStorage.getItem('writingNoDefault');
var writingTopicDefault=writingTopic;
localStorage.setItem('writingTopicDefault',writingTopicDefault);
if(parseInt(writingNoDefault)==1){
var writingNo1=storeItem('writingNo1',getRndInteger(1,2).toString());
var writingNo2=storeItem('writingNo2',getRndInteger(3,4).toString());
var writingNo3=storeItem('writingNo3',getRndInteger(5,6).toString());
var writingNo4=storeItem('writingNo4',getRndInteger(7,8).toString());
var writingNo5=storeItem('writingNo5',getRndInteger(9,10).toString());
var writingNo6=storeItem('writingNo6',getRndInteger(11,12).toString());
var writingNo7=storeItem('writingNo7',getRndInteger(13,14).toString());
var writingNo8=storeItem('writingNo8',getRndInteger(15,16).toString());
var writingNo9=storeItem('writingNo9',getRndInteger(17,18).toString());
var writingNo10=storeItem('writingNo10',getRndInteger(19,20).toString());
var writingItem1='writingItemKD'+noKD+'_'+'1';
var writingItem2='writingItemKD'+noKD+'_'+'2';
var writingItem3='writingItemKD'+noKD+'_'+'3';
var writingItem4='writingItemKD'+noKD+'_'+'4';
var writingItem5='writingItemKD'+noKD+'_'+'5';
var writingItem6='writingItemKD'+noKD+'_'+'6';
var writingItem7='writingItemKD'+noKD+'_'+'7';
var writingItem8='writingItemKD'+noKD+'_'+'8';
var writingItem9='writingItemKD'+noKD+'_'+'9';
var writingItem10='writingItemKD'+noKD+'_'+'10';

var writingNo1=parseInt(localStorage.getItem('writingNo1'))-1;
var writingNo2=parseInt(localStorage.getItem('writingNo2'))-1;
var writingNo3=parseInt(localStorage.getItem('writingNo3'))-1;
var writingNo4=parseInt(localStorage.getItem('writingNo4'))-1;
var writingNo5=parseInt(localStorage.getItem('writingNo5'))-1;
var writingNo6=parseInt(localStorage.getItem('writingNo6'))-1;
var writingNo7=parseInt(localStorage.getItem('writingNo7'))-1;
var writingNo8=parseInt(localStorage.getItem('writingNo8'))-1;
var writingNo9=parseInt(localStorage.getItem('writingNo9'))-1;
var writingNo10=parseInt(localStorage.getItem('writingNo10'))-1;

var writingSoalKDDefaultId_1='writingSoalKD'+noKD+'_1';

var writingContent1=parseItemArray(writingSoalKDDefaultId_1,writingNo1);
var writingContent2=parseItemArray(writingSoalKDDefaultId_1,writingNo2);
var writingContent3=parseItemArray(writingSoalKDDefaultId_1,writingNo3);
var writingContent4=parseItemArray(writingSoalKDDefaultId_1,writingNo4);
var writingContent5=parseItemArray(writingSoalKDDefaultId_1,writingNo5);
var writingContent6=parseItemArray(writingSoalKDDefaultId_1,writingNo6);
var writingContent7=parseItemArray(writingSoalKDDefaultId_1,writingNo7);
var writingContent8=parseItemArray(writingSoalKDDefaultId_1,writingNo8);
var writingContent9=parseItemArray(writingSoalKDDefaultId_1,writingNo9);
var writingContent10=parseItemArray(writingSoalKDDefaultId_1,writingNo10);

localStorage.setItem(writingItem1,writingContent1);
localStorage.setItem(writingItem2,writingContent2);
localStorage.setItem(writingItem3,writingContent3);
localStorage.setItem(writingItem4,writingContent4);
localStorage.setItem(writingItem5,writingContent5);
localStorage.setItem(writingItem6,writingContent6);
localStorage.setItem(writingItem7,writingContent7);
localStorage.setItem(writingItem8,writingContent8);
localStorage.setItem(writingItem9,writingContent9);
localStorage.setItem(writingItem10,writingContent10);
}
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';

var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	

var writingSoal;
var noSoal=localStorage.getItem('writingNoDefault');
if(parseInt(noSoal)==1){writingSoal=writingItem1;}
if(parseInt(noSoal)==2){writingSoal=writingItem2;}
if(parseInt(noSoal)==3){writingSoal=writingItem3;}
if(parseInt(noSoal)==4){writingSoal=writingItem4;}
if(parseInt(noSoal)==5){writingSoal=writingItem5;}
if(parseInt(noSoal)==6){writingSoal=writingItem6;}
if(parseInt(noSoal)==7){writingSoal=writingItem7;}
if(parseInt(noSoal)==8){writingSoal=writingItem8;}
if(parseInt(noSoal)==9){writingSoal=writingItem9;}
if(parseInt(noSoal)==10){writingSoal=writingItem10;}

//var toWrite= ;				
document.getElementById(writingNoSoalId).innerHTML= noSoal;
document.getElementById(writingTopicId).innerHTML= writingTopic;
document.getElementById(writingInstructionAId).innerHTML= writingInstructionA;
document.getElementById(writingInstructionBId).innerHTML= writingInstructionB;
document.getElementById('hfData_').innerHTML= "<input type='hidden' id='hfData' value='"+writingSoal+"'></input>";
}


function writeWritingOnline(writingNoSoal,writingNoSoalId,writingTopic,writingTopicId,writingInstructionA,writingInstructionAId,writingInstructionB,writingInstructionBId,noKD)
{
var writingInstructionA="Drag the words onto the yellow bar in the right order!";
var writingInstructionB="Rearrange the sentence into "+writingTopic+"!";
var writingNoDefault=localStorage.getItem('writingNoDefault');
var writingTopicDefault=writingTopic;
localStorage.setItem('writingTopicDefault',writingTopicDefault);
if(parseInt(writingNoDefault)==1){
storeItem('writingNo1',getRndInteger(1,2).toString());
storeItem('writingNo2',getRndInteger(3,4).toString());
storeItem('writingNo3',getRndInteger(5,6).toString());
storeItem('writingNo4',getRndInteger(7,8).toString());
storeItem('writingNo5',getRndInteger(9,10).toString());
storeItem('writingNo6',getRndInteger(11,12).toString());
storeItem('writingNo7',getRndInteger(13,14).toString());
storeItem('writingNo8',getRndInteger(15,16).toString());
storeItem('writingNo9',getRndInteger(17,18).toString());
storeItem('writingNo10',getRndInteger(19,20).toString());
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo1'),noKD,writingItemId1);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo2'),noKD,writingItemId2);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo3'),noKD,writingItemId3);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo4'),noKD,writingItemId4);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo5'),noKD,writingItemId5);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo6'),noKD,writingItemId6);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo7'),noKD,writingItemId7);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo8'),noKD,writingItemId8);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo9'),noKD,writingItemId9);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo10'),noKD,writingItemId10);
}
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';

var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	

var writingSoal;
if(parseInt(noSoal)==1){writingSoal=writingItem1;}
if(parseInt(noSoal)==2){writingSoal=writingItem2;}
if(parseInt(noSoal)==3){writingSoal=writingItem3;}
if(parseInt(noSoal)==4){writingSoal=writingItem4;}
if(parseInt(noSoal)==5){writingSoal=writingItem5;}
if(parseInt(noSoal)==6){writingSoal=writingItem6;}
if(parseInt(noSoal)==7){writingSoal=writingItem7;}
if(parseInt(noSoal)==8){writingSoal=writingItem8;}
if(parseInt(noSoal)==9){writingSoal=writingItem9;}
if(parseInt(noSoal)==10){writingSoal=writingItem10;}

//var toWrite= ;				
document.getElementById(writingNoSoalId).innerHTML= noSoal;
document.getElementById(writingTopicId).innerHTML= writingTopic;
document.getElementById(writingInstructionAId).innerHTML= writingInstructionA;
document.getElementById(writingInstructionBId).innerHTML= writingInstructionB;
document.getElementById('hfData_').innerHTML= "<input type='hidden' id='hfData' value='"+writingSoal+"'></input>";
}

function writeWritingA(writingTitle,elShown,noKD,noSoal){
var writingInstructionA="Drag the words onto the yellow bar in the right order!";
var writingInstructionB="Rearrange the sentence into "+writingTitle+"!";
var writingNoDefault=localStorage.getItem('writingNoDefault');
var writingTitleDefault=writingTitle;
localStorage.setItem('writingTitleDefault',writingTitleDefault);
if(parseInt(writingNoDefault)==1){
storeItem('writingNo1',getRndInteger(1,2).toString());
storeItem('writingNo2',getRndInteger(3,4).toString());
storeItem('writingNo3',getRndInteger(5,6).toString());
storeItem('writingNo4',getRndInteger(7,8).toString());
storeItem('writingNo5',getRndInteger(9,10).toString());
storeItem('writingNo6',getRndInteger(11,12).toString());
storeItem('writingNo7',getRndInteger(13,14).toString());
storeItem('writingNo8',getRndInteger(15,16).toString());
storeItem('writingNo9',getRndInteger(17,18).toString());
storeItem('writingNo10',getRndInteger(19,20).toString());
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo1'),noKD,writingItemId1);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo2'),noKD,writingItemId2);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo3'),noKD,writingItemId3);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo4'),noKD,writingItemId4);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo5'),noKD,writingItemId5);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo6'),noKD,writingItemId6);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo7'),noKD,writingItemId7);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo8'),noKD,writingItemId8);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo9'),noKD,writingItemId9);
storeOneItem('https://docs.google.com/spreadsheets/d/1lN8x2EDR5otJYFWB_UDS0IodZQBuAdk1thOuksZly_Q/edit?usp=sharing','writing','getOneItem',retrieveItem('writingNo10'),noKD,writingItemId10);
}
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';

var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	

var writingSoal;
/*
if(parseInt(writingNoDefault)==1){writingSoal=writingItem1;}
if(parseInt(writingNoDefault)==2){writingSoal=writingItem2;}
if(parseInt(writingNoDefault)==3){writingSoal=writingItem3;}
if(parseInt(writingNoDefault)==4){writingSoal=writingItem4;}
if(parseInt(writingNoDefault)==5){writingSoal=writingItem5;}
if(parseInt(writingNoDefault)==6){writingSoal=writingItem6;}
if(parseInt(writingNoDefault)==7){writingSoal=writingItem7;}
if(parseInt(writingNoDefault)==8){writingSoal=writingItem8;}
if(parseInt(writingNoDefault)==9){writingSoal=writingItem9;}
if(parseInt(writingNoDefault)==10){writingSoal=writingItem10;}
*/
if(parseInt(noSoal)==1){writingSoal=writingItem1;}
if(parseInt(noSoal)==2){writingSoal=writingItem2;}
if(parseInt(noSoal)==3){writingSoal=writingItem3;}
if(parseInt(noSoal)==4){writingSoal=writingItem4;}
if(parseInt(noSoal)==5){writingSoal=writingItem5;}
if(parseInt(noSoal)==6){writingSoal=writingItem6;}
if(parseInt(noSoal)==7){writingSoal=writingItem7;}
if(parseInt(noSoal)==8){writingSoal=writingItem8;}
if(parseInt(noSoal)==9){writingSoal=writingItem9;}
if(parseInt(noSoal)==10){writingSoal=writingItem10;}

var toWriteA= "<p>Soal:</p>"+					
"					  <p id=''><h2>"+writingNoDefault+"</h2></p>"+
"                      <main id='ec-main'>"+
"                        <h2 id=''>"+writingTitleDefault+"</h2>"+
"                        <p>Instruction:</p>"+
"                      	<p id=''>"+writingInstructionA+"</p>"+
"                        <p id=''>"+writingInstructionB+"</p>"+
"                        <input type='hidden' id='hfData' value='"+writingSoal+"'></input>"+
"                        <input type='hidden' id='dont_change_case' value='2'></input>"+
"                         <div id='jumbleWords' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div id='jumbleStarter' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div style='clear:both;'></div>"+
"                         <div class='w3-center'><div class='w3-bar'>"+
"                           <button class='w3-bar-item w3-green' id='btnCheckScore' value='Check'/>Check</button>"+
"                           <button class='w3-bar-item w3-blue' id='btnShowTip' value='Hint'/>Hint</button>"+
"                           <button class='w3-bar-item w3-green' id='btnReset' value='Reset'/>Reset</button>"+
"                       	</div></div>"+
"                         <div id='middle-alert-wrapper'>"+
"                           <div id='middle-alert-contents'>"+
"                             <h4 id='congrats'>Congratulations!</h4>"+
"                             <h4 id='oops'>Oops</h4>"+
"                             <h4 id='tip'>Hint</h4>"+
"                             <div id='the_msg'></div>"+
"                             <br>"+
"                             <button id='closeModal'>Close</button>"+
"                           </div>"+
"                         </div>"+
"                       </main>";

document.getElementById(elShown).innerHTML= toWriteA;
}

function writeWritingB()
{
var noKD=localStorage.getItem('writingKDDefault');
//tentukan judul
var writingTitleDefault=localStorage.getItem('writingTitleDefault');
var writingInstructionA="Drag the words onto the yellow bar in the right order!";
var writingInstructionB="Rearrange the sentence into "+writingTitleDefault+"!";
writingNoDefault=localStorage.getItem('writingNoDefault');

var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';
	
var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	

var writingSoal;
if(parseInt(writingNoDefault)==1){writingSoal=writingItem1;}
if(parseInt(writingNoDefault)==2){writingSoal=writingItem2;}
if(parseInt(writingNoDefault)==3){writingSoal=writingItem3;}
if(parseInt(writingNoDefault)==4){writingSoal=writingItem4;}
if(parseInt(writingNoDefault)==5){writingSoal=writingItem5;}
if(parseInt(writingNoDefault)==6){writingSoal=writingItem6;}
if(parseInt(writingNoDefault)==7){writingSoal=writingItem7;}
if(parseInt(writingNoDefault)==8){writingSoal=writingItem8;}
if(parseInt(writingNoDefault)==9){writingSoal=writingItem9;}
if(parseInt(writingNoDefault)==10){writingSoal=writingItem10;}

var toWriteB= "<p>Soal:</p>"+					
"					  <p id=''><h2>"+writingNoDefault+"</h2></p>"+
"                      <main id='ec-main'>"+
"                        <h2 id=''>"+writingTitleDefault+"</h2>"+
"                        <p>Instruction:</p>"+
"                      	<p id=''>"+writingInstructionA+"</p>"+
"                        <p id=''>"+writingInstructionB+"</p>"+
"                        <input type='hidden' id='hfData' value='"+writingSoal+"'></input>"+
"                        <input type='hidden' id='dont_change_case' value='2'></input>"+
"                         <div id='jumbleWords' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div id='jumbleStarter' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div style='clear:both;'></div>"+
"                         <div class='w3-center'><div class='w3-bar'>"+
"                           <button class='w3-bar-item w3-green' id='btnCheckScore' value='Check'/>Check</button>"+
"                           <button class='w3-bar-item w3-blue' id='btnShowTip' value='Hint'/>Hint</button>"+
"                           <button class='w3-bar-item w3-green' id='btnReset' value='Reset'/>Reset</button>"+
"                       	</div></div>"+
"                         <div id='middle-alert-wrapper'>"+
"                           <div id='middle-alert-contents'>"+
"                             <h4 id='congrats'>Congratulations!</h4>"+
"                             <h4 id='oops'>Oops</h4>"+
"                             <h4 id='tip'>Hint</h4>"+
"                             <div id='the_msg'></div>"+
"                             <br>"+
"                             <button id='closeModal'>Close</button>"+
"                           </div>"+
"                         </div>"+
"                       </main>";
var elShownIdB='writingDiv'+localStorage.getItem('writingNoDefault');
document.getElementById(elShownIdB).innerHTML= toWriteB;
}	

function writeWritingC()
{
var noKD=localStorage.getItem('writingKDDefault');
var writingTitleDefault=localStorage.getItem('writingTitleDefault');
	
var writingInstructionA="Drag the words onto the yellow bar in the right order!";
var writingInstructionB="Rearrange the sentence into "+writingTitleDefault+"!";
writingNoDefault=localStorage.getItem('writingNoDefault');
	
var writingItemId1='writingItemKD'+noKD+'_'+'1';
var writingItemId2='writingItemKD'+noKD+'_'+'2';
var writingItemId3='writingItemKD'+noKD+'_'+'3';
var writingItemId4='writingItemKD'+noKD+'_'+'4';
var writingItemId5='writingItemKD'+noKD+'_'+'5';
var writingItemId6='writingItemKD'+noKD+'_'+'6';
var writingItemId7='writingItemKD'+noKD+'_'+'7';
var writingItemId8='writingItemKD'+noKD+'_'+'8';
var writingItemId9='writingItemKD'+noKD+'_'+'9';
var writingItemId10='writingItemKD'+noKD+'_'+'10';	
	
var writingItem1=retrieveItem(writingItemId1);	
var writingItem2=retrieveItem(writingItemId2);	
var writingItem3=retrieveItem(writingItemId3);	
var writingItem4=retrieveItem(writingItemId4);	
var writingItem5=retrieveItem(writingItemId5);	
var writingItem6=retrieveItem(writingItemId6);	
var writingItem7=retrieveItem(writingItemId7);	
var writingItem8=retrieveItem(writingItemId8);	
var writingItem9=retrieveItem(writingItemId9);	
var writingItem10=retrieveItem(writingItemId10);	

var writingSoal;
if(parseInt(writingNoDefault)==1){writingSoal=writingItem1;}
if(parseInt(writingNoDefault)==2){writingSoal=writingItem2;}
if(parseInt(writingNoDefault)==3){writingSoal=writingItem3;}
if(parseInt(writingNoDefault)==4){writingSoal=writingItem4;}
if(parseInt(writingNoDefault)==5){writingSoal=writingItem5;}
if(parseInt(writingNoDefault)==6){writingSoal=writingItem6;}
if(parseInt(writingNoDefault)==7){writingSoal=writingItem7;}
if(parseInt(writingNoDefault)==8){writingSoal=writingItem8;}
if(parseInt(writingNoDefault)==9){writingSoal=writingItem9;}
if(parseInt(writingNoDefault)==10){writingSoal=writingItem10;}

var toWrite= "<p>Soal:</p>"+					
"					  <p id=''><h2>"+writingNoDefault+"</h2></p>"+
"                      <main id='ec-main'>"+
"                        <h2 id=''>"+writingTitleDefault+"</h2>"+
"                        <p>Instruction:</p>"+
"                      	<p id=''>"+writingInstructionA+"</p>"+
"                        <p id=''>"+writingInstructionB+"</p>"+
"                        <input type='hidden' id='hfData' value='"+writingSoal+"'></input>"+
"                        <input type='hidden' id='dont_change_case' value='2'></input>"+
"                         <div id='jumbleWords' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div id='jumbleStarter' class='w3-ui-sortable ui-sortable'></div>"+
"                         <div style='clear:both;'></div>"+
"                         <div class='w3-center'><div class='w3-bar'>"+
"                           <button class='w3-bar-item w3-green' id='btnCheckScore' value='Check'/>Check</button>"+
"                           <button class='w3-bar-item w3-blue' id='btnShowTip' value='Hint'/>Hint</button>"+
"                           <button class='w3-bar-item w3-green' id='btnReset' value='Reset'/>Reset</button>"+
"                       	</div></div>"+
"                         <div id='middle-alert-wrapper'>"+
"                           <div id='middle-alert-contents'>"+
"                             <h4 id='congrats'>Congratulations!</h4>"+
"                             <h4 id='oops'>Oops</h4>"+
"                             <h4 id='tip'>Hint</h4>"+
"                             <div id='the_msg'></div>"+
"                             <br>"+
"                             <button id='closeModal'>Close</button>"+
"                           </div>"+
"                         </div>"+
"                       </main>";
var elShownId='writingDiv'+localStorage.getItem('writingNoDefault');
document.getElementById(elShownId).innerHTML= toWrite;
}	
function writingReloadKD1(reload){window.location.hash = '#writing_kd1';window.location.reload(true);}
function writingReload1(reload){window.location.hash = '#writingDiv1';window.location.reload(true);}
function writingReload2(reload){window.location.hash = '#writingDiv2';window.location.reload(true);window.location='#writingDiv2';}
function writingReload3(reload){window.location.hash = '#writingDiv3';window.location.reload(true);}
function writingReload4(reload){window.location.hash = '#writingDiv4';window.location.reload(true);}
function writingReload5(reload){window.location.hash = '#writingDiv5';window.location.reload(true);}
function writingReload6(reload){window.location.hash = '#writingDiv6';window.location.reload(true);}
function writingReload7(reload){window.location.hash = '#writingDiv7';window.location.reload(true);}
function writingReload8(reload){window.location.hash = '#writingDiv8';window.location.reload(true);}
function writingReload9(reload){window.location.hash = '#writingDiv9';window.location.reload(true);}
function writingReload10(reload){window.location.hash = '#writingDiv10';window.location.reload(true);}

function writingSembunyikanSemua(){
  w3.hide('#writingDiv1');	
  w3.hide('#writingDiv2');	
  w3.hide('#writingDiv3');	
  w3.hide('#writingDiv4');	
  w3.hide('#writingDiv5');	
  w3.hide('#writingDiv6');	
  w3.hide('#writingDiv7');	
  w3.hide('#writingDiv8');	
  w3.hide('#writingDiv9');	
  w3.hide('#writingDiv10');	
}
function writingPerlihatkan(id) {
  //writingSembunyikanSemua();
  w3.show(id);
}