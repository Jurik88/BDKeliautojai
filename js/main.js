//Jurij pradzia 
$(document).ready(function(){
  $('.parallax').parallax();
});

// Contact
$("#buttonContact").click(function() {
  $('html, body').animate({
      scrollTop: $("#footerContainer").offset().top
  }, 2000);
});

//Naujienlaiškis
setTimeout(function(){ confirm ("Mielas lankytojau, dėkojame, kad lankotes mūsų svetainėje. Ar norėtumėte gauti mūsų naujienlaiškį su išskirtiniais pasiūlymais?"); }, 5000);

//Jurij pabaiga
