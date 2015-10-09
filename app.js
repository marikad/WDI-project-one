$(function(){
	setup();
})

var setup = function(){
	var words = ['cat', 'dog', 'lizard', 'bunny', 'super'];
	var lettersGuessed = [];
	var letters = $('.letters');
	var player = "";


	$('.letters').on('click', function() {
	});
	$('#btn').on('click', function() {
		var secretWord  = words[Math.floor(Math.random() * words.length)];
		$('#chosen-word').prepend(secretWord);
		$('#btn').hide()
	})

} 

function chooseWord(){

}
