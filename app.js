// function myMarkdown(readme) {
//     if(readme === 'awesome') {
//         return 'I love markdown!'
//     }
//     else {
//         return 'I will try harder'
//     }
// }
// console.log(myMarkdown('awesome'))

// let pass = true;
// let grade = 67;

// if (pass) {
//     if (grade >= 90) {
//         console.log('A');
//     } else if (grade >= 80) {
//         console.log('B');
//     } else if (grade >= 70) {
//         console.log('C');
//     } else {
//         console.log('D');
//     }
// } else {
//     console.log('F');
// }

// // function declaration / definition
// function sayHello() {
//     return 'Hello!'
// }

// // function expression
// const sayHi = function() {    
//     return 'Hi!'
// }

// // arrow function 
// const sayHey = () => 'Hey!'


// function add(num1, num2) {    // ()    list of parameters
//     return num1 + num2 + num3 + num4
// }




// console.log(add(2, 3, 4, 5))     // ()   list of arguments

// console.log(add(5, 5))   // 5 + 5 + undefined + undefined
// console.log(add(10, 1))
// console.log(add(3, 8))

// // console.log(add('Bob', 'The Builder'))

// /*
// ​
// Output 1:
// ​
// 1
// 12
// 123
// ​
// */
// ​
// // FOR LOOP example
// ​
// for (let i = 1; i <= 3; i++) {
//     let str = ''
//     for (let j = 1; j <= i; j++) {
//         str += j
//     }
//     console.log(str)
// }
// ​
// // WHILE LOOP example
// ​
// let i = 1;
// ​
// while(i <= 3) {
// ​
//     let str = ''
//     let j = 1;
    
//     while(j <= i) {
//         str += j
//         j++
//     }
// ​
//     console.log(str)
//     i++
// }
// ​
// ​
// '' + 1  //  = '1'

// let foods = ['kimchi', 'tacos', 'arepa', 'spam']
// ​
// // for loops
// // for (let i = 0; i < food.length; i++)
// ​
// // while loops
// // while (i < food.length)
// ​
// // for of 
// // for (let item of foods)
// ​
// // forEach (build-in array method)
// // foods.forEach(() => { })
// ​
// // anonymous function
// // () => 
// // function() { }
// ​
// // callback functions
// ​
// // filter (built-in array method)
// let newFoodsArr = foods.filter((item, idx) => {
//     // if you return true
//     // keep the item
//     // if you return false
//     // discard it
//     if (item[0] === 'k' || item[0] === 's') {
//         return true
//     } else {
//         return false
//     }
// })
// ​
// // console.log(foods)
// // console.log(newFoodsArr)
// ​
// // map (built-in array method)
// let brandNewArray = foods.map(function(item, idx) {
//     // change the current item 
//     return item + '!'
// })
// ​
// // console.log(brandNewArray)
// ​
// let nums = [4, 10, 25, 30, 100]
// ​
// // reduce (built-in array method)
// let result = nums.reduce((previousValue, currentValue) => {
//     return currentValue + previousValue
// }, 0)
// ​
// console.log(result)

