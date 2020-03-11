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
		
		toToggle.style.display = "inline-block";
		
		let navId = "display_" + toToggle.id.split("_")[1];
		let nav = document.getElementById(navId);
		let navDropIdPrefix = navId + "-drop_content_";
		
		let scrollIdPrefix = toToggle.id + "-";
		
		let i = 0;
		let dropId = navDropIdPrefix + i;
		let scrollId = scrollIdPrefix + i;
		while(childExists(toToggle, scrollId)) {
			
			let dropActive = document.getElementById(dropId);
			if (dropActive != null) {
				let scrollTo = findChildById(toToggle, scrollId);
				if (dropActive.classList.contains("nav-drop-active")) { scrollTo.scrollIntoView({behavior: 'smooth'}); }
			} else {
				document.getElementById("from_name").scrollIntoView({behavior: 'smooth'});
				break;
			}
			
			i++;
			dropId = navDropIdPrefix + i;
			scrollId = scrollIdPrefix + i;
		}
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

function mode_switch(node) {
	
	document.body.classList.toggle("mode-dark");
	node.classList.toggle("mode-dark");
	if (document.body.classList.contains("mode-dark")) {
		
		node.innerHTML = "Light Mode";
		window.localStorage.setItem("com.seangriffen.resources-mode", "mode-dark");
	} else {
		
		node.innerHTML = "Dark Mode";
		window.localStorage.setItem("com.seangriffen.resources-mode", "mode-light");
	}
}

window.addEventListener("load", () => {
	
	document.querySelector(".display_before").classList.add("loaded_l");
	document.querySelector(".display_after").classList.add("loaded_l");
	smoothScroll(0, 0);
});