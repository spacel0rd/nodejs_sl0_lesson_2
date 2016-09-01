/**
 * Created by sl0 on 31.08.2016.
 */

var read = require('readline');
var file = require('minimist')(process.argv.slice(2));
var fs = require('fs');


function rand_num() {
	return Math.floor(Math.random() * 2) + 1;
}

var rl = read.createInterface({
	input: process.stdin,
	output: process.stdout
});

var args = require('minimist')(process.argv.slice(2));
var file_stat = (args.file) ? args.file : 'stat.txt';

//---------------------------------------------------
rl.write('Введите число (1 или 2) или 3 для выхода\n');

rl.on('line', function (cmd) {
	var answer = rand_num();
	if (cmd == answer) {
		console.log('Congratulation! You win.');
		fs.appendFile(file_stat, 'win\n', function (err) {
			if (err)
				throw err;
		});
	}
	else if (cmd == 3) {
		console.log('It is the end.');
		this.close(); // закрываем обработчик
	}
	else if (cmd > 2 || cmd < 1) {
		console.log('Только 1 или 2');
	}
	else {
		console.log('Sorry. You lose.');
		fs.appendFile(file_stat, 'lose\n', function (err) {
			if (err)
				throw err;
		});
	}

});
//---------------------------------------------------


fs.stat(file_stat, function (err, file) {
	if (err == null) {
		console.log('File exists');
	}
	else if (err.code == 'ENOENT') {
		fs.writeFile(file_stat, "", function (err) {
			if (err) throw err;
			console.log("The file was created!");
		});
	} else {
		console.log('Some other error: ', err.code);
	}
});

