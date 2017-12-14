function startGame(){
    resetGuesses();
    word = words[Math.floor(Math.random() * words.length)];
    deleteAllLetters();
    guessedLetters = [];
    printWord();
    setUpLetters();
    showLetters();
}
var guesses = 6;
var words = ["bee","ball","united","paris","jacket","berkeley","champion"];
var word = "";
var guessedLetters = [];


function guessLetter(){
    if (guesses < 1){
        return "try again";
    } else {
        var letter = document.getElementById("Letter").value;
        guessedLetters.push(letter);
        printWord();
        removeLetter();
        showLetters();
        lessGuesses(letter);
    }
}

function showLetters(){
    document.getElementById("guessedLetters").innerHTML= guessedLetters;
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

}

function removeLetter(){
    var selectedIndex = document.getElementById("Letter").selectedIndex;
    var box = document.getElementById("Letter");
    box.remove(selectedIndex);
}

function lessGuesses(letter){
    var lose = "";
    var printGuesses = "";
    if (word.indexOf(letter) == -1){
        guesses--;
    }
    document.getElementById("guesses").innerHTML = printGuesses + "Guesses Remaining: " + guesses;
    if (guesses == 0){
        lose += "YOU LOSE!"
    }
    document.getElementById("lose").innerHTML = lose;
}



var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function setUpLetters(){
    for (var i=0; i<alphabet.length; i++){
        var letter = alphabet[i];
        document.getElementById("Letter").innerHTML+= "<option value="+letter+">"+letter+"</option>";
    }
}

function deleteAllLetters(){
    var box= document.getElementById("Letter");
    for(var i=0;i<26;i++){
        if(guessedLetters.indexOf(alphabet[i])== -1){
            var thing = document.getElementById("Letter").selectedIndex;
            box.remove(thing);
        }
        }
}

function resetGuesses(){
    guesses = 6;
    document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guesses;
}