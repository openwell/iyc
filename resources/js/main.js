$(document).ready(function() {
  var map = new GMaps({
    div: ".map",
    lat: 6.6088561,
    lng: 3.2728498,
    zoom: 17
  });

  map.addMarker({
    lat: 6.608982,
    lng: 3.27328,
    title: "Lima",
    infoWindow: {
      content: "<p>Lagos</p>"
    }
  });

  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   if (scroll >= 170) {
  //     $(".nav-background-container").addClass("navfixed animated fadeInDown");
  //   }
  //   if (scroll <= 170) {
  //     $(".nav-background-container").removeClass("navfixed animated fadeInDown");
  //   }
  // });
});

window.onscroll = () => {
  if (window.pageYOffset >= 170) {
    return document
      .querySelector(".nav-background-container")
      .classList.add("navfixed", "animated", "fadeInDown");
  }
  if (window.pageYOffset <= 170) {
    return document
      .querySelector(".nav-background-container")
      .classList.remove("navfixed", "animated", "fadeInDown");
  }
};

document.querySelector(".menu_bar_toggle").onclick = (event) => {
  event.target.classList.toggle("js-nav-open");
  document.querySelector(".mobile-nav-bg").classList.toggle("js-nav-open");
};