// //           0        1         2
// let arr = ['kiwi', 'banana', 'apple']
// ​
// // object literal 
// const cat = {
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4,
//     age: 3,
//     favoriteThings: ['yarn', 'string', 'food'],
//     canSpeakFrench: false,
//     meow: function() {   // method syntax 1
//         console.log('meow')
//     }, 
//     purr: () => {       // method syntax 2
//         console.log('purr')
//     },
//     talk(speech) {      // method syntax 3
//         console.log(speech)
//     }
// }
// ​
// ​
// ​
// console.log(cat.favoriteThings[0]) // [...] // 'yarn'
// ​
// // access a property with dot notation
// // console.log(cat.name)
// // console.log(cat.fur)
// // console.log(cat.legs)
// ​
// // we can also access properties with brackets
// // by treating the property names as strings (because they are)
// // console.log(cat['name'])
// // console.log(cat['fur'])
// // console.log(cat['legs'])
// ​
// ​
// // we can create or reassign properties to different values
// cat.breed = 'calico'
// ​
// cat.temperament = ['mild']
// ​
// cat.temperament.push('angry') // [...] // .push
// ​
// // we cannot reassign the cat variable because it's a constant
// // cat = 'nothing'
// ​
// // using object properties in conditionals
// // if (cat.science) {  // undefined 
// //     console.log('wi')
// // } else {
// //     console.log('no')
// // }
// ​
// ​
// // methods... how do we run those?
// // cat.meow()
// // cat.purr()
// // cat.talk('feed me!')
// ​
// // Extra things
// ​
// // for ... of is for arrays
// for (let item of arr) {
// ​
// }
// ​
// // for ... in loop is for objects
// for (let key in cat) {
//     // key represents ... fur, name, legs, age, meow
//     console.log('key: ', key)
//     // key is a string value 
//     console.log('value: ', cat[key]) // gives us the value
//     console.log() 
// }
// ​
// 

// const cat = {
//     name: 'Mr. Bean',
//     legs: 4,
//     type: 'Feline',
//     friends: [
//         {
//             name: 'Georgey',
//             legs: 4,
//             type: 'Feline'
//         }, 
//         {
//             name: 'Snake',   // cat.friends[1].name    
//             legs: 3,         // cat['friends'][1]['name']
//             type: 'Feline'
//         }, 
//         {
//             name: 'Rixio', //  cat.friends[2].name
//             legs: 5,       //  cat['friends'][2]['name']
//             buddies: [
//                 {
//                     name: 'Arthur',
//                     fins: 5,   //   cat.friends[2].buddies[0].fins    ->   5
//                     type: 'fish' // cat['friends'][2]['buddies'][0]
//                 },
//                 {  
//                     name: 'Hannibal',
//                     type: 'Platypus' //  cat.friends[2].buddies[1].type[4]
//                 }
//             ]
//         }
//     ]
// }
// ​
// // How do access nested values???
// ​
// // 1. How do we access the string 'Snake'?
// // console.log(cat.friends[1].name) 
// ​
// // 2. How do we access the string 'Rixio'?
// // console.log(cat.friends[2].name)
// ​
// // 3. How do we access the fins property?
// // console.log(cat.friends[2].buddies[0].fins)
// ​
// ​
// cat.friends
// cat['friends']
// ​
// ​
// console.log(cat.friends[2].buddies[1].type[4])
// console.log(cat.friends[2].buddies[1][1])
// console.log(cat.friends[2].buddies[1].type.charAt(4))

// class Vehicle {
//     ​
//         // vin: 'X123Y',
//         // make: 'Boeing'
//     ​
//         // constructor() {}
//     ​
//         constructor(vinParam, makeParam, modelParam) {
//             this.vin = vinParam;
//             this.make = makeParam;
//             this.model = modelParam;
//             this.running = false;
//             // console.log('creating a new instance of Vehicle')
//         }
//     ​
//     ​
//         goVroom() {
//             console.log('vroom!')
//         }
//     ​
//         start() {
//             this.running = true;
//             console.log('running')
//         }
        
