var QRClient = function() {
  var qrDecoderWorker;
  var currentCallback;
  
  this.decode = function(imageData, callback) {
    try {
      if (window.Worker) {
        qrDecoderWorker = qrDecoderWorker || new Worker("scripts/jsqrcode/qrworker.js");
        qrDecoderWorker.postMessage(imageData);
        qrDecoderWorker.onmessage = function(message){
          callback(message.data);
        };
      } else {
        // var width = imageData.width;
        // var height = imageData.height;
        // var result = qrcode.decode(width, height, imageData);
        // callback(result);
      }
    } 
    catch(e) {
      // consume the error.
      console.log(e)
    }
  };
 };