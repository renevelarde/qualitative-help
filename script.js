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

// Function to handle the application of codes to the selected text
function applyCode() {
    let selectedText = window.getSelection().toString();
    if (!selectedText) {
        alert("Please select some text to code.");
        return;
    }
    let code = prompt("Enter a code for the selected text:");
    if (code) {
        let codedText = document.createElement('span');
        codedText.textContent = selectedText;
        codedText.className = 'code';
        codedText.style.color = 'purple'; // Applying purple color to coded text
        window.getSelection().getRangeAt(0).surroundContents(codedText);

        let codeDisplay = document.getElementById('codes');
        codeDisplay.innerHTML += `<div class="code-entry">${code}: "${selectedText}"</div>`;
    }
}

// Function to add memos
function addMemo() {
    let memoText = prompt("Enter a memo:");
    if (memoText) {
        let memoDisplay = document.getElementById('memos');
        memoDisplay.innerHTML += `<div class="memo-entry">${memoText}</div>`;
    }
}

document.getElementById('fileInput').addEventListener('change', loadFile);
