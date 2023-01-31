//https://developers.themoviedb.org/3/getting-started/images
//https://www.movieposterdb.com/

/**
 * JS to support onclick of images and navigates them using the ID to its new page.
 */

var imgNavigation = function () {
  if (this.id === undefined || this.id === "" || this.id === null) {
    alert("Sorry, that page is unavailable at the moment. Try flying Highway to the...")

  } else {
    console.log("clicked image: ", this.id);
    window.location.href = "movies/" + this.id + '.html';
  }
}

var elements = document.getElementsByClassName("movieSearch-grid-item");
document.addEventListener("DOMContentLoaded", function () {
  Array.from(elements).forEach(function (element) {
    element.addEventListener('click', imgNavigation);
  });
});
