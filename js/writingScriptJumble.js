$(document).ready( function() {

  var the_phrase = shuffle($('#hfData').val());
  var orig       = $('#hfData').val().replace(/([\,\.])/g," $1").split(" "); // save it, so we have access to it when doing tips

  //
  $.each(the_phrase, function(i,x) {
    var x_nice = x.replace(/\-/g," ").replace(/:::/g,"-");
    if (hasUppercase(x)) {
      $("#jumbleStarter").append("<label class='jumbled_word' data-upper=\"yes\" data-real-value="+x+">"+x_nice+"</label>");
    } else {
      $("#jumbleStarter").append("<label class='jumbled_word' data-real-value="+x+">"+x_nice+"</label>");
    }
  });
  $("#jumbleStarter").append("<div style=\"clear:both\"></div>");

  var div_height = $('#jumbleStarter').height();

  //console.log("height: "+ $('#jumbleStarter').height());
  $('#jumbleWords,#jumbleStarter').height( div_height + "px" ); // set the heights

  //alert("Set height to " +div_height );

  $("#jumbleWords").sortable({
        connectWith: '#jumbleStarter',
        items: '.jumbled_word',
        helper: 'clone',
        appendTo: 'body', helper: 'clone', zIndex: 300,
        stop: function( event, ui ) {
          $('#jumbleWords label').each(function(i) {
            if (i == 0 && $(this).data("upper") == undefined) {
                // if its the first word, and DOESNT have an existing uppercase set, lets uppercase the first word
                $(this).html( ucword($(this).html()) )
            } else {
                // only lowercase if we have not specifically told the script to LEAVE the case alone!
                if ($(this).data("upper") == undefined) {
                  $(this).html( lcword($(this).html()) )
                }
            }
          });
        },
        receive: function( event, ui ) {
          $('#jumbleWords label').each(function(i) {
            if (i == 0 && $(this).data("upper") == undefined) {
                // if its the first word, and DOESNT have an existing uppercase set, lets uppercase the first word
                $(this).html( ucword($(this).html()) )
            } else {
                // only lowercase if we have not specifically told the script to LEAVE the case alone!
                if ($(this).data("upper") == undefined) {
                  $(this).html( lcword($(this).html()) )
                }
            }
            //console.log("FOO " + $(this).html());
          });
        }
    });

  $("#jumbleStarter").sortable({
        connectWith: '#jumbleWords',
        items: '.jumbled_word',
        appendTo: 'body', helper: 'clone', zIndex: 300
    });

//   $("#jumbleWords").change( function() {
// alert("something changed in here");
//   });

//    ucword

    $('#btnCheckScore').click(function(event) {

        var original_str = $('#hfData').val().replace(/([\,\.])/g," $1");
        var original_str_poss2 = ''
        var original_str_poss3 = '';
        var original_str_poss4 = '';
        var original_str_poss5 = '';
        var original_str_poss6 = '';

        if ($('#hfData2').length) {
          original_str_poss2 = $('#hfData2').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData3').length) {
          original_str_poss3 = $('#hfData3').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData4').length) {
          original_str_poss4 = $('#hfData4').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData5').length) {
          original_str_poss5 = $('#hfData5').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData6').length) {
          original_str_poss6 = $('#hfData6').val().replace(/([\,\.])/g," $1");
        }

        // get the values they have put in already
        var the_string = new Array();
        $('#jumbleWords .jumbled_word').each(function(index, el) {
            the_string.push($(this).data("real-value"));
        });

        //console.log(the_string.join(" ") + " == " + original_str);

// console.log(the_string.join(" ") + " == "+ original_str);
// console.log(the_string.join(" ") + " == "+ original_str_poss2);
// console.log(the_string.join(" ") + " == "+ original_str_poss3);
// console.log(the_string.join(" ") + " == "+ original_str_poss4);
// console.log(the_string.join(" ") + " == "+ original_str_poss5);
// console.log(the_string.join(" ") + " == "+ original_str_poss6);

        if (the_string.join(" ") == original_str) {
            markCompleted();
        } else {
            if (original_str_poss2.length) {
              if (the_string.join(" ") == original_str_poss2) {
                  markCompleted();
              } else {

                if (original_str_poss3.length) {
                  if (the_string.join(" ") == original_str_poss3) {
                      markCompleted();
                  } else {

                    if (original_str_poss4.length) {

                      if (the_string.join(" ") == original_str_poss4) {
                          markCompleted();
                      } else {

                          if (original_str_poss5.length) {
                            //console.log(the_string.join(" ") == original_str_poss5);
                            if (the_string.join(" ") == original_str_poss5) {
                                markCompleted();
                            } else {

                                if (original_str_poss6.length) {
                                  if (the_string.join(" ") == original_str_poss6) {
                                      markCompleted();
                                  } else {
                                      showNotRight();
                                  }
                                } else {
                                    showNotRight();
                                }

                            }
                          } else {
                                showNotRight();
                          }

                      }
                    } else {
                        showNotRight();
                    }


                  }
                } else {
                  showNotRight();
                }

              }
            } else {
                showNotRight();
            }

        }



    });



    $('#btnShowTip').click(function(event) {

        // first lets check if they have it worked out already
        var original_str = $('#hfData').val().replace(/([\,\.])/g," $1");
        var original_str_poss2 = ''
        var original_str_poss3 = '';
        var original_str_poss4 = '';
        var original_str_poss5 = '';
        var original_str_poss6 = '';
        if ($('#hfData2').length) {
          original_str_poss2 = $('#hfData2').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData3').length) {
          original_str_poss3 = $('#hfData3').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData4').length) {
          original_str_poss4 = $('#hfData4').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData5').length) {
          original_str_poss5 = $('#hfData5').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfData6').length) {
          original_str_poss6 = $('#hfData6').val().replace(/([\,\.])/g," $1");
        }

        var the_string = new Array();
        $('#jumbleWords .jumbled_word').each(function(index, el) {
            the_string.push($(this).data("real-value"));
            //console.log();
        });

        var current_str = the_string.join(" ");

        var re = new RegExp("^"+current_str,"g");

        // console.log(re.test(original_str));
        // console.log(re.test(original_str_poss2));
        // console.log(re.test(original_str_poss3));

        if (the_string.join(" ") == original_str) {
            markCompleted();
        } else {
            if (original_str_poss2.length) {
              if (the_string.join(" ") == original_str_poss2) {
                  markCompleted();
                  return false;
              } else {

                if (original_str_poss3.length) {
                  if (the_string.join(" ") == original_str_poss3) {
                      markCompleted();
                      return false;
                  }
                }

              }
            }
        }


        var string_to_check;
        if (re.test(original_str)) {
          // looks like they started with option 1, so lets go with that
          string_to_check = original_str
        } else if (re.test(original_str_poss2)) {
          // looks like they started with option 2, so lets go with that
          string_to_check = original_str_poss2;
          orig      = $('#hfData2').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss3)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss3;
          orig      = $('#hfData3').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss4)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss4;
          orig      = $('#hfData4').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss5)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss5;
          orig      = $('#hfData5').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss6)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss6;
          orig      = $('#hfData6').val().replace(/([\,\.])/g," $1").split(" ");
        }

       var correct = new Array();
       var next_word = '';
       if ($('#jumbleWords .jumbled_word').length) {
        // $('#jumbleWords .jumbled_word').each(function(index, el) {
        $('.jumbled_word').each(function(index, el) {

              //console.log("TEST: " + orig[index] +" == "+ $(this).data("real-value"));

              if (orig[index] == $(this).data("real-value") && $(this).parent().attr('id') != "jumbleStarter") {
                correct.push($(this).html());
              } else {
                //console.log("Word is: " + orig[index] + "("+index+")");
                //console.log(orig);

                next_word = orig[index];
                next_word = next_word.replace(/\-/g," ").replace(/:::/g,"-");

                if (correct.length > 0) {
                  $('#oops,#congrats').hide();
                  $('#middle-alert-wrapper,#tip').show();
                  $('#the_msg').html("So far you have '" + correct.join(" ") + "' correct. The next word is: <b>" + next_word + "</b>");
                } else {
                  $('#oops,#congrats').hide();
                  $('#middle-alert-wrapper,#tip').show();
                  $('#the_msg').html("Oops, you don't have anything right yet. The first word is: <b>" + next_word + "</b>");
                }
                return false;
              }

          });
        } else {
            $('#oops,#congrats').hide();
            $('#middle-alert-wrapper,#tip').show();
            next_word = orig[0];
            $('#the_msg').html("Oops! You didn't read the instructions. Drag the words up to the yellow bar and click <b>Check</b>");
        }

    });

   $('#closeModal').click(function() {
      $('#middle-alert-wrapper').hide();
   });
   $('#btnReset').click(function() {
      location.reload();
   });


});

