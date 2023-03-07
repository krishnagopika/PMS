export class VisitDetails{
    constructor(
        public id:number,
        public patient_id:number,
        public height:number,
        public weight:number,
        public blood_pressure_systolic:number,
        public blood_pressure_diastolic:number,
        public body_temperature:number,
        public blood_group:string,
        public physician_email:string,
        public respiration_rate:number,
        public nurse_email:string,
        public appointment_id:number,
        public key_notes:string,
        public allergy:number[],
        public date:Date,

    )
    {
        this.id = id ||0;
        this.patient_id=patient_id ||0;
        this.height=height||0;
        this.weight=weight||0;
        this.blood_pressure_systolic=blood_pressure_systolic ||0;
        this.blood_pressure_diastolic=blood_pressure_diastolic ||0;
        this.body_temperature=body_temperature ||0;
        this.blood_group=blood_group || "";
        this.physician_email=physician_email ||"";
        this.respiration_rate=respiration_rate||0;
        this.nurse_email=nurse_email||"";
        this.appointment_id=appointment_id ||0;
        this.key_notes=key_notes ||"";
        this.allergy=allergy||[];
        this.date=date ||  new Date;
    }
}