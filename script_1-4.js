// const person = {
//     name: 'Alice',
//     sayHelloNormal: function() {
//       return 'Hello, my name is ' + this.name;
//     },//這裡的this.name是'Alice'，person的name物件
//     sayHelloArrow: () => {
//       return 'Hello, my name is ' + this.name;
//     }//箭頭方法的this.name不屬於person物件，若沒定義可能是undefined
//   };
// console.log(person.sayHelloNormal())
// console.log(person.sayHelloArrow())

const numbers = [1, 2, 3, 4, 5];
let lifun = numbers.map(num=>num*num*num);
console.log(lifun);