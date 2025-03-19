const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addtask() {
    if(inputBox.value === '') {
        inputBox.classList.add('highlight');
    setTimeout(() => {
        inputBox.classList.remove('highlight');
    }, 2000);
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }

    inputBox.value = '';
}
