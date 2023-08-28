function checkAge(){
    //console.log("clicked");

    const ageField = document.getElementById("age");
    const ageText = ageField.value ;
     const errorTag = document.getElementById("error"); 



    try{
       const age = parseInt(ageText);
       if(isNaN(age)){
       throw "please enter a number"
       }
       else if(age < 18){
        throw "kids not allowed";
       }
       else if(age > 30){
        throw "senior citizens not allowed";
       }
       errorTag.innerHTML = " "

    }

    catch(err){
        console.log("ERR:", err)
        errorTag.innerHTML = "something went wrong" ;
    }

    finally{
        console.log("All done inside try catch")
    }
    console.log(1111);
}


