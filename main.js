function addBorder(array) {
    //  write code here.
    const row = arrayAsterisk(array[0])
    let result = []
    result.push('*' + array[0] + '*')
    result.push('*' + array[1] + '*')
    result.push(row)
    result.unshift(row)
    return result

}

//Aditional function to create top and bottom asterisk rows.
function arrayAsterisk(element) {
    let result = []
    for (let i = 0; i < element.length + 2; i++) {
        result.push('*');
    }
    //use join('') (without space bettween apostrophe) to remove comas on the array. 
    return result.join('');
}

/**
/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});