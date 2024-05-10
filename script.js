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
function applyCode() {
    const codeInput = document.getElementById('codeInput');
    const selectedText = window.getSelection().toString();
    if (!selectedText
