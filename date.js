function date(done) {
    const date = new Date();
    const dateString = String(date);
    done(dateString);
  }
  
  module.exports = date;