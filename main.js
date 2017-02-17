
$(document).ready(function() {
  $.get("https://www.reddit.com/r/aww/.json").done(function(responseBody) {
    var postsArray = responseBody.data.children;
    for (var i = 0; i < 10; i++) {

      //postsArray[i].data.title = titles
      console.log(postsArray[i].data.title);

      //postsArray[i].data.author = author
      console.log(postsArray[i].data.author);
    }
    // console.log("DONE", responseBody.data.children);
  }).fail(function() {
    console.log("Hello");
  }).always(function() {
    console.log("Always");
  })
});
