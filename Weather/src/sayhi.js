function say() {
	// body...
	var name =
	document.getElementById('name').value;
	var message = "Hi " + name + "!";

	document
	  .getElementsByClassName("test")[0]
	  .innerHTML = message;
}

