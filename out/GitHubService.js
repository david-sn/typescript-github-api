"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rq = __importStar(require("request"));
var user_1 = require("./user");
var repo_1 = require("./repo");
var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    GithubService.prototype.getUserInfo = function (username, cb) {
        var option = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
        rq.get('https://api.github.com/users/' + username, option, function (err, res, body) {
            var user = new user_1.User((body));
            cb(user);
        });
    };
    GithubService.prototype.getRepos = function (username, cb) {
        var option = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
        rq.get('https://api.github.com/users/' + username + '/repos', option, function (err, res, body) {
            body.map(function (theRepo) {
                return new repo_1.Repo(theRepo);
            });
            cb(body);
        });
    };
    return GithubService;
}());
exports.GithubService = GithubService;
