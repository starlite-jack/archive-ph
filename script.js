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
    
});

function clearthetext(){
    document.getElementById('inputfieldjs').value = ''
}

function pastetext() {
    var textarea = document.querySelector('textarea');
    navigator.clipboard.readText()
        .then(text => {
            textarea.value = text;
        })
        .catch(err => {
            prompt("looks like we have encountered an error\nplease copy and search the error below", err)
        });
}

function focusAndOpenKeyboard(textarea) {
  // focus
  textarea.focus();

  // try to place the caret at the end to make it obvious
  try {
    var len = textarea.value.length;
    // setSelectionRange works on modern browsers
    textarea.setSelectionRange(len, len);
  } catch (e) {
    // ignore if not supported
  }

  // Some mobile browsers are picky; doing a tiny timeout and a second focus can help.
  // This is still executed inline within a user gesture (because callers will call it from the gesture).
  setTimeout(function () {
    try { textarea.focus(); } catch (e) {}
  }, 50);
}

function setupQuickKeyboard() {
  var textarea = document.getElementById('inputfieldjs');
  if (!textarea) return;

  // Handler that runs once on the first user gesture (touchend/click/keydown)
  var oneTimeHandler = function (ev) {
    // If event is a key event and it's not from user (rare), still try.
    // Prevent default when touchend so some browsers treat it as a gesture.
    try { ev.preventDefault(); } catch (e) {}

    focusAndOpenKeyboard(textarea);

    // remove listeners after first use
    window.removeEventListener('touchend', oneTimeHandler);
    window.removeEventListener('click', oneTimeHandler);
    window.removeEventListener('keydown', oneTimeHandler);
  };

  // Add listeners: touchend + click + keydown to cover most ways user can "interact"
  window.addEventListener('touchend', oneTimeHandler, { passive: false });
  window.addEventListener('click', oneTimeHandler, { passive: true });
  window.addEventListener('keydown', oneTimeHandler, { passive: true });

  // Optional: if you want a visible hint for users you can show a small overlay
  // that says "Tap to start" and then hide it in the handler above.
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup the one-tap behavior
  setupQuickKeyboard();

  // Optional: if you'd prefer to auto-focus on desktop right away:
  // document.getElementById('inputfieldjs').focus();
});
