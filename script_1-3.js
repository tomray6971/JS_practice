// function sum(...numarray){
//     let sumarray=[...numarray];
//     let result=0;
//     for(i=0;i<sumarray.length;i++){
//         result+=Number(sumarray[i]);
//     }
//     return result;
// }
function sum(...numarray){
    return result = numarray.reduce((acc1,cur1)=>acc1+cur1,0);
}
  
let input = prompt("寫一個陣列");
if(input!=null){
    let inputarray= input.split(",").map(item=> Number(item.trim()));
    console.log(sum(...inputarray));
}
