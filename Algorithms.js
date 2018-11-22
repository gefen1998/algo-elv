// Numbers 

// Loop over the following array, showing each element, and ask
//  the user if he wants to continue. Continue looping until the
//   user stops you! Loop the array again and again if needed.

//confirm() returns false if the user hits cancel
var array = ["first", "second", "third" , "last"];
let doContinue =  true;
for (let i=0; doContinue; i = (i + 1) % array.length) {
    doContinue =  confirm("this is the " + array[i] + " one, should we continue?")
    console.log(array[i]);
}
// Swap Two Number Variables Without Using a Temp Variable.
let a = 1;
let b = 2;

a = a+b 
b = a-b
a = a-b
console.log(a,b)

// Swap Two String Variables Without Using a Temp Variable.
let str1 = "str1"
let str2 = "str2"





