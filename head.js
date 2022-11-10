const read = require("./read");


function head(done, filepath, n = 10) {
    read(done, filepath, n);
  }

module.exports = head;
