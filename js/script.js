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
      const myLatlng = { lat: data.lat, lng: data.lng };
      console.log(data.lat,data.lng);
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: myLatlng  });
      
        const marker = new google.maps.Marker({
          position: myLatlng,
          map,
          title: "Click to zoom",
        });
    
      map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 3000);
      });
      marker.addListener("click", () => {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
      });
    });

}


