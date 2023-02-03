class Experience {

    id:string;
    company:string;
    role: string;
    from:string;
    to: string;
    description: string;

    constructor(id:string) {
        this.id = id;
        this.company = "";
        this.role = "";
        this.from = "";
        this.to = "";
        this.description = ''
    }

    copy(other:Experience) {
        this.company = other.company;
        this.role = other.role;
        this.from = other.from;
        this.to = other.to;
        this.description = other.description;
    }
}

export default Experience;