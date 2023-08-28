let a = 5; // this is global context thats why we can access it from anywhere
function add(num1, num2){
    const result = num1 + num2 + a ;
    return result;
}
const sum =add(4,5);
console.log(sum);