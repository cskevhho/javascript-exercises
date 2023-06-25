const removeFromArray = function(arr, ...args) {
    
    const tempArr = [];

    arr.forEach((item) => {
        if (!args.includes(arr)) {
            tempArr.push(item);
        }
    });
}
// Do not edit below this line
module.exports = removeFromArray;
