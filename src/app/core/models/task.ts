type TaskModel = {
    id: number;
    title: string;
    description: string;
}

export class Task {
    constructor(data: TaskModel) {
        this.data = data;
    }
    data: TaskModel;

     get id(): number {
        return this.data.id
    }

     get title(): string {
        return this.data.title
    }

     get description(): string {
        return this.data.description
    }

    get titleWithNumber(): string{
        return  `#${this.id} - ${this.title}` 
    }

}

