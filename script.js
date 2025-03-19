const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addtask() {
    if(inputBox.value === '') {
        alert('You must add a task!')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//save the list in local storage
let saveData = () =>{
    localStorage.setItem('data', listContainer.innerHTML)
}

//show the list items on the browser after refreshing
let showTask = () => listContainer.innerHTML = localStorage.getItem('data');

showTask();