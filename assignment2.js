const age = [24, 22, 25, 32, 35, 18,18]
const ag = age.find((age) => age < 20)

console.log(ag)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true
let keys = Object.keys(users);
let keyss= keys.filter((key)=>{
	return users[key].points>=50;
});
let keysss = keyss.map((element)=>users[element]);
console.log(keysss)
