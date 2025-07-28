function romanSymbol(r: string) {
	if (r === 'I')
		return 1;
	if (r === 'V')
		return 5;
	if (r === 'X')
		return 10;
	if (r === 'L')
		return 50;
	if (r === 'C')
		return 100;
	if (r === 'D')
		return 500;
	if (r === 'M')
		return 1000;
	return -1;

}

function romanToDesimal(s: string) {
	let res = 0



	for (let i = 0; i < s.length; i++) {

		console.log("==========================================================")
		let s1: number = romanSymbol(s[i]);

		console.log(`s1 ${s[i]} iterasi ke ${i}, nilainya ${romanSymbol(s[i])}`)
		if (i + 1 < s.length) {
			let s2: number = romanSymbol(s[i + 1])
			console.log(`s2 iterasi ke ${i},${s[i + 1]} yang nilainya ${romanSymbol(s[i + 1])}`)

			if (s1 >= s2) {
				res += s1;
				console.log(`res iterasi ke ${i}. nilainya ${res}`)
			}
			else {
				res += (s2 - s1);
				i++
			}

		} else {
			res += s1;
		}


	}

	return res;

}

let s = "MMMDCCXXIV";
console.log(romanToDesimal(s))
