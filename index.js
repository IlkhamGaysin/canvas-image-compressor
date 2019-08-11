"use strict";

var canvasImageCompressor = {
  compress: function (options = {}) {
    return new Promise(function(resolve, reject) {
      var mime_type, cvs, ctx;

      if(options['sourceImgObj'] == undefined) {
        reject('sourceImgObj mist be present');
      }

      if (options['sourceImgObj'] instanceof jQuery) {
        if (!options['sourceImgObj'].length) {
          reject('sourceImgObj mist be present');
        }

        options['sourceImgObj'] = options['sourceImgObj'].get(0);
      }

      mime_type = options['outputFormat'] || 'image/jpeg';

      if(mime_type == 'png') {
        mime_type = 'image/png';
      }

      cvs = document.createElement('canvas');
      cvs.width = options['sourceImgObj'].naturalWidth;
      cvs.height = options['sourceImgObj'].naturalHeight;
      ctx = cvs.getContext('2d');
      ctx.drawImage(options['sourceImgObj'], 0, 0);

      cvs.toBlob(
        function(blob) {
          resolve(blob);
          ctx.clearRect(
            0,
            0,
            options['sourceImgObj'].naturalWidth,
            options['sourceImgObj'].naturalHeight
          );
          cvs.remove();
        },
        mime_type,
        (options['quality'] || 100)/100
      );
    });
  });
};

module.exports = canvasImageCompressor;
