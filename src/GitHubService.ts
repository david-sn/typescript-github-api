import * as rq from 'request';
import { User } from './user';
import { Repo } from './repo';

export class GithubService {
    getUserInfo(username: string, cb: (user: User) => any) {

        let option = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }

        rq.get('https://api.github.com/users/' + username, option, (err: any, res: any, body: any) => {
            let user = new User((body));
            cb(user);
        })


    }
    getRepos(username: string, cb: (repos: Repo[]) => any) {
        let option = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }

        rq.get('https://api.github.com/users/' + username + '/repos', option, (err: any, res: any, body: any) => {

            body.map((theRepo: any) => {
                return new Repo(theRepo);
            });

            cb(body);
        })


    }
}