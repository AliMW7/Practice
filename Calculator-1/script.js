const inpNum = function(num) {
    let inputVal =  document.getElementById('inp');
    inputVal.value += num.toString();

};


const plusOp = function(){
    let inputVal =  document.getElementById('inp');
    inputVal.value += "+";

};
const clearAll = function(){
    let inputVal =  document.getElementById('inp');
    inputVal.value = "";

};
const eq = function(){
    let inputVal =  document.getElementById('inp');
    var num1 = '';
    var num2 = '';
    var firstNum = false;
    for (let i = 0; i < inputVal.value.length; i++) {
        if (!isNaN(Number(inputVal.value[i])) && !firstNum) {
            num1 += inputVal.value[i]
            console.log(num1);
        }else if(isNaN(Number(inputVal.value[i]))){
            firstNum = true;
        }else{
            num2 += inputVal.value[i];
        }

    }
    inputVal.value = Number(num1) + Number(num2);



}


var inpNumber = 0;



