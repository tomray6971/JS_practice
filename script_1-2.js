function createCounterObject(){
    let counter = 0;
    return {
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter;
        }
    };
}
let counterobject = createCounterObject();
console.log(counterobject.getValue());
counterobject.increment();
console.log(counterobject.getValue());
counterobject.increment();
console.log(counterobject.getValue());
