export class PhysicianAvailability{
    constructor(
        public id:number,
        public email:string,
        public date:string[],
        public availability:boolean,

    ){
        this.id=id ||0;
        this.email=email||"";
        this.date=date || [];
        this.availability=availability||false;
    }
} 