//         // toString() {
//         //     return 'Vehicle (' + this.vin + ') is a ' +
//         //         this.make + ' model ' + this.model;
//         // }
//     ​
//         toString() {
//             return 'Vehicle (' + this.vin + ') is a ' +
//                  this.make + ' model ' + this.model;
//         }
//     ​
//     ​
//     }
//     ​
//     // class Object { }
//     // class Vehicle { }
//     ​
//     const toyota = new Vehicle('X123Y', 'Boeing', 'shine')
//     const tesla = new Vehicle()
//     ​
//     // toyota.goVroom()
//     // tesla.goVroom()
//     ​
//     // toyota.start()
//     // tesla.start()
//     ​
//     // console.log(toyota, tesla)
//     ​
//     let arr = [1,2,3]
//     let arr2 = new Array()
//     ​
//     // arr.forEach()
//     ​
//     console.log(toyota.toString())

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
// ​
//       console.log('inside of Character constructor...')
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
// ​
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
// ​
// // child class and/or sub class
// // use extend to inherit properties and methods 
// // from parent and/or super class
// class Hobbit extends Character {
//     constructor(name, age, eyes, hair, height, weight) { // setup parameters...
//         super(name, age, eyes, hair) // pass them as arguments...
//         this.height = height
//         this.weight = weight
//         console.log('inside of Hobbit constructor...')
//     }
//     static steal() {
//         console.log('woohoo!')
//     }
//     greet(name) {
//         console.log('teeheee hi ' + name)
//         super.smite()
// ​
        
//     }
// }
// ​
// const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// console.log(frodo)
// frodo.greet('Sam')

// class BankAccount {
//     // ownerName: 'Usman',
//     // balance: 1000000,
//     // acctNum: 485687932
//     constructor(accName, balance) {
//       this.accName = accName;
//       this.balance = balance;
//       this.acctNum = Math.floor(Math.random() * 1000)
//     } 
//   ​
//     deposit(depositedAmount) {
//       this.balance += depositedAmount
//       console.log('current balance after depositing ' + depositedAmount + " is: " + this.balance)
//     }
//   ​
//     withdraw(withdrawnAmount) {
//       this.balance -= withdrawnAmount
//       console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
//     }
//   ​
//   }
//   ​
//   class CheckingAccount extends BankAccount {
//     constructor(accName, balance, overdraftEnabled = true) {
//       super(accName, balance) // calls the constructor from parent class (Bank Account)
//       this.overdraftEnabled = overdraftEnabled;
//     }
//   ​
//     withdraw(amount) { 
//       if (amount > this.balance) {
//   ​
//         if (this.overdraftEnabled) {
//   ​
//           let overdraftFee = 20
//           this.balance -= (amount + overdraftFee)
//           console.log('this transaction overdrafts your balance :(')
//   ​
//         } else {
//           console.log('you cannot withdraw more than you have')
//         }
//   ​
//       } else {
//         this.balance -= amount
//         console.log('current balance after withdrawing ' + amount + " is: " + this.balance)
//       }
//     }
//   }
//   ​
//   class SavingsAccount extends BankAccount {
//     withdraw() {
//       console.log('you cannot withdraw from this savings account :(')
//     }
//   }
//   ​
//   ​
//   const lucas = new BankAccount('Lucas', 1000000)
//   const usman = new CheckingAccount('Usman', 1000000)
//   const stephin = new SavingsAccount('Stephin', 5)
//   ​
//   // console.log(lucas)
//   // console.log(usman)
//   // console.log(stephin)
//   ​
//   lucas.withdraw(1000)
//   usman.withdraw(2000000)
//   stephin.withdraw(4) 

//   // Singleton (do some research on this)
// class Car {
//     constructor (maker, serialNumber) {
//       this.serialNumber = serialNumber;
//       this.maker = maker
//     }
//     drive () {
//       console.log('Vroom Vroom');
//     }
//   }
//   class Factory {
//     constructor(company) {
//       this.company = company;
//       this.cars = [];
//     }
//     generateCar () {
//       const newCar = new Car(this.company, this.cars.length);
//       this.cars.push(newCar);
//       return this
//     }
//     findCar(index) {
//       return this.cars[index];
//     }
//   }
//   // only need one instance (Singleton)
//   const tesla = new Factory('Tesla')


