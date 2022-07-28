const sumAll = function(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number" || n1<0 || n2<0){
        return "ERROR";
    }
    let sum = 0;
    let i = n1;
    do{
        sum += i;
        if(n1>n2){
            i--;
        }
        else{
            i++
        }
    }while(i!=n2);
    return sum + n2;
};

// Do not edit below this line
module.exports = sumAll;
