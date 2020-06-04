function addBorder(array) {
    //  write code here.
    const row = arrayAsterisk(array[0])
    var result = []
    result.push(row)
    result.push('*' + array[0] + '*')
    result.push('*' + array[1] + '*')
    result.push(row)
    return result

}

function arrayAsterisk(element) {
    var result = []
    for (var i = 0; i < element.length + 2; i++) {
        result.push('*');
    }
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