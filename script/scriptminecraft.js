var NumberOfWords = 58
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://todaynewspk.win/yVW1" 
words[2] = "https://todaynewspk.win/VulC7WT" 
words[3] = "https://todaynewspk.win/xgkqL3O" 
words[4] = "https://todaynewspk.win/kQAy" 
words[5] = "https://todaynewspk.win/erCgE9A" 
words[6] = "https://todaynewspk.win/vLGTYR" 
words[7] = "https://todaynewspk.win/lc8Qk" 
words[8] = "https://todaynewspk.win/WcF80eBf" 
words[9] = "https://todaynewspk.win/bNafye" 
words[10] = "https://todaynewspk.win/GyoZ4UB9" 
words[11] = "https://todaynewspk.win/Qu7M1N1z" 
words[12] = "https://todaynewspk.win/ISlSFgAu" 
words[13] = "https://todaynewspk.win/aJxlF" 
words[14] = "https://todaynewspk.win/gJVU" 
words[15] = "https://todaynewspk.win/eM63z" 
words[16] = "https://todaynewspk.win/jFU8d" 
words[17] = "https://todaynewspk.win/CpEZ" 
words[18] = "https://todaynewspk.win/LYGZ" 
words[19] = "https://todaynewspk.win/jeiur" 
words[20] = "https://todaynewspk.win/gmLt" 
words[21] = "https://todaynewspk.win/tk2DbriU" 
words[22] = "https://todaynewspk.win/4qjSjj" 
words[23] = "https://todaynewspk.win/wfDo" 
words[24] = "https://todaynewspk.win/imoaoV6X" 
words[25] = "https://todaynewspk.win/Iys9" 
words[26] = "https://todaynewspk.win/cv2YC" 
words[27] = "https://todaynewspk.win/7pVeP" 
words[28] = "https://todaynewspk.win/I5SdEp" 
words[29] = "https://todaynewspk.win/XQsEx" 
words[30] = "https://todaynewspk.win/7Lk2hJV" 
words[31] = "https://todaynewspk.win/WFg9Ego" 
words[32] = "https://todaynewspk.win/dmmuYP" 
words[33] = "https://todaynewspk.win/AlBR" 
words[34] = "https://todaynewspk.win/Z9M6aE96" 
words[35] = "https://todaynewspk.win/Z9M6aE96" 
words[36] = "https://todaynewspk.win/6QEby" 
words[37] = "https://todaynewspk.win/8dB5" 
words[38] = "https://todaynewspk.win/VlcFcK" 
words[39] = "https://todaynewspk.win/AK3Dp" 
words[40] = "https://todaynewspk.win/vPQ9q6x" 
words[41] = "https://todaynewspk.win/Rg3DYBO"
words[42] = "https://todaynewspk.win/ytZCEOoU"
words[43] = "https://todaynewspk.win/QRbfp"
words[44] = "https://todaynewspk.win/LTsE"
words[45] = "https://todaynewspk.win/LTsE"
words[46] = "https://todaynewspk.win/bsSqZ"
words[47] = "https://todaynewspk.win/8CUY"
words[48] = "https://todaynewspk.win/uMiz4"
words[49] = "https://todaynewspk.win/KeVik"
words[50] = "https://todaynewspk.win/8AM8"
words[51] = "https://todaynewspk.win/zlnk"
words[52] = "https://todaynewspk.win/y4SYhKPG"
words[53] = "https://todaynewspk.win/673a3G"
words[54] = "https://todaynewspk.win/673a3G"
words[55] = "https://todaynewspk.win/ZCKT"
words[56] = "https://todaynewspk.win/zfmGFZ"
words[57] = "https://todaynewspk.win/6G42OV"
words[58] = "https://todaynewspk.win/fndOuky"

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

