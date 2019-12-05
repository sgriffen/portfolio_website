function toggle_display(id) {

  var tog = document.getElementById(id);
  
  if (tog.style.display === "none") { tog.style.display = "inline-block"; }
  else { tog.style.display = "none"; }
}
