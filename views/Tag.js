const Table = require('cli-table')
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
    const table = new Table({
      head : Object.keys(data.dataValues),
      colWidths : [5,50,30,30]
    });
    table.push(Object.values(data.dataValues));
    console.log(table.toString());
    process.exit();
  }

  static showAllData(data) {
  const table = new Table({
    head : Object.keys(data[0].dataValues),
    colWidths : [5,50,30,30]
  });

  data.forEach( d => {
    table.push(Object.values(d.dataValues));
  })

  console.log(table.toString());
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
