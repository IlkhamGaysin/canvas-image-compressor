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
 * Create the imageCompressor object.
 * @constructor
 */

var imageCompressor = {
  /**
   * Receives an Image Object (can be JPG OR PNG) and returns a new Image Object compressed
   * @param {Image} source_img_obj The source Image Object
   * @param {Integer} quality The output quality of Image Object
   * @param {String} output format. Possible values are jpg and png
   * @return {DataUrl} base64 data url
   */

  run: function(source_img_obj, quality, output_format){

   var mime_type = "image/jpeg";

   if(typeof output_format !== "undefined" && output_format =="png"){
      mime_type = "image/png";
   }

   var cvs = document.createElement('canvas');
   cvs.width = source_img_obj.naturalWidth;
   cvs.height = source_img_obj.naturalHeight;
   var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
   var newImageData = cvs.toDataURL(mime_type, quality/100);
   cvs.remove();

   return newImageData;
  }
};
