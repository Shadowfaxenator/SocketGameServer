"use strict";
const jwt = require('jsonwebtoken');
exports.Routes = {
    index: "/",
    test: "/test"
};
exports.IndexGet = (req, res) => {
    var token = jwt.sign({ userid: "qwerty" }, "123456", { expiresIn: 3600 });
    res.send(token);
};
//# sourceMappingURL=index.js.map