/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 *
 */
var array = [];
function modifyArray(nums) {
    nums.forEach(keys => {
        if (keys % 2 === 0) {
            array.push(keys * 2);
        } else if (keys % 2 !== 0) {
            array.push(keys * 3);
        }

    })
    return array;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
