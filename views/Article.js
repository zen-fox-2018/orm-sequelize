class Article {
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
  article add -> add<space> "data yang ingin dimasukkan"
  article read_one -> read_one<space> "masukkan id article"
  article read_all -> read_all
  article update -> update<space> "masukkan data yang ingin di update dan id nya"
  article delete -> delete<space> "masukkan id article"
`);
  }
}

module.exports = Article;
