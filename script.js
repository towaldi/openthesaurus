async function getSynonyms() {
    let url = 'https://www.openthesaurus.de/synonyme/search?q=test&format=application/json';
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
    // console.log('Response is', responseAsJson);
}

// Adds synsets to body (html)
function renderSynsets(synsets) {
    let container = document.getElementById('container');

    container.innerHTML = /*html*/  `<div>
        <p><b>${synsets.length}</b>synonyms have been loaded</p>
    </div>`;
}