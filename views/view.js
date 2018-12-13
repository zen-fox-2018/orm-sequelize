
class View {
  static showHelp(){
    console.log('=====documentation============================================');
    console.log('author add -> add<space> "data yang ingin dimasukan"');
    console.log('author read_one -> read_one<space> "masukan id author"');
    console.log('author read_all -> read_all');
    console.log('author update -> update <space> "masukan data yang ingin diupdate dan idnya"');
    console.log('author delete -> delete<space> "masukan id author"');
    console.log('article add -> add<space> "data yang ingin dimasukan"');
    console.log('article read_one -> read_one<space> "masukan id article"');
    console.log('article read_all -> read_all');
    console.log('article update -> update <space> "masukan data yang ingin diupdate dan idnya"');
    console.log('article delete -> delete<space> "masukan id article"');
    console.log('tag add -> add<space> "data yang ingin dimasukan"');
    console.log('tag read_one -> read_one<space> "masukan id tag"');
    console.log('tag read_all -> read_all');
    console.log('tag update -> update <space> "masukan data yang ingin diupdate dan idnya"');
    console.log('tag delete -> delete<space> "masukan id tag"');
  }

  static default(){
    console.log('type help for list of commands');
  }
}

module.exports = View;
