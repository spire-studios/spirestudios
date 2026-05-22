// Secret "spire" sequence trigger
let inputBuffer = "";
const secretCode = "/spire";

document.addEventListener('keydown', (e) => {
    inputBuffer += e.key.toLowerCase();
    
    // Keep buffer short
    if (inputBuffer.length > 10) {
        inputBuffer = inputBuffer.substring(1);
    }

    // Check for the secret word
    if (inputBuffer.includes(secretCode)) {
        window.location.href = "devpage.html";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Also keep the subtle footer link for convenience
    const devTrigger = document.getElementById("dev-trigger");
    if (devTrigger) {
        devTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "devpage.html";
        });
    }

    const favicon = document.getElementById('favicon');
    function setFavicon() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            favicon.href = '../spire_light.png';
        } else {
            favicon.href = '../spire_dark.png';
        }
    }
    setFavicon();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

    // Contact Modal Functionality
    const modal = document.getElementById('contact-modal');
    const btn = document.getElementById('contact-trigger');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});