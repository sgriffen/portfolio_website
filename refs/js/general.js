function update_navBar(parent, clicked, hasDrop, drop_associatedId) {
	
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
		
		document.getElementById("scroll_toChange").value = dropContainer.id + "_content_";
		document.getElementById("scroll_associated").value = drop_associatedId + "-";
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

function update_dropBar_onscroll(toChangePrefix, associatedPrefix) {
	
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
	let clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
	let topOffsets = [];
	
	let i = 0;
	let toChange = document.getElementById(associatedPrefix + i);
	while(toChange != null) {
		
		toChange.classList.remove("nav-drop-active");
		
		let rect = findChildById(document.getElementById(associatedPrefix + i), associatedPrefix + i + "_header").getBoundingClientRect();
		topOffsets.push(Math.round((rect.top + scrollTop - clientTop)));
		
		i++;
		toChange = document.getElementById(toChangePrefix + i);
	}
	
	if (scrollTop < topOffsets[0]) { document.getElementById(toChangePrefix + 0).classList.add("nav-drop-active");  }
	else if (scrollTop >= topOffsets[topOffsets.length - 1]) { document.getElementById(toChangePrefix + (topOffsets.length - 1)).classList.add("nav-drop-active"); }
	else {
		for (i = 1; i < topOffsets.length; i++) {
			
			if (scrollTop >= topOffsets[i - 1] && scrollTop < topOffsets[i]) { 
				document.getElementById(toChangePrefix + i).classList.add("nav-drop-active"); 
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
				document.getElementById("from_name-label").scrollIntoView({behavior: 'smooth'});
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
	
	document.getElementById("scroll_toChange").value = "display_0-drop_content_";
	document.getElementById("scroll_associated").value = "sub_0-";
	window.addEventListener("scroll", () => { 
		update_dropBar_onscroll(document.getElementById("scroll_toChange").value, document.getElementById("scroll_associated").value); 
	});
});