$(document).ready(function() {
  const checked = [];
  $('.amenities :checkbox').change(function(){
      if ($(this).prop('checked')){
        checked.push(($(this).data().name))
        $('.amenities h4').text(`${checked}`)
      }
      else {
        checked.splice(checked.indexOf($(this).data().name), 1);
        $('.amenities h4').text(`${checked}`)
      }
  });
});
