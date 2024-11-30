function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);

    if(isValidUrl(inputText)) {
        return true;
    }
    else {
        alert("Enter a valid URL");
        return false;
    }
}

function isValidUrl(url) {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    return pattern.test(url);
  }

export { checkForURL };
export { isValidUrl };
