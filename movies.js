//https://developers.themoviedb.org/3/getting-started/images
//https://www.movieposterdb.com/

/**
 * JS to support onclick of images and navigates them using the ID to its new page.
 */

var imgNavigation = function() {
    console.log(this.id);

    window.location.href = "movies/" + this.id + '.html';

  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector('img.movieSearch-grid-item');
    img.addEventListener('click', imgNavigation);
  });
  