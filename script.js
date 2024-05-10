// script.js
function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const textContent = document.getElementById('textContent');
        textContent.innerHTML = e.target.result.replace(/\n/g, '<br>').replace(/(.+?)(<br>|$)/g, "<span>$1</span><br>");
    };
    reader.readAsText(file);
}

function codeSelectedText() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    let span = document.createElement("span");
    span.className = "coded";
    selection.getRangeAt(0).surroundContents(span);
    let codedText = selection.toString();
    document.getElementById('codedTextList').innerHTML += `<li>Coded Text: ${codedText}</li>`;
}
