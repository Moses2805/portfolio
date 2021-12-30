$(document).ready(function(){
    $(".bg-menu").click(function(){
      $("#menu-1").fadeToggle(280);
      $("#menu-2").fadeToggle(560);
      $("#menu-3").fadeToggle(840);
      $("#menu-4").fadeToggle(1120);
      $(".fa-angle-left").toggleClass("rotate-icon")



    });
  });



var loader = document.querySelector(".preloader")

window.addEventListener("load", function(){
  loader.style.display = "none";
})
