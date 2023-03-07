export class Appointment{
    constructor(
        public id:number,
        public reason:string,
        public submissionDate:Date,
        public date:string,
        public acceptance:string,
        public patientId:number,
        public physicianEmail:string,

    ){
        this.id=id ||0;
        this.reason=reason||"";
        this.acceptance=acceptance||"";
        this.patientId=patientId||0;
        this.physicianEmail=physicianEmail||"";
    }

}