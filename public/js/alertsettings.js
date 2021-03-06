
// Set the alert volume slider if the value was stored previously
var alertVol = sessionStorage.getItem("alertVolume");
if(alertVol != null){
	document.getElementById("volume").innerHTML = alertVol*100;
	document.getElementById("alertVolume").value = alertVol*100;
}

// alert time slider
function updateAlertTime(val) {
  document.getElementById("alerttime").innerHTML = val;
  sessionStorage.setItem("alerttimeVal", val);
  sessionStorage.setItem("alerttimeValSecs", "00");
}

// alert volume slider
function updateAlertVolume(alertVolume) {
  sessionStorage.setItem("alertVolume", alertVolume/100.0);
}

    //---------------------------- HELP POP-UPS ----------------------------//
    function helpSettings() {
      alert("You can change your alert sound, how much break time you want to give " +
        "yourself, and the volume of the alerts. Be as productive " +
        "as you want!");
    }

// enable tooltips later for index
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
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

$('.alarm').click( function() {
  $('.alarm').removeClass( "active" );
  $( this ).addClass( "active" );
  if (($('.scape').hasClass('active')) && ($('.alarm').hasClass('active'))) {
    $('.float').removeClass('disabled');
  }
});

