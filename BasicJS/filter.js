const myNums = [1,2,3,4,5,6,7,8,9,10]


/*
const values = myNums.filter( (num) => num > 4 )
console.log(values);
*/


/*
const values = myNums.filter((num) => {
    return num>4  // return is must 
})
console.log(values);
*/


const newNums =[]
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);