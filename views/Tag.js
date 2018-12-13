class Tag {
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
  tag add -> add<space> "data yang ingin dimasukkan"
  tag read_one -> read_one<space> "masukkan id tag"
  tag read_all -> read_all
  tag update -> update<space> "masukkan data yang ingin di update dan id nya"
  tag delete -> delete<space> "masukkan id tag"
`);
  }
}

module.exports = Tag;