// class Hamster {
//     constructor(name) {
//       this.owner = "";
//       this.name = name;
//       this.price = 15;
//     }
//     wheelRun() {
//       console.log('squeak squeak')
//     }
//     eatFood() {
//       console.log('nibble nibble')
//     }
//     getPrice() {
//       return this.price
//     }
//   }
//   class Person {
//     constructor(name) {
//       this.name = name;
//       this.age = 0
//       this.height = 0
//       this.weight = 0
//       this.mood = 0
//       this.hamsters = []
//       this.bankAccount = 0
//     }
//     getName() {
//       return this.name
//     }
//     getAge() {
//       return this.age
//     }
//     getWeight() {
//       return this.weight
//     }
//     greet() {
//       console.log('Hello! My name is ' + this.name)
//     }
//     eat() {
//       this.weight++
//       this.mood++
//     }
//     exercise() {
//       this.weight--
//     }
//     ageUp() {
//       this.age++
//       this.height++
//       this.weight++
//       this.mood--
//       this.bankAccount += 10
//     }
//     buyHamster(hamster) {
//       this.hamsters.push(hamster)
//       this.mood += 10
//       this.bankAccount -= hamster.getPrice()
//     }
//   }
//   // 1
//   const timmy = new Person("Timmy");
//   // 2
//   timmy.ageUp()
//   timmy.ageUp()
//   timmy.ageUp()
//   timmy.ageUp()
//   timmy.ageUp()
//   // 3
//   timmy.eat()
//   timmy.eat()
//   timmy.eat()
//   timmy.eat()
//   timmy.eat()
//   // 4
//   timmy.exercise()
//   timmy.exercise()
//   timmy.exercise()
//   timmy.exercise()
//   timmy.exercise()
//   // 5
//   for (let i = 0; i < 9; i++) {
//     timmy.ageUp()
//   }
//   // 6 
//   const hamster1 = new Hamster('Gus')
//   // 7 
//   hamster1.owner = 'Timmy'
//   // 8 
//   timmy.buyHamster(hamster1)
//   // 9
//   for (let i = 0; i < 15; i++) {
//     timmy.ageUp()
//   }
//   // 10 
//   timmy.eat()
//   timmy.eat()
//   // 11 
//   timmy.exercise()
//   timmy.exercise()
//   console.log(timmy)  

// // simple Dinner class that expects three parameters for setting up three properties 
// class Dinner { 
//     // the three parameters can be named whatever we like, but why not give them the same name as the property?
//     constructor(appetizer, entree, dessert) {
//   ​
//       // when we say "this.appetizer" we are referring to a property of the current instance/object called "appetizer"
//       // when we say " = appetizer" we are taking the parameter value and assigning it to the property of the same name
//       this.appetizer = appetizer
//       this.entree = entree
//       this.dessert = dessert
//     }
//   }
//   ​
//   // the Chef class is a factory of Dinner. We create a factory object/instance (ramsey) from it.
//   // this special object/instance (ramsey) will be in charge of creating dinners for us. 
//   class Chef {
//   ​
//     // this is a special method that creates objects/instances of Dinner
//     // we can create other objects (dinners) from within this one (chef)
//     makeDinner(app, ent, des) {
//       return new Dinner(app, ent, des)
//     }
//   }
//   ​
//   // we first create the factory object (the chef)
//   const ramsey = new Chef()
//   ​
//   // and let the factory (the chef) do the work of making dinners 
//   ramsey.makeDinner("fries", "pizza", "ice cream")
//   ​
//   // how we make dinners without a factory (the chef)
//   // const dinner1 = new Dinner("fries", "pizza", "ice cream")
//   // const dinner2 = new Dinner("fish sticks", "kimchi", "flan") // returns the new object 
//   ​
//   console.log(dinner1)
//   console.log() // space
//   console.log(dinner2)

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

// function breakingRecords(scores) {
//     let games = scores ;
//     let min = games[0];
//     let max = games[0];
    
//     let minRecord = 0;
//     let maxRecord = 0;
    
