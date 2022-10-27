function iniciarMap(){
    var coord = {lat:16.896445265087586,lng: -99.83527581676285};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}