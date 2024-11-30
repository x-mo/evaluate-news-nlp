function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);

    if(isValidUrl(inputText)) {
        alert("VALID!!");
    }
    else {
        alert("Enter a valid URL");
    }
}

function isValidUrl(url) {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    return pattern.test(url);
  }

export { checkForURL };
