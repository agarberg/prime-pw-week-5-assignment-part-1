console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: "Adam",
  lastName: "Garberg",
  hasSiblings: true,
  shoeCount: 15,
  favThreeFoods: ['Pizza', 'Pasta', 'Panini']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`; //concatenate name to fullName
console.log(`My name is ${fullName}`);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(`this is my first favorite food- ${me.favThreeFoods[0]}`);
console.log(`this is my last favorite food- ${me.favThreeFoods[2]}`);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
me.shoeCount = me.shoeCount += 1; // add 1 to shoeCount
console.log(`I now have ${me.shoeCount} shoes!`);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Yellow' // add favoriteColor property and assign value of Yellow.
console.log('A little more about me:', me); // log updated object, me!
