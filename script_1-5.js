//Twosun解法1
// // const nums = [1,2,3,4,5,6,7,8,9];
// let target = 0;
// target = Number(prompt("請輸入target之值 : "));
// let output = twosum(nums ,target);
// console.log(output);

// function twosum(numbers ,input){
//     let result = nums.map(function(nowvalue,nowindex){
//         for(i=0;i<numbers.length;i++){
//             if(i==nowindex){
//                 continue;
//             }else if(input == nowvalue+numbers[i]){
//                 return [nowindex, i];
//             }
//         };
//     }
//     )
//     return result.filter(pair => pair !== undefined)[0];
// }

//Twosun解法2 優解
// let numbers1 = [1,7,8,9,8,10,11,15,7]
// let target1 = 15
// console.log(twosum(numbers1,target1))
// function twosum(numbers,target){
//   const numarr = {};
//   const result = numbers.reduce((acc,cur,i)=>{
//     if(acc.length>0) return acc;
//     const complement = target - cur;
//     if(complement in numarr){
//       return [numarr[complement],i];
//     }
//     numarr[cur]=i;
//     return [];
//   }
//     ,[]
//   )
//   return result;
// }

let target = "我是AMia06aka";
console.log(reverse(target));
function reverse(string_input){
  const components = string_input.split("");
  let newcomponents =[];
  let result = '';
  components.map((cur,i)=>{
    newcomponents[(components.length-1) - i] = cur;
  },[])
  return newcomponents.join('');
}
  