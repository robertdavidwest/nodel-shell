const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  const inputs = cmd.split(" ");
  cmd = inputs[0];
  const input1 = inputs[1];
  const input2 = inputs[2];
  const command = eval(cmd);
  command(done, input1, input2);
});