function shuffle(str) {

  var a = str.replace(/([\,\.])/g," $1").split(" ");
  var n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }

  return a;

}

function ucword(str){
    if ($('#dont_change_case').length) {
      return str; // dont do anything, as we are on a phrase
    } else {
      str = str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function(replace_latter) {
          return replace_latter.toUpperCase();
      });  //Can use also /\b[a-z]/g
      return str;  //First letter capital in each word
    }
}
function lcword(str){
    return str.toLowerCase();  //First letter capital in each word
}


function hasUppercase(str) {
    return (/[A-Z]/.test(str));
}
function markCompleted() {
    $('#jumbleWords label').each(function(i) {
      $(this).addClass('completed');
    });

    $('#oops,#tip').hide();
    $('#middle-alert-wrapper,#congrats').hide();

    if ($('#hfData').length) {
      //var other_answers = get_correct_answers();
      $('#the_msg').html("Looks like you've got it already :)<br><br>(Other answers are also possible.)");
	  var noKD=localStorage.getItem('writingKDDefault');
	  var noSoal=localStorage.getItem('writingNoDefault');	  
      var writingScoreDefaultId='writingScoreKD'+noKD+'_'+noSoal;
      localStorage.setItem(writingScoreDefaultId,10);
	  playAudio('score');
	  writingCekBadge_();
	  //jika no soal adalah no 10
      writingCekCup();
    } 
	else {
      $('#the_msg').html("Looks like you've got it already :)");
	  var noKD=localStorage.getItem('writingKDDefault');
	  var noSoal=localStorage.getItem('writingNoDefault');	  
      var writingScoreDefaultId='writingScoreKD'+noKD+'_'+noSoal;
      localStorage.setItem(writingScoreDefaultId,10);	  
	  playAudio('score');
    }
}

