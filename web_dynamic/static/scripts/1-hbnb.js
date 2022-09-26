$(document).ready(function() {
  const checked = [];
  let amenities = 0
  /*const ameniti = document.getElementsByName('data-name');*/
  $('.amenities :checkbox').change(function(){
      if ($('.amenities :checkbox').prop('checked')){
        console.log($('.amenities :checkbox')[0].nextSibling.data)
        /*checked.push(amenity.getAttribute('data-name'))*/
        $('.amenities h4').append(`${checked}`)
      }
      if ($('.amenities :checkbox').prop('unchecked')){
        console.log('unchecked')
      }
  });
});
