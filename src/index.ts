import { GithubService } from './GitHubService'
import { User } from './user';
import { Repo } from './repo';

let myService = new GithubService();
myService.getUserInfo('david-sn', (user: User) => {
    myService.getRepos('david-sn', (repos: Repo[]) => {
        user.repos = repos.slice(0,2);
        console.log(user.login);
        
    });
});

