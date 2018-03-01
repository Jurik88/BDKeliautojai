//Jurij pradzia 
$(document).ready(function(){
  $('.parallax').parallax();

  var kelionesKaina = parseInt($('#pirkinioKaina').text());
  $('#galutineKaina').val(kelionesKaina);

  lightbox.option({
    'resizeDuration': 50,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices' : true,
    'maxHeight' : 400,
  });

  $("#pasirinkimas").change(function() {
    var pasirinktasSkaicius = this.value;
    var kelionesKaina = parseInt($('#pirkinioKaina').text());
    var galutineKaina = pasirinktasSkaicius * kelionesKaina;

    $('#galutineKaina').val(galutineKaina);

  });

});

//Page Scrolling to ID START
// pazintines
$("#pazintinesID").click(function() {
  $('html, body').animate({
      scrollTop: $("#pazintinesContainer").offset().top
  }, 2000);
});

// pazintines
$("#poilsinesID").click(function() {
  $('html, body').animate({
      scrollTop: $("#poilsinesContainer").offset().top
  }, 2000);
});

// savaitgalio
$("#savaitgalioID").click(function() {
  $('html, body').animate({
      scrollTop: $("#savaitgalioContainer").offset().top
  }, 2000);
});

// Contact
$("#buttonContact").click(function() {
  $('html, body').animate({
      scrollTop: $("#footerContainer").offset().top
  }, 2000);
});
//Page Scrolling to ID END

//Naujienlaiškis
setTimeout(function(){ 
  var conf = confirm ("Mielas lankytojau, dėkojame, kad lankotes mūsų svetainėje. Ar norėtumėte gauti mūsų naujienlaiškį su išskirtiniais pasiūlymais?"); 
  if(conf == true) {

  }
}, 5000);

//Jurij pabaiga



