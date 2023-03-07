var NumberOfWords = 10
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://tii.la/75njf596LwD" 
words[2] = "https://tii.la/UJZPZS" 
words[3] = "https://tii.la/KICSPs1" 
words[4] = "https://tii.la/mOFofPjf" 
words[5] = "https://tii.la/gPVtbV" 
words[6] = "https://tii.la/PpD6aG" 
words[7] = "https://tii.la/M4EwU" 
words[8] = "https://tii.la/BUUHNRSsVM" 
words[9] = "https://tii.la/K0Ip8LA7g2" 
words[10] = "https://tii.la/R5XfCiu8Kv"  

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
