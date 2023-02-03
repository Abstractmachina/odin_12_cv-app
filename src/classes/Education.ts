class Education {

    id:string;
    uniName:string;
    uniLocation: string;
    course:string;
    from:string;
    to: string;
    description: string;

    constructor(id:string) {
        this.id = id;
        this.uniName = "";
        this.uniLocation = "";
        this.course = "";
        this.from = "";
        this.to = "";
        this.description = ''
    }

    copy(other:Education) {
        this.uniName = other.uniName;
        this.uniLocation = other.uniLocation;
        this.course = other.course;
        this.from = other.from;
        this.to = other.to;
        this.description = other.description;
    }
}

export default Education;