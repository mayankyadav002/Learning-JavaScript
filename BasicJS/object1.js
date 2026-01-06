// creation of objects by using object literals

const mySym = Symbol("key1")

const myData ={
    name: "Mayank",
    "full name": "Mayank Yadav",
    [mySym] : "mykey1",                             // square brackets are used to change in Symbol datatype
    age: 23,
    hobby: "cricket",
    email: "mayankyadav22002@gmail.com",
    isLoggedIn: false

}   

// console.log(myData.name);
// console.log(myData["name"]);                        // preferred way
// console.log(myData["full name"]);
// console.log(myData[mySym]);

// myData.email = "mayank123@gmail.com"                // changing the value


// Object.freeze(myData);                              // freeze the data

myData.greeting = function(){
    console.log("Hello js users");
    
}

myData.greetingTwo   = function () {
  console.log(`Hello js users,${this.name}`);
}

console.log(myData.greeting());
console.log(myData.greetingTwo());

