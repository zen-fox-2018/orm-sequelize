class View {
    static error(err) {
      console.log(err);
    }
  
    static display(anything) {
      console.log(anything);
    }
  
    static help() {
      console.log(
        `
        ========================== documentation =================================
        author add -> add<space> "data yang ingin dimasukan"
        author read-one -> read_one<space> "masukan id author"
        author read_all -> read_all
        author update -> update<space> "masukan data yang ingin diupdate dan idnya"
        author delete -> delete<space> "masukan id author"
        tag add -> add<space> "data yang ingin dimasukan"
        tag read-one -> read_one<space> "masukan id tag"
        tag read_all -> read_all
        tag update -> update<space> "masukan data yang ingin diupdate dan idnya"
        tag delete -> delete<space> "masukan id tag"
        article add -> add<space> "data yang ingin dimasukan"
        article read-one -> read_one<space> "masukan id article"
        article read_all -> read_all
        article update -> update<space> "masukan data yang ingin diupdate dan idnya"
        article delete -> delete<space> "masukan id article"
        ==========================================================================
        `
      );
    }
  }
  
  module.exports = View