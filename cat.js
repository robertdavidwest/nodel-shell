const fs = require("fs");

function cat(done, filepath) {
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      done("Something went wrong!");
    } else {
      done(data);
    }
  });
}

module.exports = cat;
