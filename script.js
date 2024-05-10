// script.js
function loadFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file.');
        return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const textContent = document.getElementById('textContent');
        textContent.innerText = e.target.result;
    };
    reader.readAsText(file);
}

function showCodeBox() {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const codeBox = document.getElementById('codeBox');
        codeBox.style.display = 'block';
    }
}

function applyCode() {
    const codeInput = document.getElementById('codeInput');
    const codeValue = codeInput.value;
    if (!codeValue) {
        alert('Please enter a code.');
        return;
    }
    const selectedText = window.getSelection().toString();
    const codeList = document.getElementById('codeList');
    codeList.innerHTML += `<div><b>${codeValue}</b>: ${selectedText}</div>`;
    document.getElementById('codeBox').style.display = 'none';
    codeInput.value = '';
}
