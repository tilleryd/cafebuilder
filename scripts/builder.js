$(document).ready(function() {
  
  $('select').on('change', function(){
    var name = $(this).attr('name');
    var val = $(this).val().toLowerCase();

    $('.' + name)
      .children()
      .first()
      .removeClass()
      .addClass(val);
  });

  $('.draggable').draggable({
    opacity: 0.8
  });

});