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
    let selectedText = window.getSelection().toString();
    if (!selectedText) {
        alert("Please select some text to code.");
        return;
    }
    let code = prompt("Enter a code for the selected text:");
    if (code) {
        const selection = window.getSelection();
        const span = document.createElement('span');
        span.textContent = selectedText;
        span.className = 'code';
        span.style.color = 'purple';
        selection.getRangeAt(0).surroundContents(span);

        let codeDisplay = document.getElementById('codes');
        codeDisplay.innerHTML += `<div class="code-entry"><strong>Code:</strong> ${code}<br><strong>Text:</strong> "${selectedText}"</div>`;
    }
}

function addMemo() {
    let memoText = prompt("Enter a memo:");
    if (memoText) {
        let memoDisplay = document.getElementById('memos');
        memoDisplay.innerHTML += `<div class="memo-entry"><strong>Memo:</strong> ${memoText}</div>`;
    }
}

document.getElementById('fileInput').addEventListener('change', loadFile);

// Additional code to highlight text with different colors based on their coding or memo status
function highlightText() {
    const textBlocks = document.querySelectorAll('#textContent span');
    textBlocks.forEach(block => {
        if (block.classList.contains('code')) {
            block.style.backgroundColor = '#f0eaff';  // Purple background for coded text
        }
        if (block.classList.contains('memo')) {
            block.style.backgroundColor = '#fff3e0';  // Orange background for memos
        }
    });
}
