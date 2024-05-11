function loadFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a text file.');
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

function codeSelectedText() {
    const textContent = document.getElementById('textContent');
    const selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        document.getElementById('codedText').innerText += 'Coded Text: ' + selectedText + '\n';
    } else {
        alert('No text selected.');
    }
}
