function message_send(elements) {
	
	let submit_but = document.getElementById("send_submit");
	let feedback = document.getElementById("send_feedback");
	
	submit_but.disabled = true;
	submit_but.value = "Sending...";
	submit_but.style = "background-color: #87CEEB"; //Background border color is light-blue;
	
	let send_subject = "Portfolio Contact Alert";
	let send_name = elements.namedItem("from_name").value;
	let send_email = elements.namedItem("from_email").value;
	let send_message = elements.namedItem("from_message").value;
//	let data_payload = send_message;
	let data_payload = "Contact name: [\n\t" + send_name 
		+ "\n]\nContact-back email: [\n\t" + send_email 
		+ "\n]\nMessage: [\n\t" + send_message 
		+ "\n]";
	
	let data = {
		"access_token": "b1suhx27u32o1n3jryuxxjl6",
		"subject": send_subject,
		"text": data_payload
	};
	let send_payload = message_convert(data);
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) { message_success(this); }
		else if (this.readystate === 4) { message_error(this); }
	}
	
	xhr.open("POST", "https://postmail.invotes.com/send", true);
	
	xhr.timeout = 10000;
	xhr.ontimeout = function(e) { message_error(this) };
	xhr.onerror = function(e) { message_error(this) };
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(send_payload);
	
	return false;
}

function message_convert(data) {
	
	let form_data = [];
    for (var key in data) { form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key])); }

	return form_data.join("&");
}

function message_success(xhr) {
	
	let submit_but = document.getElementById("send_submit");
	let feedback = document.getElementById("send_feedback");
	
	submit_but.value = "Message Sent :D";
	submit_but.style = "background-color: #4CAF50;"; //background color is Green
	
	document.getElementById("from_name").value = "";
	document.getElementById("from_email").value = "";
	document.getElementById("from_message").value = "";
	
	submit_but.disabled = false;
}

function message_error(xhr) {
	
	let submit_but = document.getElementById("send_submit");
	let feedback = document.getElementById("send_feedback");
	
	submit_but.value = "Message unable to send D:";
	submit_but.style = "background-color: #B22222;"; //background color is FireBrick

	submit_but.disabled = false;
}
