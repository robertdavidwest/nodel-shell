const fs = require("fs");

function head(done, filepath) {
    fs.readFile(filepath, "utf-8", function (err, data) {
      if (err) {
        done("Something went wrong!");
      } else {
        const firstTenLines = data.split('\n').slice(0, 10).join('\n');
        done(firstTenLines);
      }
    });
  }

module.exports = head;