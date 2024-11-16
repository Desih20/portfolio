$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });


});

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "300px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
}