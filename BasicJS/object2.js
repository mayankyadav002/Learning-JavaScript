// const tinderUser =new Object()                         // singleton object
const tinderUser = {}                                 // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Mayank"

tinderUser.isLoggedIn = false 

// console.log(tinderUser);  


const regularUser = {
    email: "xyz@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Mayank",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);


// Combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);


const user = [
    {
        id: 1,
        email: "mayank@gmail.com"
    },
    {
        id: 2,
        email: "mayankyadav@gmail.com"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 



// Destructuring of objects

const course  ={
    coursename: "JS in hindi",
    price: "999" ,
    courseinstructor: "mayank"

}

console.log(course.instructor);

const {courseinstructor :  instructor} = course
console.log(instructor);
    
