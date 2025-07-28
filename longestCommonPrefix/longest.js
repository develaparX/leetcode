
function longestCommonPrefix(arr) {
	arr.sort();
	let first = arr[0];
	let last = arr[arr.length - 1];
	let minLength = Math.min(first.length, last.length);

	console.log('ini first :', first);
	console.log('ini last :', last);
	console.log('ini min length :', minLength)

	let i = 0

	while (i < minLength && first[i] === last[i]) {
		i++
	}

	return first.substring(0, i);

}


let arr = ["geekscode", "geeks", "geekbro", "geezler", "geebro"]

console.log(longestCommonPrefix(arr));
