var NumberOfWords = 58
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://ckk.ai/zpzQ2HAOJ" 
words[2] = "https://ckk.ai/y3ey4N" 
words[3] = "https://ckk.ai/5nB2L" 
words[4] = "https://ckk.ai/yuAfcNcI2" 
words[5] = "https://ckk.ai/DaCeGG6hA" 
words[6] = "https://ckk.ai/Jabw7Qtd8c" 
words[7] = "https://ckk.ai/GCn6M56tIsw" 
words[8] = "https://ckk.ai/KWaEyl" 
words[9] = "https://ckk.ai/G6xfyg" 
words[10] = "https://ckk.ai/9I7NM" 
words[11] = "" 
words[12] = "" 
words[13] = "" 
words[14] = "" 
words[15] = "" 
words[16] = "" 
words[17] = "" 
words[18] = "" 
words[19] = "" 
words[20] = "" 
words[21] = "" 
words[22] = "" 
words[23] = "" 
words[24] = "" 
words[25] = "" 
words[26] = "" 
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

