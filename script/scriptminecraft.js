var NumberOfWords = 30
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "" 
words[2] = "" 
words[3] = "" 
words[4] = "" 
words[5] = "" 
words[6] = "" 
words[7] = "" 
words[8] = "" 
words[9] = "" 
words[10] = "" 

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

