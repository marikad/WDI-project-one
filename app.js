$(setup);

var letters,
lettersGuessed = [],
word,
wrongChoice = -1;

function setup() {
	letters = $('.letters');
	setupEvents();
}

function setupEvents() {
	$('.letters').on('click', chooseLetter);
	$('.btn').on('click', chooseWord)
}

function chooseWord() {
	word = $('input').val();
	$('#chosen-word').html(word);
	$('.user-input').hide("slow");
    // Setup spaces
    var wordArray = word.split("");
    console.log(wordArray)
    $.each(wordArray, function(element) {
    	$('.chosen-word').append("<li>_</li>");
    	document.getElementById("number-of-letters").innerHTML =
    	"There are " + word.length + " letters in this word";
    	document.getElementById("rules").innerHTML = 
    	"Guess the letters in the word and if you are wrong well..."
    	$('.myButton').on('click', function() {
    		$(this).hide(".myButton");
    	})
    })
  }

  function chooseLetter() {
  	var letter = $(this).text().toLowerCase();
  	lettersGuessed.push(letter)
  	checkLetter(letter)
  	console.log(lettersGuessed);
  }


  function checkLetter(letter) {
  	// check where in the correct word, the chosen letter is found
  	var index = word.indexOf(letter);
  	// create array to store multiple indexs
  	var correctIndex = []

  	if (index == -1) {
  		wrongChoice += 1
  		console.log("wrong")
  		$($('.row-image')[wrongChoice]).css("visibility", "hidden");
  	
  	} else {

  	// loop through the correct word, and check for multiple occurences
  	while (index !== -1) {
  		// if we find a correct index, push it into our array
  		correctIndex.push(index);
  		console.log(correctIndex)
  			// MAGIC
  			index = word.indexOf(letter, index + 1);
        // correct guess  
        // for each of our indexs that we found, loop through, and add to html
        $(correctIndex).each(function(index, letterIndex){
        	if(winner(lettersGuessed, word.split(""))){
        		$("#rules").html("")
        		$("#number-of-letters").html("You won! You owe one beer!")
        	} else {
        		$("#rules").html("")
        		$("#number-of-letters").html("You just got beat by the Hoff!");
        	}
        	$($('.chosen-word                                                                                                     li')[letterIndex]).html(letter);
        })
      }
    } 
  }


    function winner(lettersGuessed, word){
     //write a variable to check  the length of a word and loop though it
     var count = 0 
     for (var i = 0; i < word.length; i++) {
     	if(lettersGuessed.indexOf(word[i])>-1){
     		count++
     	}
     };
     if (word.length === count) {
     	return true
     } else {
     	return false
     };
    }
