var data = {
  sender: null,
  timestamp: null,
  lat: null,
  lng: null
};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat: 0, lng: 0}  });
    map.addListener('click', function(e) {
      data.lat = e.latLng.lat();
      data.lng = e.latLng.lng();
      console.log(data.lat,data.lng);
    });
}


