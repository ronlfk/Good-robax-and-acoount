var NumberOfWords = 30
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://ckk.ai/06icgs" 
words[2] = "https://ckk.ai/0fY5iv" 
words[3] = "https://ckk.ai/1h49p39" 
words[4] = "https://ckk.ai/gQ4tgdv8Wb" 
words[5] = "https://ckk.ai/5WJPn19K9" 
words[6] = "https://ckk.ai/OTzKwYj" 
words[7] = "https://ckk.ai/Sl88YPkwf" 
words[8] = "https://ckk.ai/bReJSGH" 
words[9] = "https://ckk.ai/ZF8B" 
words[10] = "https://ckk.ai/bhRwKjyT" 
words[11] = "https://ckk.ai/92WtcB" 
words[12] = "https://ckk.ai/kMYqeXaeFBB" 
words[13] = "https://ckk.ai/P9T1q3k" 
words[14] = "https://ckk.ai/9zllwD" 
words[15] = "https://ckk.ai/MZ35n" 
words[16] = "https://ckk.ai/RhzRN8UpZXF" 
words[17] = "https://ckk.ai/EsRbo" 
words[18] = "https://ckk.ai/bHTMTv" 
words[19] = "https://ckk.ai/N3Ca8xowKRp" 
words[20] = "https://ckk.ai/RYESnqpBN8"
words[21] = "https://ckk.ai/Ilb5e29F"
words[22] = "https://ckk.ai/JkV5Wjup9s" 
words[23] = "https://ckk.ai/Q8CBRiPQD" 
words[24] = "https://ckk.ai/kpDCIm2yj" 
words[25] = "https://ckk.ai/iB6lXVCL3ue" 
words[26] = "https://ckk.ai/wzUmPiD" 
words[27] = "https://ckk.ai/4z9Gu6zFDL" 
words[28] = "https://ckk.ai/UitNs" 
words[29] = "https://ckk.ai/80vUvISo" 
words[30] = "https://ckk.ai/myjv6GvrBas" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


function usersOnline() {
  var rndUser;
  rndUser = Math.floor(Math.random() * 50) + 100;
  document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  setInterval(function(){
    rndUser = Math.floor(Math.random() * 50) + 100;
    document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  }, 5020);
}
