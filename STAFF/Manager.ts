//import person class
import {Person} from '../ENUM/Person';

// import  staff class
import {Staff} from '../STAFF/Staff';

export class Manager extends Person{
    private salary:number;
    
    constructor(name: string, 
        age: number,
        phone: number,
        salary:number,
        category:string,
        address:string){
        super(name, age, phone,category,address)
        this.salary=salary;
    }
}