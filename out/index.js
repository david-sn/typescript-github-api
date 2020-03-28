"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubService_1 = require("./GitHubService");
var myService = new GitHubService_1.GithubService();
myService.getUserInfo('david-sn', function (user) {
    myService.getRepos('david-sn', function (repos) {
        user.repos = repos.slice(0, 2);
        console.log(user.login);
    });
});
