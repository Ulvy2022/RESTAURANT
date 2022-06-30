import {Person} from '../ENUM/Person';


export class Staff extends Person {
    private salary:number;
    public staffID:number;
    public staffs:Staff[]=[];

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

    
}