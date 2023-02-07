var NumberOfWords = 48
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://todaynewspk.win/58If" 
words[2] = "https://todaynewspk.win/H5p8J" 
words[3] = "https://todaynewspk.win/cwpH" 
words[4] = "https://todaynewspk.win/WsCqmAB5" 
words[5] = "https://todaynewspk.win/df59" 
words[6] = "https://todaynewspk.win/rO4E7g" 
words[7] = "https://todaynewspk.win/7SXFTjpx" 
words[8] = "https://todaynewspk.win/uL4k0" 
words[9] = "https://todaynewspk.win/8CXkN" 
words[10] = "https://todaynewspk.win/hjhaOA" 
words[11] = "https://todaynewspk.win/RNlIK8" 
words[12] = "https://todaynewspk.win/kaxyDGE" 
words[13] = "https://todaynewspk.win/ss4se5" 
words[14] = "https://todaynewspk.win/rvQg" 
words[15] = "https://todaynewspk.win/ubnrLCG" 
words[16] = "https://todaynewspk.win/vek5lWqx" 
words[17] = "https://todaynewspk.win/RN0IEU" 
words[18] = "https://todaynewspk.win/2JaY" 
words[19] = "https://todaynewspk.win/rcBeR" 
words[20] = "https://todaynewspk.win/5SA88k" 
words[21] = "https://todaynewspk.win/NJ4rOaUl" 
words[22] = "https://todaynewspk.win/c0lv" 
words[23] = "https://todaynewspk.win/yAWPYq" 
words[24] = "https://todaynewspk.win/ybItW4" 
words[25] = "https://todaynewspk.win/iSZO" 
words[26] = "https://todaynewspk.win/A7m0c" 
words[27] = "https://todaynewspk.win/cjqNr" 
words[28] = "https://todaynewspk.win/eIGUkJmg" 
words[29] = "https://todaynewspk.win/ZKoK" 
words[30] = "https://todaynewspk.win/f2mZc" 
words[31] = "https://todaynewspk.win/3RhoNqe" 
words[32] = "https://todaynewspk.win/XdN7iC" 
words[33] = "https://todaynewspk.win/H4MOB7" 
words[34] = "https://todaynewspk.win/oCwWo" 
words[35] = "https://todaynewspk.win/uvNzs" 
words[36] = "https://todaynewspk.win/wB5spgz" 
words[37] = "https://todaynewspk.win/x4ad" 
words[38] = "https://todaynewspk.win/whXP3fn" 
words[39] = "https://todaynewspk.win/PG6w" 
words[40] = "https://todaynewspk.win/B7Nb" 
words[41] = "https://todaynewspk.win/0JbTek"
words[42] = "https://todaynewspk.win/ni2hOK"
words[43] = "https://todaynewspk.win/BpxeYev"
words[44] = "https://todaynewspk.win/VpIwAL"
words[45] = "https://todaynewspk.win/wxhKxo"
words[46] = "https://todaynewspk.win/gCVPhX0"
words[47] = "https://todaynewspk.win/n4WM21"
words[48] = "https://todaynewspk.win/ow9Qsf"



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
