$(document).ready(function () {
  const amenitiesName = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      amenitiesName[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenitiesName[$(this).data('id')];
    }
    const lenList = Object.values(amenitiesName).length;
    if (lenList > 0) {
      $('div.selection_amenities h4').text(Object.values(amenitiesName).join(', '));
    } else {
      $('div.selection_amenities h4').html('&nbsp;');
    }
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  if (status === 'success') {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  }
});

$.ajax({
  type: "POST",
  url: "http://0.0.0.0:5001/api/v1/places_search",
  data: "{}",
  contentType: 'application/json',
  success: function (response) {
    for(let i = 0; i < response.length; i++) {
      let place = response[i];
      $('.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div>',
      + '<div class="information"><div class="max_guest">' + place.max_guest + 'Guests' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + 'Bedroom' + place.number_rooms + 's' + '</div>',
      + '<div class="number_bathrooms">' + place.number_bathrooms + 'Bathroom' + place.number_bathrooms + 's' + '</div></div></div></article>')};
  }
});



/* $.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  type: 'POST',
  data: '{}',
  ContentType: 'application/json',
  dataType: 'json',
  success: function (data) {
    for(let i = 0; i < data.length; i++) {
      let place = data[i];
      $('.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div>',
      + '<div class="information"><div class="max_guest">' + place.max_guest + 'Guests' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + 'Bedroom' + place.number_rooms + 's' + '</div>',
      + '<div class="number_bathrooms">' + place.number_bathrooms + 'Bathroom' + place.number_bathrooms + 's' + '</div></div>',
      + '<div class="user"><b>Owner:</b>' + place.user.first_name + place.user.last_name + '</div><div class="description">' + place.description + '</div></article>')};
  }
});
*/