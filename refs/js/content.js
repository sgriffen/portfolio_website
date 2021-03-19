function validate_input_email(input) {
	
	let label = findChildById(input.parentNode, input.id + "-label");
	
	let val = input.value;
	let inputPattern = input.pattern;

	let pattern = "^";
	pattern += inputPattern;
	pattern += "$";

	let regExp = new RegExp(pattern);
	if (!(regExp.test(val))) {

		input.style.borderColor = "#B22222;"; //border color is FireBrick
		label.innerHTML = "Email - user@domain.com";
		label.style.color = "#B22222"; //text color is FireBrick
	} else {

		input.style.borderColor = "";
		label.innerHTML = "Your email";
		label.style.color = "inherit";
	}
	
//	let val = input.value.toLowerCase();
//	if (!val.includes("@") || !val.includes(".")) {
//		
//		input.style.borderColor = "#B22222;"; //border color is FireBrick
//		label.innerHTML = "Email - user@domain.com";
//		label.style.color = "#B22222"; //text color is FireBrick
//	} else {
//		
//		input.style.borderColor = "";
//		label.innerHTML = "Your email";
//		label.style.color = "inherit";
//	}
}

function childExists(element, id) {
	
	let i;
	let childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return true; }
	}
	return false;
}


function findChildById(element, id) {
	
	let i;
	let childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return childNodes[i]; }
	}
	return null;
}