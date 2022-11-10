const fs = require("fs");

function read(done, filepath, headn, tailn) {
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      done("Something went wrong!");
    } else {
        const dataArray = data.split("\n");
      if (headn === "all") done(data);
      else if (headn) done(dataArray.slice(0, headn).join("\n"));
      else if (tailn) {
        done(dataArray.slice(dataArray.length - tailn).join("\n"));
      }
    }
  });
}

module.exports = read;
