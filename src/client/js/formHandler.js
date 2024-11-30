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
    }
}

// Function to send data to the server
async function postData(url, articleUrl) {
    const res = await fetch(url, {
        method: 'POST',
        body: articleUrl
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

