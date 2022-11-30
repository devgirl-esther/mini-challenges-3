/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    //account for if a user inputs a negative integer
    let num = Number(value)
    if(num < 0){
        return "invalid"
    }
    //convert number to binary
let binary = num.toString(2);
console.log(binary)
// let padBinary = '00'+ binary
let padBinary = binary.padStart(8, 0);
//let padBinary = padStart(3,"00")
console.log(padBinary);
//reverse the converted number
let reversebinary = padBinary.split('').reverse();
//join and then turn to DECIMAL number
let binaryString = reversebinary.join('')
let finalNumber = parseInt(binaryString,2)
let final = `${finalNumber}`
return final
}
console.log(binaryReversal("4567"))
module.exports = binaryReversal;
