/*
const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('RS', "RUSSIA")

console.log(map);

*/




/*
const map = new Map();
map.set("IN", "INDIA");
map.set("FR", "FRANCE");
map.set("RS", "RUSSIA");

for (const [key,value] of map) {
    console.log(key, ":-", value);  
}

*/

const myObj = {
    game1: 'cricket', 
    game2: 'volleyball'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
    
// }

//using forof loop we cannot iterate objects and map , we need to use forin loop

for (const key in myObj) {
  //  console.log(key, ":-", value);    not valid
//  console.log(`${key} is ${myObj[key]}`);
  
    
}   




// for array

const programming = ["js", "cpp", "java", "swift"]

for (const key in programming) {
console.log(programming[key]);

}