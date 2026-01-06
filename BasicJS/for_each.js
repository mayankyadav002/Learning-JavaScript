const coding = ["js", "cpp","java", "swift", "ruby"]

/*
 coding.forEach(function (language){
     console.log(language); 
 })
*/

// another way

/*
 coding.forEach((language) =>{
     console.log(language); 
 })

*/


// another way


/*
function printMe(language){
    console.log(language);
}

coding.forEach(printMe)

*/




/*

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})

*/


const myCoding = [
  {
    language: "javascript",
    filename: "js",
  },

  {
    language: "python",
    filename: "py",
  },

  {
    language: "c++",
    filename: "cpp", 
  },
]

myCoding.forEach((item) => {
    console.log(item.filename);
    console.log(item.language);
    
    
})

