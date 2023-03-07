export class Patient{
    constructor(
        public id:number,
        public email:string,
        public title:string,
        public firstName:string,
        public lastName:string,
        public dob:Date,
        public contactNumber:string,
        public password:string,
        public gender:string,
        public address: string,
    ){
        this.id=id ||0;
        this.email=email||"";
        this.title= title ||"";
        this.firstName=firstName ||"";
        this.lastName=lastName ||"";
        this.dob=dob ||new Date;
        this.contactNumber=contactNumber ||"";
        this.password=password ||"";
        this.gender= gender ||"";
        this.address=address ||"";
        
    }
    
}