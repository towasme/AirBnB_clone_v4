console.log('antes');
$(document).ready(function () {
  console.log('linea 2');
  const amenitiesName = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      amenitiesName[$(this).data('id')] = $(this).data('name');
      console.log('lnea 6');
      $('h4').addClass('entro_perro');
    } else {
      console.log('lnea 8');
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
