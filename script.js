function button1() {
    var input = document.getElementById("inputfieldjs").value;
    var links = input.split(/\r?\n/); 
    for (var i = 0; i < links.length; i++) {
        var trimmedLink = links[i].trim();
        if (trimmedLink) {
            if (!trimmedLink.match(/(https?:\/\/)/)) {
                trimmedLink = 'https://archive.ph/?run=1&url=' + encodeURIComponent(trimmedLink);
            } else {
                trimmedLink = 'https://archive.ph/?run=1&url=' + encodeURIComponent(trimmedLink);
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
