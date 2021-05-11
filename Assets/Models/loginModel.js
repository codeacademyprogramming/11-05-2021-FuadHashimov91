export class Admin{
    name = "Admin";
    surName = "Admin";

    get getObj(){
        return {
            name:this.name,
            surName:this.surName
        };
    }
}
