export class Allergy{
    constructor(
        public id:number,
        public name:string,
        public notes: string,

    ){
        this.id=id ||0;
        this.name=name || "";
        this.notes=notes || "";

    }
}