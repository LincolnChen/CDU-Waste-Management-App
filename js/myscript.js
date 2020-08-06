var map;
function initMap() {
  map = new L.Map("map", {
      center: new L.LatLng(-12.37, 130.87),
      zoom: 15,
      layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
  });
}

function addMarker(lat, lng) {
  var marker = new L.Marker(new L.LatLng(lat, lng));
  marker.bindPopup("You are here");
  map.addLayer(marker);
  return marker;
}

function moveMarker(marker, lat, lng) {
  var newLatLng = new L.LatLng(lat, lng);
  marker.setLatLng(newLatLng);
  return marker;
}

initMap();
if("geolocation" in navigator) {
} else {
}
navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log(position);
        console.log('latitude: ${position.coords.latitude}, longitude:${position.coords.longitude}');
        addMarker(position.coords.latitude,position.coords.longitude);
    }
)
