// const user = {
//    username : "Mayank",
//    price: 999,
//    welcomessage : function (){
//    // console.log(`${this.username}, welcome to website`);
//    // console.log(this);
    
//    }
// }

// user.welcomessage()
// user.username="sam";
// user.welcomessage()

// console.log(this);



//++++++++++++  WAYS TO DECLARE FUNCTIONS +++++++++++++



// function chai(){
//     console.log(this);
    
// }
// chai()





// const chai =function(){
//         let username= "Mayank"
//         console.log(this.username);
        
// }
//chai()




// const chai = () =>{
//     let user = "Mayank"
//     console.log(this.user);
    
// }
// chai()



// const addTwo =(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,8));



// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5, 8));


const addTwo2 = (num1, num2) => ({username: "Mayank"})
console.log(addTwo2(5, 8));
