
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');
let header = document.createElement('h1');

list.innerHTML = `
<tr>
    <th>Title</th>
    <th>Year</th>
 </tr>
`;

for (var i=0; i < books.length; i++) {
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	td1.innerHTML = books[i].title;
	td2.innerHTML = books[i].year;
	tr.appendChild(td1);
	tr.appendChild(td2);
	list.appendChild(tr);

	tr.onclick = () => {
		header.innerHTML = td1.innerText;
	}

}
document.body.appendChild(header);
document.body.appendChild(list);