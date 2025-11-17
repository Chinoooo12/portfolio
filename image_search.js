document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const publicationDate = document.getElementById('publication-date').value;
        const category = document.getElementById('category').value;

        console.log('Search criteria:', { publicationDate, category });

        const dataToSendToFirebase = {
            searchDate: new Date().toISOString(),
            query: {
                publicationDate,
                category
            }
        };

        console.log('Data to be sent to Firebase:', JSON.stringify(dataToSendToFirebase, null, 2));

        // Simulate showing search results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>Searching for images published on <strong>${publicationDate}</strong> in the category <strong>${category}</strong>.</p><p>Check the console for the data that would be sent to Firebase.</p>`;
    });
});
