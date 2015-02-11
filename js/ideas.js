function startCamera() {
  var v = document.getElementById('v');
  var canvas = document.getElementById('c');
  var context = canvas.getContext('2d');
  var save = document.getElementById('save-pic');

  var cw = canvas.clientWidth;
  var ch = canvas.clientHeight;
  canvas.width = cw;
  canvas.height = ch;

  navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
        video: true,
        audio: false
      },
      function(stream) {
        var url = window.URL || window.webkitURL;
        v.src = url ? url.createObjectURL(stream) : stream;
        v.play();

        v.addEventListener('play', function() {
          draw(this, context, cw, ch);
        }, false);

        function draw(v, c, w, h) {
          if (v.paused || v.ended) return false;
          var image, data, i, r, g, b, brightness;

          c.drawImage(v, 0, 0, w, h);

          image = c.getImageData(0, 0, w, h);
          data = image.data;
          // array of pixels
          for (i = 0; i < data.length; i += 4) {
            r = data[i] * 2;
            g = data[i + 1] * 2;
            b = data[i + 2] * 2;
            brightness = (r + b + g) / 3;

            data[i] = data[i + 1] = data[i + 2] = brightness;
          }

          image.data = data;

          c.putImageData(image, 0, 0);

          setTimeout(draw, 20, v, c, w, h);
        }
      },
      function(error) {
        // alert('Something went wrong. (error code ' + error.code + ')');
        return;
      }
    );
  } else {
    // alert('Sorry, the browser you are using doesn\'t support getUserMedia');
    return;
  }
}