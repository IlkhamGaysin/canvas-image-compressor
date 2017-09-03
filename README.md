# JavaScript Canvas Image Compressor

## Description
Simple image compressor that accept image sorce from Javascript FileReader.

It can be used to compress images by using
[canvas](https://developer.mozilla.org/en-US/docs/HTML/Canvas) element.

## Usage
Include the (minified) JavaScript Canvas Image Compressor script in your HTML markup:

```html
<script src="js/imageCompressor.js"></script>
```


Now you can get `compressor` and call on it `then()` with two arguments.
The first is function that accpets new [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and will be invoked if compressing is successfullly done.
The second is function that accepts error message which will be invoked if compressing is not successfullly done.

Be aware compressor works asynchronously and compress returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```javascript
  var sourceImg = document.getElementById("sourceImg"),

  imageCompressor.compress({"sourceImgObj": sourceImg}).then(
    function(blob) {
      var newImg = document.createElement("img");
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(blob);

      newImg.src = imageUrl;

      document.body.appendChild(newImg);
    },
    function(errorMessage) {
      alert(errorMessage);
    };
  )
```
