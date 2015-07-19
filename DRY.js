/*
* Don't Repeat Yourself (DRY) or Duplication is Evil (DIE)
*/

// Store some values in an array
var setting = {};
setting['carModel'] = "Mercedes";
setting['carYear'] = 2015;
setting['carMiles'] = 20015;
setting['carTint'] = "Green";

// Non-DRY
$('.someCheckBox').click(function() {
  if (this.checked) {
    $('#input_carModel').val(setting['carModel']);
    $('#input_carYear').val(setting['carYear']);
    $('#input_carMiles').val(setting['carMiles']);
    $('#input_carTint').val(setting['carTint']);
  } else {
    $('#input_carModel').val('');
    $('#input_carYear').val('');
    $('#input_carMiles').val('');
    $('#input_carTint').val('');
  }
});

// DRY
$('.someCheckBox').click(function() {
  var checked = this.checked;
  $.each(['carModel', 'carYear', 'carMiles', 'carTint'], function(v, key) {
    $('#input_' + v).val(checked ? setting[key] : '');
});
