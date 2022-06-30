import {Person} from '../ENUM/Person';


export class Staff extends Person {
    public salary:number;
    public staffID:number;

    constructor(name: string, 
        age: number,
        phone: number,
        salary:number,
        category:string,
        staffID:number,
        address:string){
        super(name, age, phone,category,address)
        this.salary=salary;
        this.staffID=staffID;
    }

    getSalary(){
        return this.salary;
    }

    getStaffID(){
        return this.staffID;
    }

    changeSalary(updatedSalary:number){
        this.salary = updatedSalary;
    }
}