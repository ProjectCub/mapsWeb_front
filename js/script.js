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
      console.log(e.lngLat);
    });
  },
  false
);
class data {
  constructor(lat, lng, description) {
    this.lat = e.lngLat.lat;
    this.lng = e.lngLat.lng;
    this.description = description;
  }
  list = ["this is a good place", "this is a bad place"];
}
list.array.forEach((element) => {});
