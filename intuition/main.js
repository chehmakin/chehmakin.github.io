var card = document.getElementById('card');
// var click = 0;
// var click__reader = document.getElementById('click');
var card_col = 0;
var card_speed = 0;
var card_col_view = document.getElementById('card__balance');
var level_view = document.getElementById('level');
var level = [
	'2.5 c',
	'3 c',
	'3.5 c'
];


function add_30_card(){
	card_col = 30;
	card_col_view.innerHTML = card_col;
}
function add_60_card(){
	card_col = 60;
	card_col_view.innerHTML = card_col;
}
function add_90_card(){
	card_col = 90;
	card_col_view.innerHTML = card_col;
}

var color = [
	'#000',
	'#fff'
];


function changeColor() {
	card.className = (card.className == 'card' ? 'card_b' : 'card');
// 	var rc = color[ Math.floor(Math.random() * color.length)];
// 	var card = document.getElementById('card');

// 	card.style.background = rc;
// 	// click++;
// 	// click__reader.innerHTML = click;
// 	card_col--;
// 	card_col_view.innerHTML = card_col;
// 	if (card_col == 0) {
// 		randomColor = false;

// 	} 

// 	else{
// 		console.log('OK');
// 	};
}


function add_1s(){
	card_speed = 2500;
	level_view.innerHTML = level[0];
	setInterval(changeColor, card_speed);
}
function add_15s(){
	card_speed = 3000;
	level_view.innerHTML = level[1];
	setInterval(changeColor, card_speed);

}
function add_2s(){
	card_speed = 3500;
	level_view.innerHTML = level[2];
	setInterval(changeColor, card_speed);

}

// document.getElementById('error').style.display = 'block';

// randomColor = false;
