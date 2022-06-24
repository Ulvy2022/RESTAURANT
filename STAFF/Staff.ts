import {Person} from '../PERSON/Person';


export class Staff extends Person {
    private salary:number
    public staffs:Staff[]=[]

    constructor(name: string, 
        age: number,
        phone: number,
        salary:number,
        category:string,

        address:string){
        super(name, age, phone,category,address)
        this.salary=salary;
    }

    getSalary(){
        return this.salary;
    }

    addStaff(staff: Staff){
        return this.staffs.push(staff);
    }
}