function writingStoreBadge(){
	var writingBadgeWrite="<img src='image/badge.png' width='50'></img>";
    document.getElementById(writingBadgeId).innerHTML=writingBadgeWrite;
	document.getElementById(writingBadgeId+"_").innerHTML=writingBadgeWrite;
}

function writingCekBadge_(){
var writingKDDefault=localStorage.getItem('writingKDDefault');
var writingBadgeKDDefault_1Id='writingBadgeKD'+writingKDDefault+'_1';
var writingBadgeKDDefault_2Id='writingBadgeKD'+writingKDDefault+'_2';
var writingBadgeKDDefault_3Id='writingBadgeKD'+writingKDDefault+'_3';
var writingBadgeKDDefault_4Id='writingBadgeKD'+writingKDDefault+'_4';
var writingBadgeKDDefault_5Id='writingBadgeKD'+writingKDDefault+'_5';
var writingBadgeKDDefault_6Id='writingBadgeKD'+writingKDDefault+'_6';
var writingBadgeKDDefault_7Id='writingBadgeKD'+writingKDDefault+'_7';
var writingBadgeKDDefault_8Id='writingBadgeKD'+writingKDDefault+'_8';
var writingBadgeKDDefault_9Id='writingBadgeKD'+writingKDDefault+'_9';
var writingBadgeKDDefault_10Id='writingBadgeKD'+writingKDDefault+'_10';	
	
if(parseInt(localStorage.getItem(writingScoreKDDefault_1Id))==10){ writingBadge_(writingBadgeKDDefault_1Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_2Id))==10){ writingBadge_(writingBadgeKDDefault_2Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_3Id))==10){ writingBadge_(writingBadgeKDDefault_3Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_4Id))==10){ writingBadge_(writingBadgeKDDefault_4Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_5Id))==10){ writingBadge_(writingBadgeKDDefault_5Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_6Id))==10){ writingBadge_(writingBadgeKDDefault_6Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_7Id))==10){ writingBadge_(writingBadgeKDDefault_7Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_8Id))==10){ writingBadge_(writingBadgeKDDefault_8Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_9Id))==10){ writingBadge_(writingBadgeKDDefault_9Id);};
if(parseInt(localStorage.getItem(writingScoreKDDefault_10Id))==10){ writingBadge_(writingBadgeKDDefault_10Id);};
}

function writingBadge_(writingBadgeId){
	var writingBadgeWrite="<img src='image/badge.png' width='50'></img>";
    document.getElementById(writingBadgeId).innerHTML=writingBadgeWrite;
	//document.getElementById(writingBadgeId+"_").innerHTML=writingBadgeWrite;
}

