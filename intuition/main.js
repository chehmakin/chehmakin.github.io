var card = document.getElementById('card');
// var click = 0;
// var click__reader = document.getElementById('click');
var card_col = 0;
var card_col_view = document.getElementById('card__balance');


function add_30(){
	card_col = 30;
	card_col_view.innerHTML = card_col;
}
function add_60(){
	card_col = 60;
	card_col_view.innerHTML = card_col;
}
function add_90(){
	card_col = 90;
	card_col_view.innerHTML = card_col;
}

var color = [
	'#000',
	'#fff'
];


function randomColor() {
	var rc = color[ Math.floor(Math.random() * color.length)];
	var card = document.getElementById('card');

	card.style.background = rc;
	// click++;
	// click__reader.innerHTML = click;
	card_col--;
	card_col_view.innerHTML = card_col;
	if (card_col == 0) {
		randomColor = false;

	} 

	else{
		console.log('OK');
	};
}




// document.getElementById('error').style.display = 'block';

// randomColor = false;