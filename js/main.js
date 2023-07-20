


// featured slider active
$(".featured-slider").owlCarousel({
    nav:true,
    margin:20,
    // navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    loop:true,
    autoplay:false,
    dots:false,
    responsive: {
      0: {
        items: 1 // Number of items to show on small screens
      },
      600: {
        items: 2 // Number of items to show on medium screens
      },
      1000: {
        items: 3 // Number of items to show on large screens
      }
    }
  });
// popup active
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

   // Initialize Magnific Popup
   $('.popup-btn').magnificPopup({
    items: {
        src: '#contact-form', // ID of the contact form container
        type: 'inline'
    },
    // Other options you can customize
});
$('#close-btn').on('click', function() {
  $.magnificPopup.close();
});
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// video area 
var videoContainer = document.getElementById("video-container");
var video = document.getElementById("video");
var playIcon = document.getElementById("play-icon");
var closeIcon = document.getElementById("close-icon");

function playVideo() {
  video.src = "/video/comfort.mp4"; 
  video.style.display = "block";
  playIcon.style.display = "none";
  closeIcon.style.display = "block";
  video.play();
}

function closeVideo() {
  video.src = "/video/comfort.mp4";
  video.style.display = "block";
  playIcon.style.display = "block";
  closeIcon.style.display = "none";
  video.pause();
}
// slider
$('.scroll-one').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
