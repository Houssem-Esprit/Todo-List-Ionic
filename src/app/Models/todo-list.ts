
export class TODOLIST {
    id: number;
    type: string;
    title: string;
    content: string;


    constructor(id: number, type: string, title:string, content: string){
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type;
    }

    
}   