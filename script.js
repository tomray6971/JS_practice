//DAY8
// function delay_api(){
//   return new Promise((resolve,reject)=>{
//     const ispass = false;
//     setTimeout(()=>{
//       if(ispass){
//         resolve("勝利");
//       }else{
//         reject("輸了");
//       }
//     },2000);
//   }
//   )  
// }
// delay_api()
//   .then((data)=>console.log(data))
//   .catch((err)=>console.error(err));
  
function delay_api(){
  return new Promise((resolve,reject)=>{
    const ispass = true;
    setTimeout(()=>{
      if(ispass){
        resolve("勝利");
      }else{
        reject("輸了");
      }
    },2000);
  }
  )  
}
async function async_test() {
  try {
    const result = await delay_api();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
async_test();