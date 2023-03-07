export class Prescription{
    constructor(
        public id:number,
        public name:string,
        public dosage:string,
        public visit_details_id:number,

    ){
        this.id=id ||0;
        this.name=name ||"";
        this.dosage=dosage ||"";
        this.visit_details_id=visit_details_id||0;

    }
}