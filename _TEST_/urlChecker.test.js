import { isValidUrl } from "../src/client/js/urlChecker"

describe("Testing the url check functionality", () => {
    
    test("Testing the isValidUrl() function", () => {
        
        const inputUrl = "www.uda city.com";
        const outputResult = false

        expect(isValidUrl(inputUrl)).toEqual(outputResult);

    })});