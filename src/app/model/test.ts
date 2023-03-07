export class Test{
    constructor(
        public id:number,
        public name:string,
        public result:string,
        public visit_details_id:number,

    )
    {
        this.id=id ||0;
        this.name=name ||"";
        this.result=result ||"";
        this.visit_details_id ||0;

    }
}