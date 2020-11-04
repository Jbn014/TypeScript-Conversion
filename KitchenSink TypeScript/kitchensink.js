var myname = 'Jared';
console.log(myname); // jared
var numstates = 50;
var sumOfNumbers = 5 + 4; // addition of 5 + 4 constant
function sayHello() {
    alert("Hello" + " " + myname);
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Garrett", 20);
checkAge("Josh", 26);
checkAge("Jake", 25);
checkAge("Charles", 19);
var myFavVeggies = ["broccoli", "Squash", "Carrots", "Asparagus"];
for (var i = 0; i < myFavVeggies.length; i++) {
    console.log(myFavVeggies[i]);
}
var myPet = {
    name: "Nyx",
    breed: "Black Lab"
};
console.log(myPet);
var people = [
    {
        name: "Josh",
        age: 26
    },
    {
        name: "Garrett",
        age: 20
    },
    {
        name: "Tim",
        age: 24
    },
    {
        name: "Jared",
        age: 23
    },
    {
        name: "Sam",
        age: 19
    },
];
people[0].name; // Josh
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
;
function getLength(string) {
    return string.length;
}
;
getLength('hello world');
var stringLength = getLength("Hello world");
if (stringLength % 2 === 0) {
    console.log("The World is nice and even!");
}
else {
    console.log("The World is an odd place!");
}
