
window.onload = function() {


var words = ['cat', 'dog', 'lizard', 'bunny', 'super'];
var lettersGuessed = []
var secretWord  = words[Math.floor(Math.random() * words.length)];
var letters = $('.letters')


/*for(var i = 0; i < letters.length; i++){
	letters[i].addEventListener('click', chooseWord);
}*/
    $(function() { 
	$('.letters').on('click', function() {
	 console.log('i\'ve been clicked')

	})


	function chooseWord(){
   

	}


	})




}