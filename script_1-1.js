let input_num1 = Number(prompt("num1多少"));
let input_num2 = Number(prompt("num2多少"));
let input_op   = prompt("運算符");
caculator(input_num1, input_num2, input_op);
document.getElementById("case1").innerHTML = caculator(input_num1, input_num2, input_op);
function caculator(num1, num2, op){
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 == 0){
                console.log("除數不可以為0");
            }else{
                result = num1 / num2;
            }
            break;
        default:
            result = "運算子不符合規定";
            break;
    }
    console.log(result);
    return(result);
}