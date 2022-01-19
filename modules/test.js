
// This import is not use because if we are using it throws error - (Cannot use import statement outside a module)
import Teacher, { promote } from "./teacher";
import React, { Component } from "react";

// Default -> import ... from "";
// Named -> import { ... } from "";

const teacher1 = new Teacher('Sunny', 26, 'Javascript');
teacher1.teach();
console.log(teacher1.name, teacher1.age, teacher1.subject);