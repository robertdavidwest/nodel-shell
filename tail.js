const read = require("./read");


function tail(done, filepath, n = 10) {
    read(done, filepath, undefined, n);
  }

module.exports = tail;
