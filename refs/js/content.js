scroll_iframe = function(scrollToId) {
	
	let scrollTo = document.getElementById(scrollToId);
	scrollTo.scrollIntoView();
}

function smoothScroll(y, x) { window.scroll({ top: y, left: x, behavior: 'smooth' }); }

function toggle_display(toToggle) {
  
	if (toToggle.style.display === "none") { toToggle.style.display = "inline-block"; }
	else { toToggle.style.display = "none"; }
}

function validate_email(email) {
	
	let val = email.value;
	
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))) {
		
		email.style = "border-bottom: 3px solid red;";
		findChildById(email.parentNode, email.id + "-error").style.display = "inline-block";
	}
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