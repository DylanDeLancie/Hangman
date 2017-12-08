function startGame(){
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    printWord();

}
var guesses = 10;
var words = ["bee","ball","united","paris","jacket","berkeley","champion"];
var word = "";
var guessedLetters = [];


function guessLetter(){
    var letter = document.getElementById("Letter").value;
    guessedLetters.push(letter);
    printWord();
    removeLetter();
}




function printWord() {
    var retWord = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i])==-1) {
            retWord += "_ ";
        } else {
            retWord += word[i];
        }
    }
    document.getElementById("setUp").innerHTML= retWord;
    return retWord();
}

function removeLetter(){
    var selectedIndex = document.getElementById("Letter").selectedIndex;
    var box = document.getElementById("Letter");
    box.remove(selectedIndex);
}





var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function setUpLetters(){
    for (var i=0; i<alphabet.length; i++){
        var letter = alphabet[i];
        document.getElementById("Letter").innerHTML+= "<option value="+letter+">"+letter+"</option>";
    }
}