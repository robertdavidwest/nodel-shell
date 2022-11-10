const fs = require("fs");

function head(done, filepath, n = 10) {
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      done("Something went wrong!");
    } else {
      if (n === "all") done(data);
      done(data.split("\n").slice(0, n).join("\n"));
    }
  });
}

module.exports = head;