function writingCekCup(){
	  if(parseInt(noSoal)==10)
	  {
	  var writingScoreKDDefaultId1='writingScoreKD'+writingKDDefault+'_'+1;
	  var writingScoreKDDefaultId2='writingScoreKD'+writingKDDefault+'_'+2;
	  var writingScoreKDDefaultId3='writingScoreKD'+writingKDDefault+'_'+3;
	  var writingScoreKDDefaultId4='writingScoreKD'+writingKDDefault+'_'+4;
	  var writingScoreKDDefaultId5='writingScoreKD'+writingKDDefault+'_'+5;
	  var writingScoreKDDefaultId6='writingScoreKD'+writingKDDefault+'_'+6;
	  var writingScoreKDDefaultId7='writingScoreKD'+writingKDDefault+'_'+7;
	  var writingScoreKDDefaultId8='writingScoreKD'+writingKDDefault+'_'+8;
	  var writingScoreKDDefaultId9='writingScoreKD'+writingKDDefault+'_'+9;
	  var writingScoreKDDefaultId10='writingScoreKD'+writingKDDefault+'_'+10;

	  
      var writingScore1=parseInt(localStorage.getItem(writingScoreKDDefaultId1));	  
      var writingScore2=parseInt(localStorage.getItem(writingScoreKDDefaultId2));	  
      var writingScore3=parseInt(localStorage.getItem(writingScoreKDDefaultId3));	  
      var writingScore4=parseInt(localStorage.getItem(writingScoreKDDefaultId4));	  
      var writingScore5=parseInt(localStorage.getItem(writingScoreKDDefaultId5));	  
      var writingScore6=parseInt(localStorage.getItem(writingScoreKDDefaultId6));	  
      var writingScore7=parseInt(localStorage.getItem(writingScoreKDDefaultId7));	  
      var writingScore8=parseInt(localStorage.getItem(writingScoreKDDefaultId8));	  
      var writingScore9=parseInt(localStorage.getItem(writingScoreKDDefaultId9));	  
      var writingScore10=parseInt(localStorage.getItem(writingScoreKDDefaultId10));	  

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
		var inputNamaSheet="hasil_writing_peritem";
		var action="sendItem";
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore1,noSoal1);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore2,noSoal2);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore3,noSoal3);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore4,noSoal4);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore5,noSoal5);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore6,noSoal6);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore7,noSoal7);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore8,noSoal8);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore9,noSoal9);
		sendItem(inputUrlSpreadSheet,inputNamaSheet,action,usernameStored,writingScore10,noSoal10);
		//hitung total
		var writingScoreTotalKD=writingScore1+writingScore2+writingScore3+writingScore4+writingScore5+writingScore6+writingScore7+writingScore8+writingScore9+writingScore10;
	      //jika sudah ada nilai total KD writing
		//var writingKDNo=localStorage.getItem('writingKDDefault');  
		var writingScoreTotalKDDefault='writingScoreTotalKD'+noKD;
		//cek apakah eksis
	    if(localStorage.getItem(writingScoreTotalKDDefault)==null || localStorage.getItem(writingScoreTotalKDDefault)==undefined)
		{ localStorage.setItem(writingScoreTotalKDDefault,0); }
	    //if(parseInt(localStorage.getItem(writingScoreTotalKDDefault))==0)
		//{ 
	      localStorage.setItem(writingScoreTotalKDDefault,writingScoreTotalKD); 
		//}
		//jika sudah nilai total KD writing > KKM
		if(writingScoreTotalKD>79)
		  {   //simpan writingPass
          var writingScoreTotalKD=localStorage.getItem(writingScoreTotalKDDefault);          
		  var writingPassKDDefault='writingPassKD'+noKD;
		  localStorage.setItem(writingPassKDDefault,'passed');
		  //tulis cup
		  var writingCupKDId='writingCupKD'+noKD;
		  var writingCupKDId_='writingCupKD'+noKD+'_';		  
		  var writingCupWrite="<img src='image/cup.png' width='100'></img>";
		  document.getElementById(writingCupKDId).innerHTML=writingCupWrite;
		  document.getElementById(writingCupKDId_).innerHTML=writingCupWrite;
		  //tampilkan modal
		  writingModalkan('writingModalCup');
		  playAudio('yeah');
		  }
	  
}
}
function get_correct_answers() {

  var correct = new Array();;
  correct.push($('#hfData').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  if ($('#hfData2').length) {
    correct.push($('#hfData2').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfData3').length) {
    correct.push($('#hfData3').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfData4').length) {
    correct.push($('#hfData4').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfData5').length) {
    correct.push($('#hfData5').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfData6').length) {
    correct.push($('#hfData6').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }

  return "<i>" + correct.join("<br>") + "</i>";

}

function showNotRight() {
  $('#oops,#congrats').hide();
  $('#middle-alert-wrapper,#tip').show();
  $('#the_msg').html("Sorry, that's not quite right.<br><br>(You can click the <b>Hint</b> button for a clue)");
  var noKD=localStorage.getItem('writingKDDefault');
  var writingScoreDefaultId='writingScoreKD'+noKD+'_'+localStorage.getItem('writingNoDefault');
  localStorage.setItem(writingScoreDefaultId,0);	  
  playAudio('fail');
}

function playAudio(idAudio) { 
  var x = document.getElementById(idAudio); 
  x.play(); 
} 

