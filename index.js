
function loadFile(file, cb) {
  var chunkSize = 1024;
  var index = 0;
  var fileReader = new FileReader();
  
  fileReader.onload = function(e) {

    cb(e.target.result);
    index += chunkSize;
    
    if(index < file.size)//continue
      readChunk();  
  };

  fileReader.onerror = function() {
    cb(null);
  };
  
  readChunk();//start 

  function readChunk() {
      var nextChunk = file.slice(index, index + chunkSize);
      fileReader.readAsBinaryString(nextChunk);
  }
}
