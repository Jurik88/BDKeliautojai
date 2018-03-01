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
      scrollTop: $("#pazintinesJuosta").offset().top
  }, 2000);
});

// poilsines
$("#poilsinesID").click(function() {
  $('html, body').animate({
      scrollTop: $("#poilsinesJuosta").offset().top
  }, 2000);
});

// savaitgalio
$("#savaitgalioID").click(function() {
  $('html, body').animate({
      scrollTop: $("#savaitgalioJuosta").offset().top
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
  var conf = confirm ("Mielas, lankytojau, dėkojame, kad lankotes mūsų svetainėje. Ar norėtumėte gauti mūsų naujienlaiškį su išskirtiniais pasiūlymais?"); 
  if(conf == true) {
    var elpastas;
    elpastas = prompt("Iveskite savo el. pašto adresą:");
  if (conf == true){
    alert("Ačiū! Netrukus el. paštu gausite patvirtinimą apie naujienlaiškio gavimą =D ");
  }
  }
}, 5000);

// maps

$('#footerdiv2').click(function(){
  window.open ('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.343518381593!2d25.25680535136399!3d54.685982380184804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940a682e5a03%3A0x7529bd5e76bb71fd!2sA.+Go%C5%A1tauto+g.+75%2C+Vilnius+01112!5e0!3m2!1slt!2slt!4v1519767912961', '_blank');
});

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
//Jurij pabaiga



