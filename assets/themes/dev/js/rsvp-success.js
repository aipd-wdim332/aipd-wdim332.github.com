function getParameterByName(name){
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
if(getParameterByName('rsvp') == 'success'){
  $('.rsvp-form').slideUp('500', function(){
      $('.success').delay('100').slideDown('500');
  });
} else if(getParameterByName('rsvp') == 'pending'){
  $('.rsvp-form').slideUp('500', function(){
      $('.pending').delay('100').slideDown('500');
  });  
};