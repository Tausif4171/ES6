
import { User } from './user';

export class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log('teach');
    }
}