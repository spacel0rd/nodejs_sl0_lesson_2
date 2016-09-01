/**
 * Created by sl0 on 31.08.2016.
 */

var read = require('readline');


function rand_num() {
	return Math.floor(Math.random() * 2) + 1;
}

var rl = read.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.write('Введите число (1 или 2) или 3 для выхода\n');

rl.on('line', function(cmd) {
	var answer = rand_num();
	if (cmd == answer) {
		console.log('Congratulation! You win.');
	}
	else if (cmd == 3) {
		console.log('It is the end.');
		this.close(); // закрываем обработчик
	}
	else if (cmd > 2 || cmd < 1 ){
		console.log('Только 1 или 2');
	}
	else {console.log('Sorry. You lose.');}
	
});

/*

		var answer = rand_num();
		if (user_num == answer) {
			console.log('Congratulation! You win.');
		}
		else if (user_num == 3) {
			console.log('dd');
		}
		else {
			console.log('Sorry. You lose.');
		}
*/


