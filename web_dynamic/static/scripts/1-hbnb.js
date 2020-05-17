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
