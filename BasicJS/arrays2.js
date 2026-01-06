const heros =["Batman", "superman", "spiderman"]
const heros2 =["Thor", "captamerica", "flash"]

// heros.push(heros2)
// console.log(heros);
// console.log(heros[3][2]);


// const newHero = heros.concat(heros2)
// console.log(newHero);

// Use of spread operator

// const all_new_heros = [...heros , ...heros2]
// console.log(all_new_heros);

// const real_heros = [1,2,3,[4,5,6], 7, [8,9,[10,11]]]
// console.log(real_heros);

// const real_heros_new = real_heros.flat(3)  // here 3 is depth, we can use infinity also
// console.log(real_heros_new);



// console.log(Array.isArray("Mayank"));
// console.log(Array.from("Mayank"));
// console.log(Array.from({name: "Mayank"}));  // important




let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));

