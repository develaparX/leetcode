
const palindromeString = (x: number) => {
	const keHuruf = x.toString();
	const splitter = keHuruf.split('')

	for (let i = 0; i < Math.floor(splitter.length / 2); i++) {
		const indexAkhir = splitter.length - 1 - i
		if (splitter[indexAkhir] !== splitter[i]) {
			return false
		}
	}
	return true
}

const palindromeWithoutString = (x: number) => {
	if (x < 0) return false

	const original = x;
	let kebalikan = 0;

	console.log("declare x atau inputan pertama ", x)
	while (x > 0) {
		const digitBelakang = x % 10;
		console.log('digit belakang', digitBelakang);
		kebalikan = kebalikan * 10 + digitBelakang;
		console.log('kebalikan baru', kebalikan);
		x = Math.floor(x / 10)
		console.log('x tiap iterasi', x)
	}

	return original === kebalikan;
}


console.log(palindromeString(121))
console.log(palindromeWithoutString(121)) 
