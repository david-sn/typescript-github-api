import { Repo } from './repo'

export class User {
    private _login!: string;
    fullName!: string;
    repoCount!: number;
    repos?: Repo[];
    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        // this.repos = 
    }
    set login(login: string) {
        this._login = login;
    }
    get login(): string {
        return this._login;
    }
}