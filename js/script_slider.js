// var prev = document.querySelector(".fa-chevron-circle-left");
// var next = document.querySelector(".fa-chevron-circle-right");
// var active = document.querySelector(".active");
// var non_active = document.querySelector(".non-active");


// prev.addEventListener('click', function(){

// });

// next.addEventListener('click', function(){
//     console.log("test")
//     active.classList.remove("active");
//     active.classList.add("non-active");

//     active.nextElementSibling.classList.remove("non-active");
//     active.nextElementSibling.classList.add("active");

// });


$('.slider').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // variableWidth: true
  });