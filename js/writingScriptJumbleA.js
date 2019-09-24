$(document).ready( function() {

  var the_phrase = shuffle($('#hfDataA').val());
  var orig       = $('#hfDataA').val().replace(/([\,\.])/g," $1").split(" "); // save it, so we have access to it when doing tips

  //
  $.each(the_phrase, function(i,x) {
    var x_nice = x.replace(/\-/g," ").replace(/:::/g,"-");
    if (hasUppercase(x)) {
      $("#jumbleStarterA").append("<label class='jumbled_word' data-upper=\"yes\" data-real-value="+x+">"+x_nice+"</label>");
    } else {
      $("#jumbleStarterA").append("<label class='jumbled_word' data-real-value="+x+">"+x_nice+"</label>");
    }
  });
  $("#jumbleStarterA").append("<div style=\"clear:both\"></div>");

  var div_height = $('#jumbleStarterA').height();

  //console.log("height: "+ $('#jumbleStarterA').height());
  $('#jumbleWordsA,#jumbleStarterA').height( div_height + "px" ); // set the heights

  //alert("Set height to " +div_height );

  $("#jumbleWordsA").sortable({
        connectWith: '#jumbleStarterA',
        items: '.jumbled_word',
        helper: 'clone',
        appendTo: 'body', helper: 'clone', zIndex: 300,
        stop: function( event, ui ) {
          $('#jumbleWordsA label').each(function(i) {
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
          $('#jumbleWordsA label').each(function(i) {
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

  $("#jumbleStarterA").sortable({
        connectWith: '#jumbleWordsA',
        items: '.jumbled_word',
        appendTo: 'body', helper: 'clone', zIndex: 300
    });

//   $("#jumbleWordsA").change( function() {
// alert("something changed in here");
//   });

//    ucword

    $('#btnCheckScore').click(function(event) {

        var original_str = $('#hfDataA').val().replace(/([\,\.])/g," $1");
        var original_str_poss2 = ''
        var original_str_poss3 = '';
        var original_str_poss4 = '';
        var original_str_poss5 = '';
        var original_str_poss6 = '';

        if ($('#hfDataA2').length) {
          original_str_poss2 = $('#hfDataA2').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA3').length) {
          original_str_poss3 = $('#hfDataA3').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA4').length) {
          original_str_poss4 = $('#hfDataA4').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA5').length) {
          original_str_poss5 = $('#hfDataA5').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA6').length) {
          original_str_poss6 = $('#hfDataA6').val().replace(/([\,\.])/g," $1");
        }

        // get the values they have put in already
        var the_string = new Array();
        $('#jumbleWordsA .jumbled_word').each(function(index, el) {
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
            markCompletedA();
        } else {
            if (original_str_poss2.length) {
              if (the_string.join(" ") == original_str_poss2) {
                  markCompletedA();
              } else {

                if (original_str_poss3.length) {
                  if (the_string.join(" ") == original_str_poss3) {
                      markCompletedA();
                  } else {

                    if (original_str_poss4.length) {

                      if (the_string.join(" ") == original_str_poss4) {
                          markCompletedA();
                      } else {

                          if (original_str_poss5.length) {
                            //console.log(the_string.join(" ") == original_str_poss5);
                            if (the_string.join(" ") == original_str_poss5) {
                                markCompletedA();
                            } else {

                                if (original_str_poss6.length) {
                                  if (the_string.join(" ") == original_str_poss6) {
                                      markCompletedA();
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
        var original_str = $('#hfDataA').val().replace(/([\,\.])/g," $1");
        var original_str_poss2 = ''
        var original_str_poss3 = '';
        var original_str_poss4 = '';
        var original_str_poss5 = '';
        var original_str_poss6 = '';
        if ($('#hfDataA2').length) {
          original_str_poss2 = $('#hfDataA2').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA3').length) {
          original_str_poss3 = $('#hfDataA3').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA4').length) {
          original_str_poss4 = $('#hfDataA4').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA5').length) {
          original_str_poss5 = $('#hfDataA5').val().replace(/([\,\.])/g," $1");
        }
        if ($('#hfDataA6').length) {
          original_str_poss6 = $('#hfDataA6').val().replace(/([\,\.])/g," $1");
        }

        var the_string = new Array();
        $('#jumbleWordsA .jumbled_word').each(function(index, el) {
            the_string.push($(this).data("real-value"));
            //console.log();
        });

        var current_str = the_string.join(" ");

        var re = new RegExp("^"+current_str,"g");

        // console.log(re.test(original_str));
        // console.log(re.test(original_str_poss2));
        // console.log(re.test(original_str_poss3));

        if (the_string.join(" ") == original_str) {
            markCompletedA();
        } else {
            if (original_str_poss2.length) {
              if (the_string.join(" ") == original_str_poss2) {
                  markCompletedA();
                  return false;
              } else {

                if (original_str_poss3.length) {
                  if (the_string.join(" ") == original_str_poss3) {
                      markCompletedA();
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
          orig      = $('#hfDataA2').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss3)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss3;
          orig      = $('#hfDataA3').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss4)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss4;
          orig      = $('#hfDataA4').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss5)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss5;
          orig      = $('#hfDataA5').val().replace(/([\,\.])/g," $1").split(" ");
        } else if (re.test(original_str_poss6)) {
          // looks like they started with option 3, so lets go with that
          string_to_check = original_str_poss6;
          orig      = $('#hfDataA6').val().replace(/([\,\.])/g," $1").split(" ");
        }

       var correct = new Array();
       var next_word = '';
       if ($('#jumbleWordsA .jumbled_word').length) {
        // $('#jumbleWordsA .jumbled_word').each(function(index, el) {
        $('.jumbled_word').each(function(index, el) {

              //console.log("TEST: " + orig[index] +" == "+ $(this).data("real-value"));

              if (orig[index] == $(this).data("real-value") && $(this).parent().attr('id') != "jumbleStarterA") {
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
function markCompletedA() {
    $('#jumbleWordsA label').each(function(i) {
      $(this).addClass('completed');
    });

    $('#oops,#tip').hide();
    $('#middle-alert-wrapper,#congrats').hide();

    if ($('#hfDataA2').length) {
      //var other_answers = get_correct_answers();
      $('#the_msg').html("Looks like you've got it already :)<br><br>(Other answers are also possible.)");
	  var noKD=localStorage.getItem('writingKDDefault');
	  var noSoal=localStorage.getItem('writingNoDefault');	  
      var writingScoreDefaultId='writingScoreKD'+noKD+'_'+noSoal;
      localStorage.setItem(writingScoreDefaultId,10);
	  playAudio('score');
	  writingWriteBadge();
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

function writingWriteBadge(){
	var writingBadgeWrite="<img src='image/badge.png' width='50'></img>";
    document.getElementById(writingBadgeId).innerHTML=writingBadgeWrite;
	document.getElementById(writingBadgeId+"_").innerHTML=writingBadgeWrite;
}

function writingCekCup(){
	  if(parseInt(noSoal)==10)
	  {
	  var writingScore1=parseInt(localStorage.getItem(writingScore1));
	  var writingScore2=parseInt(localStorage.getItem(writingScore2));
	  var writingScore3=parseInt(localStorage.getItem(writingScore3));
	  var writingScore4=parseInt(localStorage.getItem(writingScore4));
	  var writingScore5=parseInt(localStorage.getItem(writingScore5));
	  var writingScore6=parseInt(localStorage.getItem(writingScore6));
	  var writingScore7=parseInt(localStorage.getItem(writingScore7));
	  var writingScore8=parseInt(localStorage.getItem(writingScore8));
      var writingScore9=parseInt(localStorage.getItem(writingScore9));
	  var writingScore10=parseInt(localStorage.getItem(writingScore10));

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
	    if(localStorage.getItem(writingScoreTotalKDDefault)===null || localStorage.getItem(writingScoreTotalKDDefault)===undefined)
		{
		localStorage.setItem(writingScoreTotalKDDefault,writingScoreTotalKD);
		}	
		//jika sudah nilai total KD writing > KKM
		if(parseInt(writingScoreTotalKD)>79)
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
		  modalkan('writingModalCup');
		  playAudio('yeah');
		  }
		  
}
}
function get_correct_answers() {

  var correct = new Array();;
  correct.push($('#hfDataA').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  if ($('#hfDataA2').length) {
    correct.push($('#hfDataA2').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfDataA3').length) {
    correct.push($('#hfDataA3').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfDataA4').length) {
    correct.push($('#hfDataA4').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfDataA5').length) {
    correct.push($('#hfDataA5').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
  }
  if ($('#hfDataA6').length) {
    correct.push($('#hfDataA6').val().replace(/([\,\.])/g," $1").replace(/-/g," ").replace(/:::/g,"-"));
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

