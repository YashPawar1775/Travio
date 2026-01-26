maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS,
    center:listing.geometry.coordinates,
    zoom:9
});



const marker = new maptilersdk.Marker({color:"#fe424d"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maptilersdk.Popup({ offset: 25 }).setHTML(`<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`))
  .addTo(map);