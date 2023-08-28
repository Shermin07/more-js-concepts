console.log(1);
console.log(2);
/*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))*/

//setTimeout(doSomething, 4000); or

setTimeout(() =>{
    console.log("lazy logged")
},4000 );
console.log(4);

function doSomething(){
    console.log(3)
}


// 2:::


console.log(6);
console.log(7);
setTimeout(moreSomething, 5000);
console.log(9);
console.log(10);

function moreSomething(){
    console.log("hello world")
}


let num = 0;
const intervalId = setInterval(() => {
    if(num === 10){
        clearInterval(intervalId);
    }
    console.log(++num)
}, 1000)





