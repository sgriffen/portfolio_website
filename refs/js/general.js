async function update_slideBar(parent, clicked, slideRight, val) {
	
	let i = 0;
	//set all nav elements as inactive
	let id = parent.id + "_" + i;
	let child = findChildById(parent, id);
	while(child != null && child != "") {
		
		child.classList.remove("nav-active");
		
		i++;
		id = parent.id + "_" + i;
		child = findChildById(parent, id);
	}
	i = 0;
	//set all slide headers as inactive
	id = parent.id + "-slide_" + i;
	while(child != null && child != "") {
		
		let header = findChildById(child, id + "-header");
		header.classList.remove("nav-active");
		
		i++;
		id = parent.id + "-slide_" + i;
		child = findChildById(parent, id);
	}
	
	let displayHeader = null;
	let display;
	if (slideRight != null) {
		
		if (slideRight) { /* if sliding right */
			
			//display slide menu
			id = parent.id + "-slide_" + val;
			display = findChildById(parent.parentNode, id);
			displayHeader = findChildById(display, id + "-header");
		} else { /* else if sliding left */
			
			//display top-level nav menu
			id = parent.id.split("-")[0];
			display = findChildById(parent.parentNode, id);
		}
		
		parent.removeEventListener("transitionend", element_display_block(parent));
		display.removeEventListener("transitionend", element_hide(display));
		
		parent.addEventListener("transitionend", element_hide(parent));
		display.addEventListener("transitionend", element_display_block(display));
		
		parent.classList.add("hidden"); /* hide current menu */
		
		await sleep(150); /* wait for transition to be over */
	} else {
		
		id = parent.id.split("-")[0];
		display = findChildById(parent.parentNode, id);
	}
	
	clicked.classList.add("nav-active");
	
	//display desired menu
	display.classList.remove("hidden");
	if (displayHeader != null) { displayHeader.classList.add("nav-active"); }
	
	//set scroll to settings
	document.getElementById("scroll_toChange").value = "nav-slide_" + val + "-display_content_";
	document.getElementById("scroll_associated").value = "sub_" + val + "-";
}
function update_subBar(parent, clicked) {
	
	let idPrefix = parent.id + "_content_";
	let i = 0;
	
	let id = idPrefix + i;
	while(childExists(parent, id)) {
		
		let toUpdate = findChildById(parent, id);
		toUpdate.classList.remove("nav-slide-active");
		
		i++;
		id = idPrefix + i;
	}
	
	clicked.classList.add("nav-slide-active");
}

function update_dropBar_onscroll(toChangePrefix, associatedPrefix) {
	
	let container = document.getElementById("container_content");
	let scrollTop = container.scrollTop + container.offsetTop;
	let clientTop = container.clientTop;
	let topOffsets = [];
	
	let i = 0;
	let toChange = document.getElementById(toChangePrefix + i);
	while(toChange != null) {
		
		toChange.classList.remove("nav-slide-active");
		
		let associated = document.getElementById(associatedPrefix + i + "_header");
		topOffsets.push(Math.round(associated.offsetTop + associated.parentNode.offsetHeight - 90));
		//let rect = findChildById(associated, associatedPrefix + i + "_header").getBoundingClientRect();
		//topOffsets.push(Math.round(findChildById(associated, associatedPrefix + i + "_header").offsetTop));
		i++;
		toChange = document.getElementById(toChangePrefix + i);
	}
	if (scrollTop <= topOffsets[(topOffsets.length - 1)]) { document.getElementById(toChangePrefix + (topOffsets.length - 1)).classList.add("nav-slide-active");  }
	else if (scrollTop > topOffsets[0]) { document.getElementById(toChangePrefix + (0)).classList.add("nav-slide-active"); }
	else {
		for (i = topOffsets.length - 2; i >= 0; i--) {
			
			if (scrollTop > topOffsets[i + 1] && scrollTop <= topOffsets[i]) { 
				document.getElementById(toChangePrefix + (i)).classList.add("nav-slide-active"); 
				break;
			}
		}
	}
}

