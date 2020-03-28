export class Repo {
    name!: string;
    description!: string;
    url!: string;
    size!: number;
    forkCount!: number;
    constructor(bodyRes: any) {
        this.name = bodyRes.name;
        this.description=bodyRes.description;
        this.url = bodyRes.html_url;
        this.size = bodyRes.html_size;
        this.forkCount=bodyRes.forks;
    }
}