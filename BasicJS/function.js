function addTwoNumbers(number1, number2){
  return number1+number2;
}

const result = addTwoNumbers(5,10)
// // console.log(result);



function loginusermessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
        
    }
     return `${username} just logged in`

}
// console.log(loginusermessage("mayank"));




function calculateCartPrice(...num1){
     return num1
}

// console.log(calculateCartPrice(200,500,1000));




const user ={
    username: "mayank",
    price: 399
}

function handleObject(anyobject){
    //  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}
//  handleObject(user)

handleObject({ 
    username: "mayank yadav",
    price: 999
})




const myNewArray = [200,400,600,1000]

function getSecondValue(getArray){
    return getArray[2]
}

console.log(getSecondValue(myNewArray));
console.log(getSecondValue([200,400,600,1000]));

 