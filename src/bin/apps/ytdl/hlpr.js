function bs(arr) {
	var i, j, temp;
	var swapped, n = arr.length
	for (i = 0; i < n - 1; i++) {
		swapped = false;
		for (j = 0; j < n - i - 1; j++) {
			if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (swapped == false) break;
	}
	return arr
}


module.exports = {
	bs : bs
}