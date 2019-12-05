function collapse_all(parent) {
 
  var id = "container_";
  var i = 0;
  
  while(childExists(parent, id + i)) {
    
    findChildById(parent, id + i).style.display = "none";
    i++;
  }
}

function toggle_display(id) {

  var tog = document.getElementById(id);
  
  if (tog.style.display === "none") { tog.style.display = "inline-block"; }
  else { tog.style.display = "none"; }
}

function childExists(element, id) {
	
	var i;
	var childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return true; }
	}
	return false;
}


function findChildById(element, id) {
	
	var i;
	var childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return childNodes[i]; }
	}
	return null;
}
