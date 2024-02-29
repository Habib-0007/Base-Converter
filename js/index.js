let baseNum = document.querySelector(".base-num");
let inputBase = document.querySelector("#base-input");
let outputBase = document.querySelector("#base-output");
let convertBtn = document.querySelector(".conv-container button");
let convRes = document.querySelector(".result");

var body = document.body;

body.style.height = `${window.innerHeight}px`;

let convertNumber = () => {
	let numVal = baseNum.value;
	let inputBaseVal = inputBase.value;
	let outputBaseVal = outputBase.value;
	let result = "";
	if (inputBaseVal == "BIN") {
		if (outputBaseVal == "BIN") {
			result = parseInt(numVal, 2).toString(2);
		} else if (outputBaseVal == "OCT") {
			result = parseInt(numVal, 2).toString(8);
		} else if (outputBaseVal == "DEC") {
			result = parseInt(numVal, 2).toString(10);
		} else if (outputBaseVal == "HEX") {
			result = parseInt(numVal, 2).toString(16);
		}
	} else if (inputBaseVal == "OCT") {
		if (outputBaseVal == "BIN") {
			result = parseInt(numVal, 8).toString(2);
		} else if (outputBaseVal == "OCT") {
			result = parseInt(numVal, 8).toString(8);
		} else if (outputBaseVal == "DEC") {
			result = parseInt(numVal, 8).toString(10);
		} else if (outputBaseVal == "HEX") {
			result = parseInt(numVal, 8).toString(16);
		}
	} else if (inputBaseVal == "DEC") {
		if (outputBaseVal == "BIN") {
			result = parseInt(numVal, 10).toString(2);
		} else if (outputBaseVal == "OCT") {
			result = parseInt(numVal, 10).toString(8);
		} else if (outputBaseVal == "DEC") {
			result = parseInt(numVal, 10).toString(10);
		} else if (outputBaseVal == "HEX") {
			result = parseInt(numVal, 10).toString(16);
		}
	} else if (inputBaseVal == "HEX") {
		if (outputBaseVal == "BIN") {
			result = parseInt(numVal, 16).toString(2);
		} else if (outputBaseVal == "OCT") {
			result = parseInt(numVal, 16).toString(8);
		} else if (outputBaseVal == "DEC") {
			result = parseInt(numVal, 16).toString(10);
		} else if (outputBaseVal == "HEX") {
			result = parseInt(numVal, 16).toString(16);
		}
	}
	convRes.textContent = `${inputBaseVal}: ${numVal} equals ${outputBaseVal}:
	${result}`;
};

convertBtn.addEventListener("click", convertNumber);
