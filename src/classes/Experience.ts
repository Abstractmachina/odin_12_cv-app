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
}

export default Experience;