function button1() { 
    var input = document.getElementById("inputfieldjs").value;
    var links = input.split(/\r?\n/); 
    for (var i = 0; i < links.length; i++) {
        var trimmedLink = links[i].trim();
        if (trimmedLink) {
            if (!trimmedLink.match(/(https?:\/\/)/)) {
                trimmedLink = 'https://archive.ph/submit/?url=' + encodeURIComponent(trimmedLink);
            } else {
                trimmedLink = 'https://archive.ph/submit/?url=' + encodeURIComponent(trimmedLink);
            }
            try {
                window.open(trimmedLink, '_blank');
            } catch (error) {
                alert('Failed to open link: ', trimmedLink, error);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById("inputfieldjs");
  if (textarea) {
    textarea.focus();
  }
});

function clearthetext(){
    document.getElementById('inputfieldjs').value = ''
}

function pastetext() {
  const textarea = document.getElementById('inputfieldjs');
  if (!textarea) return;

  textarea.focus();

  setTimeout(() => {
    navigator.clipboard.readText()
      .then(text => {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const before = textarea.value.substring(0, start);
        const after = textarea.value.substring(end);
        textarea.value = before + text + after;
        const newPos = start + text.length;
        textarea.setSelectionRange(newPos, newPos);
        textarea.focus();
      })
      .catch(err => {
        prompt("looks like we have encountered an error\nplease copy and search the error below", err);
      });
  }, 50);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    const focusable = [...document.querySelectorAll('[tabindex]:not([tabindex="-1"])')]
      .sort((a, b) => a.tabIndex - b.tabIndex);

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }

    else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

