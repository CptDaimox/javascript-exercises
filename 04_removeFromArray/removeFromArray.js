const removeFromArray = function(array, ...values) {
    // for (const element of values){
    //   let index = array.indexOf(element)
    //   if (index != -1) array.splice(index, 1)
    // }
    // return array
    return array.filter(val => !values.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
