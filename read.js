const fs = require("fs");

function read(done, filepath, headn, tailn, sort) {
  fs.readFile(filepath, "utf-8", function (err, data) {
    if (err) {
      done("Something went wrong!");
    } else {
        const dataArray = data.split("\n");
      if (sort) done(dataArray.sort().join('\n'));
      else if (headn === "all") done(data);
      else if (headn) done(dataArray.slice(0, headn).join("\n"));
      else if (tailn) {
        done(dataArray.slice(dataArray.length - tailn).join("\n"));
      }
    }
  });
}

module.exports = read;
