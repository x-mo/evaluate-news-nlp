// Function that checks the URL
import { checkForURL } from './urlChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverEndpoint = '/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('urlInput').value;

    // Check the submitted URL.
    const isValidUrl = checkForURL(formText);

    // Check if the URL is valid
    if (isValidUrl) {
        // If the URL is valid, send it to the server
        console.log("::: Form Submitted :::")
        postData(serverEndpoint, formText)
        .then(function (data){
            resultsDiv.innerHTML = ''
            resultsDiv.appendChild(createResultViews(data))
        })
    }
}

function createResultViews(data) {
    const documentFragment = document.createDocumentFragment();
    
    const hConfidence = document.createElement('h1')
    hConfidence.textContent = `Confidence: ${data.confidence}`;
    documentFragment.appendChild(hConfidence);
    
    const hAgreement = document.createElement('h1')
    hAgreement.textContent = `Agreement: ${data.agreement}`;
    documentFragment.appendChild(hAgreement);

    const hIrony = document.createElement('h1')
    hIrony.textContent = `Irony: ${data.irony}`;
    documentFragment.appendChild(hIrony);

    const hSubjectivity = document.createElement('h1')
    hSubjectivity.textContent = `Subjectivity: ${data.subjectivity}`;
    documentFragment.appendChild(hSubjectivity);

    const hSnippet = document.createElement('h1')
    hSnippet.textContent = `Snippet: ${data.snippet}`;
    documentFragment.appendChild(hSnippet);

    
    return documentFragment;
}


const resultsDiv = document.getElementById('results');

// Function to send data to the server
async function postData(url, articleUrl) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "article_url": articleUrl}),
    });
    
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

// Export the handleSubmit function
export { handleSubmit };

