(function(){
	
}())

function pixel(id) {
	var counter = new Image();
	counter.addEventListener('load', () => counter.style = 'width:0;height:0;position:absolute;visibility:hidden;');
	counter.src = 'http://rs.mail.ru/' + id + '.gif';
}