$(document).ready(function() {
  const checked = [];
  $('.amenities :checkbox').change(function(){
      if ($(this).prop('checked')){
        checked.push(($(this).data().name))
        let string_amenities = checked.toString()
        if (string_amenities.length > 10){
          $('.amenities h4').text(`${string_amenities.substring(0,10) + '...'}`)
        }
        else {
          $('.amenities h4').text(`${string_amenities}`)
        }
      }
      else {
        checked.splice(checked.indexOf($(this).data().name), 1);
        $('.amenities h4').text(`${checked}`)
      }
  });
});
