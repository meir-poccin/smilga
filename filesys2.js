const {readFile, writeFile} = require('fs')

readFile('./test1.txt', 'utf8', (err, result) => {
	if(err){
		console.log(err);
		return;
	}
	const first = result;
	readFile('./test2.txt', 'utf8', (err, result) => {
	if(err){
		console.log(err);
		return;
	}
	const second = result;
	writeFile('test4.txt', `result is ${first}, ${second}`,
		{flag:'a'}, (err, result) =>{
			if(err){
		console.log(err);
		return;
	}
	console.log(result)
		})
	
})
})