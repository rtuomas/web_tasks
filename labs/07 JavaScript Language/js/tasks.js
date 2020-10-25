// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

function updatePage() {
    // Update the page:
    var message = '';
    var output = document.getElementById('output');
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
}

// Function adds a task to the global array.
function addTask() {
    'use strict';
    var task = document.getElementById('task');
    if (task.value) {
        tasks.push(task.value);
        updatePage();
    }
    // Return false to prevent submission:
    return false;
} // End of addTask() function.

function removeDuplicates(){
    'use strict';
    tasks = [...new Set(tasks)];
    updatePage();
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('duplicate').onclick = removeDuplicates;
} // End of init() function.
window.onload = init;