var card = document.getElementById('card');
// var click = 0;
// var click__reader = document.getElementById('click');
var card_col = 0;
var card_speed = 0;
var card_col_view = document.getElementById('card__balance');
var level = [
	'Тяжело',
	'Средне',
	'Легко'
];

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


function add_1s(){
	card_speed = 1000;
	level_view.innerHTML = level[0];
	setInterval(randomColor, card_speed);
}
function add_15s(){
	card_speed = 1500;
	level_view.innerHTML = level[1];
	setInterval(randomColor, card_speed);

}
function add_2s(){
	card_speed = 2000;
	level_view.innerHTML = level[2];
	setInterval(randomColor, card_speed);

}

// document.getElementById('error').style.display = 'block';

// randomColor = false;
