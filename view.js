
class View {

  static showAllCommand() {
    console.log(
`================== Documentation ==================
author add -> add<space> "data yang ingin dimasukkan"
author read_one -> read_one<space> "masukkan id author"
author read_all -> read all
author update -> update<space> "masukkan data yang ingin di update dan idnya"
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukkan"
tag read_one -> read_one<space> "masukkan id tag"
tag read_all -> read_all
tag update -> update<space> "masukkan data yang ingin di update dan idnya
tag delete -> delete<space> "masukkan id author"
article add -> add<space> "data yang ingin dimasukkan"
article read_one -> read_one<space> "masukkan id article"
article read_all -> read_all
article update -> update<space> "masukkan data yang ingin di update dan idnya"
article delete -> delete<space> "masukkan id author"`)
  }

  static addSucceed(data) {
    console.log(`Success create Author ${data}`);
  }

  static displayErr(err) {
    console.log(`ERR: `, err);
  }

}

module.exports = View;