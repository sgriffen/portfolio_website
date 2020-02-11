function update_navBar(parent, clicked, hasDrop) {
	
	let idPrefix = "display_";
	let i = 0;
	
	let id = idPrefix + i;
	while(childExists(parent, id)) {
		
		let toUpdate = findChildById(parent, id);
		toUpdate.classList.remove("nav-active");
		
		let dropContainerId = id + "-drop";
		if (childExists(toUpdate, dropContainerId)) {
			
			let child = findChildById(toUpdate, dropContainerId);
			child.style.display = "none";
		}
		
		i++;
		id = idPrefix + i;
	}
	
	clicked.classList.add("nav-active");
	if (hasDrop) {
		
		let dropContainer = findChildById(clicked, clicked.id + "-drop");
		dropContainer.style.display = "block";
	}
}
function update_dropBar(parent, clicked) {
	
	let idPrefix = parent.id + "_content_";
	let i = 0;
	
	let id = idPrefix + i;
	while(childExists(parent, id)) {
		
		let toUpdate = findChildById(parent, id);
		toUpdate.classList.remove("nav-drop-active");
		
		i++;
		id = idPrefix + i;
	}
	
	clicked.classList.add("nav-drop-active");
}

function collapse_all(parent, idFrom) {
 
	//window.scroll({top: 0, left: 0, behavior: 'smooth'});
	
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
  
	if (toToggle.style.display === "none") {
		
		toToggle.style.display = "inline-block";
	}
}

function scroll_to(scrollToId, subId) {
	
	document.getElementById(scrollToId).contentWindow.scroll_iframe(subId);
	document.getElementById(scrollToId).scrollIntoView();
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

window.addEventListener("load", () => {
	document.querySelector(".display_before").classList.add("loaded_l");
	document.querySelector(".display_after").classList.add("loaded_l");
});