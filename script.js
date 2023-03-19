async function getSynonyms() {
    let query = document.getElementById('search-query').value;
    let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
    // console.log('Response is', responseAsJson);
}

// Adds synsets to body (html)
function renderSynsets(synsets) {
    let container = document.getElementById('container');

    container.innerHTML = /*html*/  `   <div>
                                            <p><b>${synsets.length}</b>synonym-sets have been loaded</p>
                                        </div>`;

    for (let i = 0; i < synsets.length; i++) {
        const synset = synsets[i];
        let terms = synset['terms'];     // Is a array
        container.innerHTML += /*html*/ `   <div>
                                                <h3>Synonym-set id ${synset['id']}</h3>
                                            </div>`;

        for (let j = 0; j < terms.length; j++) {
            const term = terms[j];
            container.innerHTML += /*html*/ `   <div>
                                                    <p>${term['term']}</p>
                                                </div>`;
            
        }
        
    }
}