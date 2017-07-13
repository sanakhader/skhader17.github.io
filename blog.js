function postComment() {
  var text = $('#comments').val();
  var p = $("<p></p>");
  $("#comments").append(p);
}

$('#postComment').click(postComment);
