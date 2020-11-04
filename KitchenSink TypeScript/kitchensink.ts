let myname = 'Jared';
console.log(myname); // jared

const numstates: number = 50;

let sumOfNumbers: number =  5 + 4;  // addition of 5 + 4 constant

function sayHello(): void {
    alert("Hello" + " " + myname);
}
sayHello();

function checkAge(name: string, age: number): void {
    if (age <21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}   
checkAge("Garrett", 20);
checkAge("Josh", 26);
checkAge("Jake", 25)
checkAge("Charles", 19);

let myFavVeggies: string[] = ["broccoli", "Squash", "Carrots", "Asparagus"];

for (let i = 0; i < myFavVeggies.length; i++) {
   console.log(myFavVeggies[i]);
}

let myPet = {
    name: "Nyx",
    breed: "Black Lab",
}
console.log(myPet);

let people: people[] = [
    {
        name: "Josh" ,
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

people[0].name // Josh

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)   
};

function getLength(string): number{
    return string.length
};

getLength('hello world');

let stringLength: number = getLength("Hello world");

if (stringLength % 2 === 0) {
    console.log("The World is nice and even!");
}    else {
        console.log("The World is an odd place!")
    }

interface people {
    name: string;
    age: number;
}    