$(document).ready(resetSlider);

function resetSlider() {
  var slider = document.getElementById('downtimeRange');
  if (slider != null) {
    sessionStorage.setItem("downtimeVal", 20);
    sessionStorage.setItem("downtimeValSecs", "00");
  }
}
//resets productive time to 0
// Used when user starts or ends a work session
function resetPTimer() {
  sessionStorage.setItem("pTimeVal", 0);
  sessionStorage.setItem("pTimeValSecs", 0);
}

// links downtime slider to downtime timer
function updateTimeRange(val) {
  document.getElementById("downtime").innerHTML = val;
  sessionStorage.setItem("downtimeVal", val);
  sessionStorage.setItem("downtimeValSecs", "00");
}

// alert time slider
function updateAlertTime(val) {
  document.getElementById("alerttime").innerHTML = val;
  sessionStorage.setItem("alerttimeVal", val);
  sessionStorage.setItem("alerttimeValSecs", "00");
}


    //---------------------------- HELP POP-UPS ----------------------------//
    function helpStart() {
      alert("Every time you go off-task, SoundTrack will alert you at decreasing" +
        " intervals to help you stay productive and focused. To get started, simply" +
        " choose your favorite soundscape and customize the alert for your current task!");
    }

// enable tooltips later for index
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Scrolling for Soundscape
$(function(){
  var isDown = false, currentX = 0, currentY = 0;

  $('#scroll1').mousemove(function(event){
    if(isDown === true){
     //$('#scroll1').scrollTop($('#scroll1').scrollTop() + (currentY - event.pageY)); 
     $('#scroll1').scrollLeft($('#scroll1').scrollLeft() + (currentX - event.pageX));
     currentY = event.pageY;
     currentX = event.pageX;
   }
 });
  
  $('#scroll1').mousedown(function(event){
    isDown = true;
    currentY = event.pageY;
    currentX = event.pageX;
  });
  
  $('#scroll1').mouseup(function(){
    isDown = false;
  });
})

//Scrolling for Alert sound
$(function(){
  var isDown = false, currentX = 0, currentY = 0;
  $('#scroll2').mousemove(function(event){
    if(isDown === true){
     //$('#scroll2').scrollTop($('#scroll2').scrollTop() + (currentY - event.pageY)); 
     $('#scroll2').scrollLeft($('#scroll2').scrollLeft() + (currentX - event.pageX));
     currentY = event.pageY;
     currentX = event.pageX;
   }
 });
  
  $('#scroll2').mousedown(function(event){
    isDown = true;
    currentY = event.pageY;
    currentX = event.pageX;
  });
  
  $('#scroll2').mouseup(function(){
    isDown = false;
  });
})

// show if sound buttons are selected, deselects non-active buttons
$('.scape').click( function() {
  $('.scape').removeClass( "active" );
  $( this ).addClass( "active" );
  if (($('.scape').hasClass('active')) && ($('.alarm').hasClass('active'))) {
    $('.float').removeClass('disabled');
  }
});

$('.alarm').click( function() {
  $('.alarm').removeClass( "active" );
  $( this ).addClass( "active" );
  if (($('.scape').hasClass('active')) && ($('.alarm').hasClass('active'))) {
    $('.float').removeClass('disabled');
  }
});

