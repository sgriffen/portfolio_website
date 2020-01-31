function collapse_all(parent, idFrom) {
 
  var idPrefix = "container_";
  var i = 0;
  
  var id = idPrefix + i;
  while(childExists(parent, id)) {
    
    var toCollapse = findChildById(parent, id);
    if (toCollapse.id !== idFrom) { toCollapse.style.display = "none"; }
    
    i++;
    id = idPrefix + i;
  }
}

function toggle_display(toToggle) {
  
  if (toToggle.style.display === "none") { toToggle.style.display = "inline-block"; }
  else { toToggle.style.display = "none"; }
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
