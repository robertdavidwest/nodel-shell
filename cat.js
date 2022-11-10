const read = require("./read");

function cat(done, filepath) {
  read(done, filepath, "all");
}

module.exports = cat;
