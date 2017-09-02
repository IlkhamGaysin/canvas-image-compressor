/*
 * Copyright (c) 2017, Ilgam Gaysin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Create the global imageCompressor object which returns Promise.
 * @constructor
 */

/**
 * Receives an Image Object (can be JPG OR PNG) and returns Object with one property
 * that contains function which accept options
 * You can call compress() on imageCompressor with options passed
 * It returns a Promise you can bind function wiich will be accept one argument
 * It will be a compressed blob

 * @options {sourceImgObj} sourceImgObj. The source Image Object
 * @options {Quality} Integer. The output quality of Image Object, default 100
 * @options {outputFormat} Output format. Possible values are jpg and png. Default jpeg
*/

window.imageCompressor = {
  compress: function(options = {}) {
    return new Promise(function(resolve, reject) {
      var mime_type, cvs, ctx, options;

      if (options['sourceImgObj'] == undefined || !options['sourceImgObj'].length) {
        reject("sourceImgObj mist be present");
      }

      mime_type = "image/jpeg";

      if(typeof(options['outputFormat']) !== undefined && options['outputFormat'] == "png"){
        mime_type = "image/png";
      }

      cvs = document.createElement('canvas');
      cvs.width = options['sourceImgObj'].naturalWidth;
      cvs.height = options['sourceImgObj'].naturalHeight;
      ctx = cvs.getContext("2d").drawImage(options['sourceImgObj'], 0, 0);

      cvs.toBlob(
        function(blob) {
          resolve(blob);
          ctx.clearRect(0,0, blob.naturalWidth, blob.naturalHeight);
        },
        mime_type,
        (options['quality'] || 100)/100
      );
    });
  }
}
