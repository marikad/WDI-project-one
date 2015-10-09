$(function(){
	setup();
})

var setup = function(){
	var words = ['cat', 'dog', 'lizard', 'bunny', 'super'];
	var letters = $('.letters');
	var player = "";


	$('.letters').on('click', function() {
	});
	$('#btn').on('click', function() {
		$('#chosen-word').html($('input').val());
	var secretWord  = words[Math.floor(Math.random() * words.length)];
        
	})  

} 

function chooseLetter(){
	var lettersGuessed = [];
	for(var i = 0; i < lettersGuessed.length; i++){


	}
}

//one player


