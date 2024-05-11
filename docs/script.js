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

function showTab(tabName) {
    const tabs = document.querySelectorAll('.container');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabName ? 'block' : 'none';
    });
}

function applyCode() {
    const codeInput = document.getElementById('codeInput');
    const codeValue = codeInput.value;
    if (!codeValue) {
        alert('Please enter a code.');
        return;
    }
    const selectedText = window.getSelection().toString();
    const codeDisplay = document.getElementById('codes');
    codeDisplay.innerHTML += `<div><b>Code:</b> ${codeValue}<br><b>Text:</b> "${selectedText}"</div>`;
    codeInput.value = ''; // Clear input after submitting
}

function addMemo() {
    const memoInput = document.getElementById('memoInput');
    const memoText = memoInput.value;
    if (!memoText) {
        alert('Please enter a memo.');
        return;
    }
    const memoDisplay = document.getElementById('memos');
    memoDisplay.innerHTML += `<div><b>Memo:</b> ${memoText}</div>`;
    memoInput.value = ''; // Clear textarea after submitting
}

document.getElementById('fileInput').addEventListener('change', loadFile);
