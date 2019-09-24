function readingSembunyikanSemua(){
    w3.hide('#readingDiv1');	
	w3.hide('#readingDiv2');	
    w3.hide('#readingDiv3');	
    w3.hide('#readingDiv4');	
    w3.hide('#readingDiv5');	
    w3.hide('#readingDiv6');	
    w3.hide('#readingDiv7');	
    w3.hide('#readingDiv8');	
    w3.hide('#readingDiv9');	
    w3.hide('#readingDiv10');	
    }
function readingPerlihatkan(id) {
    readingSembunyikanSemua();
     w3.show(id);
}	
function readingNext(){
	var noKD=localStorage.getItem('readingKDDefault');
	var readingNoDefault=localStorage.getItem('readingNoDefault');
	if(parseInt(readingNoDefault)>9){readingNoDefault=10;var next=10;}
	else { next=parseInt(readingNoDefault)+1;}
	var nextId='#readingDiv'+next;
	localStorage.setItem('readingNoDefault',next);
	readingPerlihatkan(nextId);	
	}
function readingBack(){
	var noKD=localStorage.getItem('readingKDDefault');
	var readingNoDefault=localStorage.getItem('readingNoDefault');
	if(parseInt(readingNoDefault)<2){readingNoDefault=1;var back=1;}
	else { back=parseInt(readingNoDefault)-1; }
	var backId='#readingDiv'+back;	
	localStorage.setItem('readingNoDefault',back);	
	readingPerlihatkan(backId);	
	}
function modalkan(id){
	document.getElementById(id).style.display='block';	
} 
function perlihatkan(id){
	document.getElementById(id).style.display='block';	
} 
function sembunyikan(id){
	document.getElementById(id).style.display='none';	
}   
