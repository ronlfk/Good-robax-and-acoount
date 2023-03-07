var NumberOfWords = 10
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
