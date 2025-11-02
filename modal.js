
function setupModal() {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('aboutMeBtn');
    const span = document.getElementsByClassName('close-button')[0];

    if (btn) {
        btn.onclick = function(event) {
            event.preventDefault(); 
            modal.style.display = 'block';
        }
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', setupModal);
