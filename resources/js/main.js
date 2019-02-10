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
    slidesToScroll: 3
  });
});
