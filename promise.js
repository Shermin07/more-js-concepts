

const getData = new Promise((resolve, reject) =>{
   const num = Math.random()*10;
   console.log(num);
   if(num < 5){
    resolve(566665);
   }
   else{
    reject("No data available");
   }
  // resolve(566665);
  // reject("No data available");
})
//console.log(getData + 50);
getData
.then(data => console.log(data+10))
.catch( err => console.log("ERR:" , err))

