function getPwd() {
    process.stdout.write(process.cwd());
  }

  module.exports = getPwd;