const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  const inputs = cmd.split(" ");
  cmd = inputs[0];
  const input = inputs[1];

  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd === "cat") {
    cat(done, input);
  }
});
