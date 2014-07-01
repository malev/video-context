// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {
  var pop = Popcorn.smart( "#container", "http://www.youtube.com/watch?v=9oar9glUCL0" );

  pop.footnote({
    start: 1,
    end: 5,
    text: "Works with youtube!",
    target: "footnote-div"
  });

  pop.play();
  // Create a popcorn instance by calling the Youtube player plugin

}, false);
