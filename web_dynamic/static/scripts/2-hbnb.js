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
const axios = require('axios');
axios.get('http://0.0.0.0:5001/api/v1/status/')
  .then(res => {
    if (res.status === 200){
      $('#api').addClass('available')
    }
    else{
      $('#api').removeClass('available')
    }
  })
  .catch(error => {
    if (error.response) {
      console.log(error)
      console.log(`code: ${error.response.status}`);
    }
  });
});
