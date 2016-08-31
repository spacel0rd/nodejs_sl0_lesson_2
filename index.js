/**
 * Created by sl0 on 31.08.2016.
 */

var read = require('read');

read({ prompt : 'Введите число (1 или 2) ' }, function (err, user) {
		console.log(user);
		process.stdin.destroy();
})
 