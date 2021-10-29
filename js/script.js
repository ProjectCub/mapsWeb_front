document.addEventListener(
  "DOMContentLoaded",
  () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaW5jaW5lcjhyIiwiYSI6ImNrdjl2eWhoeDBhcTkycW1neXIwNTF4bGYifQ.D_EYYNYwxr4ejAGqBkrqcw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    let marker = null;
    map.on("click", (e) => {
      if (marker != null) {
        marker.remove();
      }
      marker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map); // add the marker to the map
    });
  },
  false
);
