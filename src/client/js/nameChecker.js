function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

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

export { checkForName };
