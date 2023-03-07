import { Prescription } from "./prescription";
import { Test } from "./test";

export class HealthRecord{

    constructor(
        public visitDetails_id:number,
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
        public date:Date,
        public allergy:number[],
        public tests:Test[],
        public prescription:Prescription[]
    ){
        this.visitDetails_id = visitDetails_id ||0;
        this.patient_id=patient_id ||0;
        this.height=height||0;
        this.weight=weight||0;
        this.blood_pressure_systolic=blood_pressure_systolic ||0;
        this.blood_pressure_diastolic=blood_pressure_diastolic ||0;
        this.body_temperature=body_temperature ||0;
        this.blood_group=blood_group || "";
        this.physician_email=physician_email ||"";
        this.appointment_id=appointment_id ||0;
        this.respiration_rate=respiration_rate||0;
        this.key_notes=key_notes ||"";
        this.date=date ||  new Date,
        this.allergy=allergy || [];
        this.tests=tests || [];
        this.prescription=prescription ||[];

    }
    


}