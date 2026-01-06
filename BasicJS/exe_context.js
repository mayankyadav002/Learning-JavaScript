/* JAVASCRIPT EXECUTION CONTEXT 

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

** Phases of execution

1. Memory creation phase (memory is allocated)
2. Execution phase

** Actual implementation

let val1 = 10
let val2 = 5

function addNum(num1, num2){
let total = num1+num2
return total;
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

1. Global execution  - it is allocated in this.

2. Memory Phase

* 1st cycle
val1 -> undefined
val2 -> undefined
addNum -> defination
result1 -> undefined
result2 -> undefined


3. Execution phase

* 2nd cycle

val1 <- 10 
val2 <- 5

addNum - makes different execution context

now inside addNum there will be
i) New variable environment + Execution thread(inside it)  -> 

*Memory phase
val1 -> undefined
val2 -> undefined
total -> undefined

*Now it goes to execution phase
num1 -> 10
num1 -> 5
total -> 15 (total is returned to global execution context)

after this New variable environment + Execution thread will be deleted

now we will go back to the execution phase again (3. point) in that now add in execution phase

result1 = 15
result2 as it contain function now again , New variable environment + Execution thread(inside it)  -> 

*Memory phase
val1 -> undefined
val2 -> undefined
total -> undefined

*Now it goes to execution phase
num1 -> 10
num1 -> 5
total -> 15 (total is returned to global execution context)

after this New variable environment + Execution thread will be deleted




*/
