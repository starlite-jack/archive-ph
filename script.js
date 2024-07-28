function button1() {
    var input = document.getElementById("inputfieldjs").value;
    var links = input.split(/\r?\n/); 
    for (var i = 0; i < links.length; i++) {
      var trimmedLink = links[i].trim();
      if (trimmedLink) {
        if (!trimmedLink.match(/(https?:\/\/)/)) {
          trimmedLink = 'https://archive.ph/?run=1&url=' + trimmedLink; 
        }
        window.open(trimmedLink, '_blank');
      }
    }
  } 
  
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    let textarea = document.getElementById('inputfieldjs');
  
    if (textarea) {
      textarea.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && !e.shiftKey && !isMobileDevice()) { 
          e.preventDefault(); 
          button1();
        }
      });
    }
  });
  
  if (isMobileDevice()) {
  }
  
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
