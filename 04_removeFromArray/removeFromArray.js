const removeFromArray = function(array, ...num) {
    let pos = 0;
    let newArray;
    for(let j=0; j<num.length;j++){
        for(let i=0; i<array.length;i++){
            if(array[i]=== num[j]){
                pos = i;
                newArray = array.splice(pos, 1);
            }
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
