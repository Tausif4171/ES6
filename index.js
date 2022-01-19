
// ES6 Tutorial: Learn Modern JavaScript 🙂


// var -> variable declared with the VAR keyword are scoped to the function

// function Test(){
//     for(var i=0; i<3; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// Test();

// ****************************************************************

// let -> variable declared with the LET keyword are scoped to the block in which they are defined

// function Test1(){
//     for(let i=0; i<3; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// Test1();

// ****************************************************************

//const -> we use const keyword to define constant with similar to let keyword like variable declared with the const keyword are scoped to the block
//         in which they are defined.

// const j = 2;
// j = 3;
// console.log(j);

// ****************************************************************

// Objects

const person = {
    name: 'Tausif',
    eat() { },
    sleep() { },
    code() { console.log(person.name); }
};
// person.code();
// person.name='Faizan';
// console.log(person.name);
// person['name'] = 'Rehan';
// console.log(person.name);

// ****************************************************************

// The this keyword

const fruits = {
    name: 'apple',
    vegetable() { console.log(this) }
};
// fruits.vegetable();

const vegetable = fruits.vegetable;
// console.log(vegetable);
// vegetable();

// ****************************************************************

// Binding this

const mnc = {
    name: 'facebook',
    locations() { console.log(this) }
};

// mnc.locations();
const abc = mnc.locations.bind(mnc);
// console.log(abc);
// abc();

// ****************************************************************

// Arrow functions

const square = (number) => {
    return number + number;
}
// console.log(square(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];
// console.log(jobs[0]);

const activeJobs = jobs.filter((job) => {
    return job.isActive;
});
// console.log(activeJobs);

// ****************************************************************

// Arrow functions and this => Arrow functions don't rebind the this keyword

const test = {
    // code() {
    //     var self = this;
    //     setTimeout(function(){
    //         console.log('this', self)
    //     },1000);

    // }
    code() {
        // var self = this;
        setTimeout(() => {
            console.log('this', this)
        }, 1000);

    }
}
// test.code();

// ****************************************************************

// Array.map Method

const colors = ['red', 'green', 'blue'];

const items = colors.map((color) => {
    // return '<li>' + color + '</li>';
    return `<li>${color}</li>`;
});

// console.log(items);

// ****************************************************************

// Object Destructuring

const address = {
    street: 'nallasopara',
    city: 'Mumbai',
    country: 'India'
}

// Not do this
// const Street = address.street;
// const City = address.city;
// const Country = address.country;
// console.log(Street);

// Do like this, this is called Object Destructuring
const { street, city, country } = address;
const { street: st } = address;
// console.log(st);

// ****************************************************************

// Spread Operator
// Array
const first = [1, 2, 3];
const second = [5, 6, 7];

const combined = first.concat(second);
// console.log(combined);
const combined1 = [...first, 4, ...second, 8];
// console.log(combined1);
const clone = [...first];
// console.log(first);
// console.log(clone);

//Objects
const third = { name: 'Tausif' };
const fourth = { age: 21 };
const fifth = { favourite_color: 'black-blue' };

const combined2 = { ...third, ...fourth, ...fifth, hobbies: 'cricket' };
// console.log(combined2);

// ****************************************************************

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    code() {
        console.log("code")
    }
}

const data = new Person('Tausif', 21);
// console.log(data.name);
// console.log(data.age);
// console.log(data.code());

// ****************************************************************

// Inheritance

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    code() {
        console.log('code');
    }
}
// const user = new User('Tausif');
// console.log(user.name);

class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log('teach');
    }
}
const teacher = new Teacher('Sunny', 26, 'Javascript');
// console.log(teacher.name, teacher.age);
