import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById('category-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const imageSelect = document.getElementById('image-select');
    const categorySelect = document.getElementById('category-select');

    const image = imageSelect.value;
    const category = categorySelect.value;

    const data = {
        image: image,
        category: category
    };

    const dbRef = ref(database, 'images');
    push(dbRef, data).then(() => {
        console.log('Data saved successfully!');
    }).catch((error) => {
        console.error('Error saving data: ', error);
    });
});

const dbRef = ref(database, 'images');
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});