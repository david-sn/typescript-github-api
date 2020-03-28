"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        // this.repos = 
    }
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (login) {
            this._login = login;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
