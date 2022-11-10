const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");
const tail = require("./tail");
const sort = require("./sort");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const inputs = data.toString().trim().split(" ");
  const command = eval(inputs.shift());
  command(done, ...inputs);
});
