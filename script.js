function randomPosition(element) {
    var viewportWidth = window.innerWidth - element.offsetWidth;
    var viewportHeight = window.innerHeight - element.offsetHeight;
    var randomX = Math.floor(Math.random() * viewportWidth);
    var randomY = Math.floor(Math.random() * viewportHeight);
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var tracks = document.querySelectorAll('.track');
    
    // Randomize positions of tracks
    tracks.forEach(randomPosition);
  
    tracks.forEach(function(track) {
      track.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', null);
        e.dataTransfer.setDragImage(this, 0, 0);
      }, false);
  
      track.addEventListener('drag', function(e) {
        if (e.clientX === 0 && e.clientY === 0) {
          return;
        }
        this.style.left = (e.clientX - this.offsetWidth / 2) + 'px';
        this.style.top = (e.clientY - this.offsetHeight / 2) + 'px';
      }, false);
  
      track.addEventListener('dragend', function(e) {
        this.style.left = (e.clientX - this.offsetWidth / 2) + 'px';
        this.style.top = (e.clientY - this.offsetHeight / 2) + 'px';
      }, false);
    });
  });
  