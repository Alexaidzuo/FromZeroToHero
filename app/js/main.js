/* LIGHTBOX FOR GALLERY */
$(function(){
    var $gallery = $('.gallery a').simpleLightbox();
  
    $gallery.on('show.simplelightbox', function(){
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
      console.log('Shown');
    })
    .on('close.simplelightbox', function(){
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
      console.log('Closed');
    })
    .on('change.simplelightbox', function(){
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
  });
  
/* Button collapse div with more images on Gallery Section */
jQuery(document).ready(function() {
    $("#btn-collapse").click(function() {
        $("#collapse").toggleClass('hidden show');
        if ($("#btn-collapse").text() == "Pogledaj više") {			
            $("#btn-collapse").html("Zatvori");
            $('html, body').animate({
                scrollTop: $("#collapse").offset().top
            }, 500);
        }
        else {		
            $("#btn-collapse").text("Pogledaj više");
            $('html, body').animate({
                scrollTop: $(".gallery h2").offset().top
            }, 500);
        }
    });  
});

/* HAMBURGER MENU */
$('.menu-toggle').click(function() {
  $(this).toggleClass('open');
  $('.unstyle-list').toggleClass('opening');
  $('.nav').toggleClass('navigation');
  if ($("nav").hasClass("navigation")) {
    $('body').addClass('disable-scroll')
  } else {
    $('body').removeClass('disable-scroll')
  }
});

$('ul li a').click(function() {
  $('.nav').removeClass('navigation')
  $('.menu-toggle').removeClass('open');
  $('.unstyle-list').removeClass('opening');
  $('body').removeClass('disable-scroll')
});

/* TESTOMONIALS SLIDER */

$('.testimonial-slider').slick({
  autoplay: true,
  speed: 300,
  arrows: false,
  dots: true,
  pauseOnFocus: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});