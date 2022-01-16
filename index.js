
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
}
// person.code();
// person.name='Faizan';
// console.log(person.name);
// person['name'] = 'Rehan';
// console.log(person.name);
