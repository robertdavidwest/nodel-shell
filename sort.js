const read = require("./read");

function sort(done, fileName) {
    read(done, fileName, undefined, undefined, true);
}

module.exports = sort;
