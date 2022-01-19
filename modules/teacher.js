
import { User } from './user';

export function promote() { }

export default class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log('teach');
    }
}