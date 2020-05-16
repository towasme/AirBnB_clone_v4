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
      $('div.amenities > h4').text(Object.values(amenitiesName).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
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
  type: 'POST',
  data: '{}',
  ContentType: 'application/json',
  dataType: 'json',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  success: function (data) {
    console.log(data);
  }
});
