var NumberOfWords = 30
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
words[11] = "https://ckk.ai/6p92Zowj" 
words[12] = "https://ckk.ai/knZ6hX4dSrh" 
words[13] = "https://ckk.ai/ICyF4aZUA9k" 
words[14] = "https://ckk.ai/E5CEuoIIyw" 
words[15] = "https://ckk.ai/LAc8ZuN0" 
words[16] = "https://ckk.ai/icluej5Qq" 
words[17] = "https://ckk.ai/06z7ABWO" 
words[18] = "https://ckk.ai/swYSva5RA73" 
words[19] = "https://ckk.ai/SsN3t2KKsA" 
words[20] = "https://ckk.ai/FxJfoHZkeUZ" 
words[21] = "https://ckk.ai/PfF3" 
words[22] = "https://ckk.ai/eoRfxOl2qZr" 
words[23] = "https://ckk.ai/UpcE0jRO8ZQ" 
words[24] = "https://ckk.ai/vP3YMn9" 
words[25] = "https://ckk.ai/ezSM" 
words[26] = "https://ckk.ai/x9Iowy" 
words[27] = "https://ckk.ai/VE3Mx0v" 
words[28] = "https://ckk.ai/hRza" 
words[29] = "https://ckk.ai/S8J7iJUuRxD" 
words[30] = "https://ckk.ai/kYm84" 

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

