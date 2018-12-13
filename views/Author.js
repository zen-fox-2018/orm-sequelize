class Author {
  static showErr(err) {
    console.log('ERROR :');
    console.log(err);
    process.exit();
  }

  static showSucces(msg) {
    console.log(msg);
    process.exit();
  }

  static showData(data) {
    console.log(`
============ your result ===============================================================
${JSON.stringify(data, null, 2)}
========================================================================================
`);
  process.exit();
  }

  static help() {
    console.log(`
============ documentation ===============================================================
  author add -> add<space> "data yang ingin dimasukkan"
  author read_one -> read_one<space> "masukkan id author"
  author read_all -> read_all
  author update -> update<space> "masukkan data yang ingin di update dan id nya"
  author delete -> delete<space> "masukkan id author"
`);
  }
}

module.exports = Author;
