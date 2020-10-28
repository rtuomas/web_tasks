//console.log('page loaded');

console.log(document);

document.getElementById('userForm').oninput = function() {
	console.log('save');
	// get a DOM object representing a form field.
	const name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;

	const email = document.querySelector('#userForm input[type="email"]').value;
	const password = document.querySelector('#userForm input[type="password"]').value;

	const paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[0].innerHTML = email;
	paragraphs[1].innerHTML = password;
};

