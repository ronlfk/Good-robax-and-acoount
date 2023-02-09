var NumberOfWords = 48
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://ckk.ai/82fXG" 
words[2] = "https://ckk.ai/9EHXWfuqYgA" 
words[3] = "https://ckk.ai/Qozn1D" 
words[4] = "https://ckk.ai/24dcPQDRyd5" 
words[5] = "https://ckk.ai/ZPjKeGnW" 
words[6] = "https://ckk.ai/AF7ydSafZlj" 
words[7] = "https://ckk.ai/kfb4g8JYK" 
words[8] = "https://ckk.ai/08nIdQcc" 
words[9] = "https://ckk.ai/Ny0jxOV39" 
words[10] = "https://ckk.ai/E5RK9Z" 
words[11] = "https://ckk.ai/e8d8j0Nw" 
words[12] = "https://ckk.ai/dfUOww" 
words[13] = "https://ckk.ai/RO80VUEYzr" 
words[14] = "https://ckk.ai/FAZOjebzAN" 
words[15] = "https://ckk.ai/T9rR4fev" 
words[16] = "https://ckk.ai/Bh9cJuhOdoH" 
words[17] = "https://ckk.ai/qzcibF9afkY" 
words[18] = "https://ckk.ai/TqnPJ37" 
words[19] = "https://ckk.ai/ZbzSb" 
words[20] = "https://ckk.ai/c2fgnpCLW" 
words[21] = "https://ckk.ai/Q1mtc1a" 
words[22] = "https://ckk.ai/6uvLA" 
words[23] = "https://ckk.ai/3hvJsPZ" 
words[24] = "https://ckk.ai/WCCeq" 
words[25] = "https://ckk.ai/n1pOeRwo" 
words[26] = "https://ckk.ai/t9eyhqvCm" 
words[27] = "" 
words[28] = "" 
words[29] = "" 
words[30] = "" 

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