function collapse_all(parent, idFrom) {
 
	//smoothScroll(0, 0);
	
	let idPrefix = "sub_";
	let i = 0;
	
	let id = idPrefix + i;
	while(childExists(parent, id)) {
		
		let toCollapse = findChildById(parent, id);
		if (toCollapse.id !== idFrom) {
			
			toCollapse.style.display = "none";
		}
		
		i++;
		id = idPrefix + i;
	}
}

function toggle_display(toToggle) {
  
	if (toToggle.style.display == "none") {
		
		let i = 0;
		//hide all content
		let id = "sub_" + i;
		let child = findChildById(toToggle.parentNode, id);
		while(child != null && child != "") {
			
			child.style.display = "none";

			i++;
			id = "sub_" + i;
			child = findChildById(toToggle.parentNode, id);
		}
		
		//display desired content
		toToggle.style.display = "inline-block";
		
		//find active slideBar element
		scroll_to(toToggle.id);
	}
}

function toggle_display_min(toToggle) {
	
	if (toToggle.style.display == "none") { toToggle.style.display = "inline-block"; }
	else { toToggle.style.display = "none"; }
}

function scroll_to(scrollToId) {
	
	let content = document.getElementById(scrollToId);
	content.scrollIntoView({behavior: 'smooth'});
}
function smoothScroll(y, x) { window.scroll({ top: y, left: x, behavior: 'smooth' }); }

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

function mode_switch(node, override) {
	
	document.body.classList.toggle("mode-light");
	node.classList.toggle("mode-light");
	if (document.body.classList.contains("mode-light")) {
		
		node.innerHTML = "Dark Mode";
		if (override) { window.sessionStorage.setItem("com.seangriffen.resources-mode-override", "override-true"); }
		else { window.sessionStorage.setItem("com.seangriffen.resources-mode-override", "override-false"); }
		window.sessionStorage.setItem("com.seangriffen.resources-mode", "mode-light");
	} else {
		
		node.innerHTML = "Light Mode";
		if (override) { window.sessionStorage.setItem("com.seangriffen.resources-mode-override", "override-true"); }
		else { window.sessionStorage.setItem("com.seangriffen.resources-mode-override", "override-false"); }
		window.sessionStorage.setItem("com.seangriffen.resources-mode", "mode-dark");
	}
}

function array_reverse(arr) {
	
	let result = [];
	let i;
	for (i = arr.length; i > 0; i--) { result.push(arr[i - 1]); }
	
	return result;
}

function mode_default(e) {
	
	let curr_mode_override = window.sessionStorage.getItem("com.seangriffen.resources-mode-override");
	let curr_mode = window.sessionStorage.getItem("com.seangriffen.resources-mode");
	if (curr_mode_override == null || curr_mode_override == "" || curr_mode_override == "override-false") { //if there is no mode override or it's false
		if (e.matches && curr_mode != "mode-light") { mode_switch(document.getElementById("switch_mode", false)); } //if system default is light mode, turn page to light mode
		else if (curr_mode == "mode-light") { mode_switch(document.getElementById("switch_mode", false)); } //if mode is currently light, switch to dark
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function element_hide(elem) {
	elem.style.display = "none";
}
function element_display_block(elem) {
	elem.style.display = "block";
}

function element_display_inline(elem) {
	elem.style.display = "inline-block";
}

window.addEventListener("load", () => {
	
	document.querySelector(".display_before").classList.add("loaded_l");
	document.querySelector(".display_after").classList.add("loaded_l");
	document.getElementById("container_content").scrollTop = 0;
	
	document.getElementById("scroll_toChange").value = "nav-slide_0-display_content_";
	document.getElementById("scroll_associated").value = "sub_0-";
	document.getElementById("container_content").addEventListener("scroll", () => { 
		update_dropBar_onscroll(document.getElementById("scroll_toChange").value, document.getElementById("scroll_associated").value); 
	});
});