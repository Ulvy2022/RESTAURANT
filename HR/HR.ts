import { Person } from '../ENUM/Person';
import { Staff } from './../STAFF/Staff';


export class HR extends Person{


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

    addStaff(staff: Staff){
        return this.staffs.push(staff);
    }

    getStaffByCategory(categoryName:string){
        let result:{}[]=[]
        for(let staff of this.staffs){
            if(staff.category==categoryName){
                result.push(staff);
            }
        }
        if(result.length>0){
            return result;
        }
        return "This category is have no staff..!"
    }

    getStaffBySalary(salary:number){
        let result:{}[]=[]
        for(let staff of this.staffs){
            if(staff.getSalary()==salary){
                result.push(staff);
            }
        }
        if(result.length>0){
            return result;
        }
        return "This category is have no staff..!"
    }

    getAllStaff(){
        return this.staffs;
    }

    getNumberOFStaff(){
        return "Your all  staffs are "+this.staffs.length
    }
    
}