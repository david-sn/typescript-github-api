"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(bodyRes) {
        this.name = bodyRes.name;
        this.description = bodyRes.description;
        this.url = bodyRes.html_url;
        this.size = bodyRes.html_size;
        this.forkCount = bodyRes.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
