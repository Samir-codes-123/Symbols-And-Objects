//To declare a symbol as a key in an object

//intialization of symbols 
//const key1 = Symbol()
//const key2 = Symbol()

//intialization of an object 
let newObj = {
    name:"Samir Khanal",
    Address:"Pokhara",
    key1:"First Key", // key1 is a string not a symbol
    [key2]:"Second Key" //key2 is a symbol
}
//results
console.log(newObj);// defines SecondKey is a symbol

// access
console.log(newObj["key1"]); // use "" to access as it is a stirng
console.log(newObj[key2]);  // doesnt need "" to access as it is a symbol