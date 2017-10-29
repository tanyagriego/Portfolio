function showPreview() {
  $('#preview').html(marked($('#content').val()));
}

$(document).ready(function(){
  $('#showPreview').on("click", showPreview);

});
