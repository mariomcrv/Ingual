//run a function after a page is loaded

function showSlides() {
}
if (window.attachEvent) {window.attachEvent('onload', showSlides);}
else if (window.addEventListener) {window.addEventListener('load', showSlides, false);}
else {document.addEventListener('load', showSlides, false)}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myComments");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



  