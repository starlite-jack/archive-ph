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
