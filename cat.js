const fs = require("fs");
const head = require("./head");

function cat(done, filepath) {
  head(done, filepath, "all");
}

module.exports = cat;
