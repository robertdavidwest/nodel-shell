process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    //process.stdout.write(__dirname); // alt soln we found
    process.stdout.write(process.cwd());
  }

  process.stdout.write("\nprompt > ");
});
