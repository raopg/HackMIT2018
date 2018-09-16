//
// var origin = new google.maps.LatLng(savedLocations. ,detectedLongitude);
// var destination = new google.maps.LatLng(latitudeVal,langtitudeVal);
// var service = new google.maps.DistanceMatrixService();var date = new Date();
//     date.setDate(date.getDate() + 1);
//     var DrivingOptions = {
//     departureTime: date,
//     trafficModel: 'pessimistic'
//     };
//
//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: 'DRIVING',
//         drivingOptions : DrivingOptions,
//         unitSystem: google.maps.UnitSystem.METRIC,
//         durationInTraffic: true,
//         avoidHighways: false,
//         avoidTolls: false
//       }, response_data);function response_data(responseDis, status) {
//   if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK"){
//     console.log('Error:', status);
//     // OR
//     alert(status);
//   }else{
//        alert(responseDis.rows[0].elements[0].distance.text);
//   }});

  function distance(origin1, destA) {
    origin1= 'MIT, Cambridge, MA, USA';
    destA =  'MIT Museum Building, Massachusetts Avenue, Cambridge, MA, USA';
  var bounds = new google.maps.LatLngBounds;
  var markersArray = [];
  console.log(origin1);

  var origin1 = origin1;
  var destinationA = destA;
  var totalDuration = 0;
  // var geocoder = new google.maps.Geocoder;

  var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
    origins: [origin1],
    destinations: [destA],
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== 'OK') {
      alert('Error was: ' + status);
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';

      // var showGeocodedAddressOnMap = function(asDestination) {
      //   var icon = asDestination ? destinationIcon : originIcon;
      //   return function(results, status) {
      //     if (status === 'OK') {
      //       map.fitBounds(bounds.extend(results[0].geometry.location));
      //       markersArray.push(new google.maps.Marker({
      //         map: map,
      //         position: results[0].geometry.location,
      //         icon: icon
      //       }));
      //     } else {
      //       alert('Geocode was not successful due to: ' + status);
      //     }
      //   };
      // };
      // };

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        // geocoder.geocode({'address': originList[i]},
        //     showGeocodedAddressOnMap(false));
        for (var j = 0; j < results.length; j++) {
          // geocoder.geocode({'address': destinationList[j]},
          //     showGeocodedAddressOnMap(true));
          // outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
          //     ': ' + results[j].distance.text + ' in ' +
          //     results[j].duration.text + '<br>';
             totalDuration= results[j].duration.value;
        }
      }
    }
  });
}