//     for (const score of games) {
//         if (max < score) {
//             max = score;
//             maxRecord++;
//         }
//         else if (score < min) {
//             min = score;
//             minRecord++;
//         }
//     }
    
//     return [maxRecord, minRecord];
// }

// console.log(breakingRecords([9, 10, 5, 20, 20, 4, 5, 2, 25, 1]))

// Solution 2
// function breakingRecords(scores) {

//     let highScore = scores[0], lowScore = scores[0], highCount = 0, lowCount = 0;

//     for (let i = 1; i < scores.length; i++) {
//         if (scores[i] > highScore) {
//             highScore = scores[i];
//             highCount += 1;
//         } else if (scores[i] < lowScore) {
//             lowScore = scores[i];
//             lowCount += 1;
//         }
//     }

//     return [highCount, lowCount];
// }

// console.log(breakingRecords([9, 10, 5, 20, 20, 4, 5, 2, 25, 1]))//=> [2, 4]

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

// function pageCount(n, p) {
    // Less flips to get to target page divided by two.. one flip, two pages
//     let frontFlip = Math.floor(p / 2);
    // Minimum pages minus flips
//     let backFlip = Math.floor((n / 2) - frontFlip);
    // Minumum of both
//     let result = Math.min(frontFlip, backFlip);
//     return result;
//   }

// console.log(pageCount(6, 2)) //=> 1

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function migratoryBirds(arr) {
//     let largest = 1;
//     let counter = largest;
//     let type = 0;
//     arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
//         if (largest > counter) {
//             counter = largest;
//             type = arr[i];
//         }
//     }
// return type;
// }

// console.log(migratoryBirds([6, 1, 4, 4, 4, 5, 3])) //=> 4

// map
// filter
// forEach
// ​
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// // let filteredCopy = nums.filter((element) => element < 3)  ->   [1, 2] (copy)
// // console.log(nums)  ->   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0] 
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// ​
// // array methods take a callback function as an argument
// // callbacks are functions that will run at a later time
// // example of a forEach array method: nums.forEach()
// ​
// ​
// // every method 
// // if every element/value is greater than zero, return true 
// let test = nums.every(myCallback) // ->   returns either true or false
// ​
// // creating our very own callback function!
// // this callback checks if every element/value is greater than 0
// function myCallback(element) {
//   if (element > 0) {
//     return true
//   } else {
//     return false
//   }
//   // return elements >= 0
// }
// ​
// console.log('the result of our every array method check is... ', test)
// ​
// // MDN Docs example of a callback
// // const isBelowThreshold = (currentValue) => currentValue < 40;
// ​
// // same thing as....
// function isBelowThreshold(currentValue) {
//   return currentValue < 40  //  ->   true or false 
// }
// ​
// ​
// ​
// ​
// // let test2 = panagram.every(myNewCallback)
// ​
// // function myNewCallback(element) {
// //   if (element.length < 8) {
// //     return true
// //   } else {
// //     return false
// //   }
// // }
// ​
// // more verbose version...
// let test2 = panagram.every((element) => {
//   return element.length < 8
//   // if (element.length < 8) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// })
// ​
// // a version with less syntax...
// // let test2 = panagram.every((element) => element.length < 8)
// ​
// console.log("the result of our second every method is...", test2)
// ​
// ​
// // find array method...
// ​
// let foundElement = nums.find((element) => element % 11 === 0) 
// // ->  return the first value (number) matching this condition
// ​
// ​
// let firstChar = panagram.find((element) => element.length > 5) 
// // ->   returns the first value (word) matching this condition
// ​
// ​
// console.log('we found a number divisible by 5, which is...', foundElement)
// console.log('we found a word that is longer than 5 characters, which is...', firstChar)
// ​
// // no return value for forEach
// // this will log every value multiplied by three
// nums.forEach((element) => console.log(element * 3))
// ​
// // this will log every word with an exclamation point
// panagram.forEach((word) => console.log(word + '!'))


