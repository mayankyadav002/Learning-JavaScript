/*
const books = [
  {
    title: "book1",
    genre: "fiction",
    publish: 1981,
    edition: 2004,
  },

  {
    title: "book2",
    genre: "non-fiction",
    publish: 1982,
    edition: 2005,
  },
  {
    title: "book3",
    genre: "drama",
    publish: 1984,
    edition: 2006,
  }
];

const userBooks = books.filter( (bk) => bk.genre === 'drama') 
    console.log(userBooks);

*/

 


/*

const myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const newNum = myNumbers
                         .map((num) => num*10)
                         .map((num) => num+1)
                         .filter((num) => num >=40)
console.log(newNum);
*/





const myNum = [1,2,3,4,5,6]

/*
const myTotal = myNum.reduce(function (acc, currVal) {
    console.log(`acc:${acc} and currVal:${currVal}`);
    
    return acc+currVal
},0 )
*/

// using arrow function

/*
const myTotal =myNum.reduce((acc,currVal) => acc+currVal ,0)
console.log(myTotal);
*/



const myShoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },

  {
    itemName: "java course",
    price: 3999,
  },

  {
    itemName: "python course",
    price: 4999,
  },

  {
    itemName: "dsa course",
    price: 1999,
  }
]

const priceToPay = myShoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);
