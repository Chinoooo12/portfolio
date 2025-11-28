const ADMIN_EMAIL = 'adolfobitar12@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/chin_oart/';

function isAdminLoggedIn() {
    return sessionStorage.getItem('isAdmin') === 'true';
}

function setAdminLoggedIn(isLoggedIn) {
    sessionStorage.setItem('isAdmin', isLoggedIn ? 'true' : 'false');
}

document.getElementById('loginBtn').addEventListener('click', () => {
    if (isAdminLoggedIn()) {
        document.getElementById('adminModal').style.display = 'block';
        addRemoveButtons();
        return;
    }

    const email = prompt('Please enter your email:');
    if (email === ADMIN_EMAIL) {
        setAdminLoggedIn(true);
        document.getElementById('adminModal').style.display = 'block';
        addRemoveButtons();
    } else {
        alert('Access denied.');
    }
});

document.querySelector('#adminModal .close-button').addEventListener('click', () => {
    document.getElementById('adminModal').style.display = 'none';
});

document.getElementById('newWorkForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const workName = document.getElementById('workName').value;
    const creationDate = document.getElementById('creationDate').value;
    const imageUrl = document.getElementById('imageUrl').value;

    const newWork = document.createElement('a');
    newWork.href = INSTAGRAM_URL; 
    newWork.target = '_blank';
    newWork.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = workName;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `<h3>${workName}</h3><p>${creationDate}</p>`;

    newWork.appendChild(img);
    newWork.appendChild(overlay);
    addRemoveButton(newWork);

    document.getElementById('workGrid').appendChild(newWork);

    document.getElementById('adminModal').style.display = 'none';
    document.getElementById('newWorkForm').reset();
});

function addRemoveButton(gridItem) {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        gridItem.remove();
    });
    gridItem.appendChild(removeButton);
}

function addRemoveButtons() {
    if (!isAdminLoggedIn()) return;
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (!item.querySelector('.remove-btn')) {
            addRemoveButton(item);
        }
    });
}

// Add remove buttons on page load if admin is already logged in
if (isAdminLoggedIn()) {
    addRemoveButtons();
}
