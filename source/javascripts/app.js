// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {
   var wrapper = Popcorn.HTMLYouTubeVideoElement( "#video" );

    wrapper.src = "https://www.youtube.com/watch?v=VX5y2oo3ydo";

    var pop = Popcorn( wrapper );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with YouTube!",
      target: "footnote-div"
    });
    pop.play();

}, false);
