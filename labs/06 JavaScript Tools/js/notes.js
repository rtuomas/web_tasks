"use strict";


var notes = new Array();
loadList();

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

function addItem() {
	let textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};

	if(isDuplicate(itemText)){
		console.log("löytyy jo");

	} else {
		console.log("uniikki");
		notes.push(newItem);
	}

	displayList();
}

function isDuplicate(text) {
	for(let i = 0;i<notes.length;i++){
		if(notes[i].title == text) {
			notes[i].quantity += 1;
			return true;
		}
	}
	return false;
}



function displayList() {

	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
	saveList();
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

let button = document.getElementById('add');
button.onclick = addItem;
