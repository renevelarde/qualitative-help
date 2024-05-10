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
    if (!selectedText) {
        alert('Please select text to code.');
        return;
    }
    const codeValue = codeInput.value;
    if (!codeValue) {
        alert('Please enter a code.');
        return;
    }
    const codeList = document.createElement('div');
    codeList.innerHTML = `<strong>${codeValue}</strong>: ${selectedText}`;
    document.getElementById('codePanel').appendChild(codeList);
    codeInput.value = '';
}
function addMemo() {
    const memoInput = document.getElementById('memoInput');
    const memoValue = memoInput.value;
    if (!memoValue) {
        alert('Please enter a memo.');
        return;
    }
    const memoList = document.createElement('div');
    memoList.textContent = memoValue;
    document.getElementById('memos').appendChild(memoList);
    memoInput.value = '';
}
