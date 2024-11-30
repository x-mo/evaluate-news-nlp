import { createInfoText } from "../src/client/js/formHandler"

describe("Testing the concatenation functionality", () => {
    
    test("Testing the createInfoText() function", () => {
        
        const input1 = "Test Label"
        const input2 = "Test Value"
        const output = "Test Label: Test Value"
        
        expect(createInfoText(input1, input2)).toEqual(output);
    })});