class View {

  static showHelp() {
    console.log(`\n==== documentation =======================================`);
    console.log(`author add -> add<space> "data yang ingin dimasukan"`);
    console.log(`author read_one -> read_one<space> "masukan id author"`);
    console.log(`author read_all -> read_all`);
    console.log(`author update -> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`author delete -> delete<space> "masukan id author"`);
    console.log(`tag add -> add<space> "data yang ingin dimasukan"`);
    console.log(`tag read_one -> read_one<space> "masukan id author"`);
    console.log(`tag read_all -> read_all`);
    console.log(`tag update -> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`tag delete -> delete<space> "masukan id author"`);
    console.log(`article add -> add<space> "data yang ingin dimasukan"`);
    console.log(`article read_one -> read_one<space> "masukan id author"`);
    console.log(`article read_all -> read_all`);
    console.log(`article update -> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`article delete -> delete<space> "masukan id author"`);
  }

  static showErr(err) {
    console.log('ERR :', err);
  }

  static print(data) {
    console.log(data);
  }
  
}

module.exports = View;