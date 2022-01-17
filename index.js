
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

// Arrow functions

const square = (number) => {
    return number + number;
}
// console.log(square(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];
// console.log(jobs[0]);

const activeJobs = jobs.filter( (job) =>{
    return job.isActive;
});
// console.log(activeJobs);