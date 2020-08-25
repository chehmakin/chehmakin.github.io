// Объявление канваса
const canvas = document.getElementById('mainCanvas');
const cntx = canvas.getContext('2d');


// Размер ячейки
let box = 32;

// Текущий счет
let score = 0;

// Рандомное появление еды
let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

// Появление змейки
let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box,
}; 

// Картинка фона
const ground = new Image();
ground.src = "https://www.rokate.ru/sites/default/files/wallpaper/models/134346.jpg";

// Картинка еды
const foodImg = new Image();
foodImg.src = "food.png";

// Проверка нажатия на кнопку

document.addEventListener('keydown', direction);

let dir;

function direction(event) {

	if (event.keyCode == 37 && dir != 'right') {
		dir = 'left';
	}
	else if (event.keyCode == 38 && dir != 'down') {
		dir = 'up';
	}
	else if (event.keyCode == 39 && dir != 'left') {
		dir = 'right';
	}
	else if (event.keyCode == 40 && dir != 'up') {
		dir = 'down';
	}

};

function eatTail(head, arr){
	for(let i = 0; i < arr.length; i++){
		if (head.x == arr[i].x && head.y == arr[i].y) {
			clearInterval(game);
		}
	}
}

// Функция появления всего
function mainDraw() {
	// Отображение фона
	cntx.drawImage(ground, 0, 0);
	// Отображение еды
	cntx.drawImage(foodImg, food.x, food.y);
	// Отображение змейки
	for(i = 0; i < snake.length; i++) {
		cntx.fillStyle = i == 0 ? 'green' : '#032149';
		cntx.fillRect(snake[i].x, snake[i].y, box, box);
	}
	// Отображение текущего рекорда
	cntx.fillStyle = '#032149';
	cntx.font = '50px Arial';
	cntx.fillText(score, box , box * 1.5);
	// Передвижение змейки
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// Съедания еды
	if (snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 1)) * box,
		};
	} else {
		snake.pop();
	}

	if (snakeX < box || snakeX > box * 17 || snakeY < box || snakeY > box * 17) {
		clearInterval(game);
	};

	if (dir == 'left') snakeX -= box;
	if (dir == 'right') snakeX += box;
	if (dir == 'up') snakeY -= box;
	if (dir == 'down') snakeY += box;

	let newHead = {
		x: snakeX,
		y: snakeY
	};

	eatTail(newHead, snake);

	snake.unshift(newHead);

}

function savescore() {
	localStorage.setItem("Рекорд", score);

}

function showscore() {
	document.getElementById('score').innerHTML = localStorage.getItem("Рекорд");
}

var NAVIGATION = [37, 38, 39, 40];

document.body.addEventListener("keydown", function(event) {
	if (-1 != NAVIGATION.indexOf(event.keyCode))
		event.preventDefault();
});


// Постоянный вызов функции появления всего
let game = setInterval(mainDraw, 100);
setInterval(showscore, 100);