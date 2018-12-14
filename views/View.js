
class View {
    static showData(data) {
        console.log(data);
        
    }

    static showMuchData(data) {
        data.forEach(dataAll=> {
            console.log(dataAll[i].dataValues);
            
        })
    }
    static showErr(err) {
        console.log(err);
        
    }

    static showHelp() {
        console.log(`===documentation===============================================================
author add -> add<space> "data yang ingin dimasukkan"
author read_one -> read_one<space> "masukkan id author
author read_all -> read_all
author update -> update<space> "masukkan data yang ingin di update dan idnya
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukkan"
tag read_one -> read_one<space> "masukkan id tag"
tag read_all -> read_all
tag update -> update<space> "masukkan data yang ingin di update dan idnya"
tag delete -> delete<space> "masukkan id author"
article add -> add<space> "data yang ingin dimasukkan"
article read_one -> read_one<space> "masukkan id article"
article read_all -> read_all
article update-> update<space> "masukkan data yang ingin di update dan idnya"
article delete -> delete<space> "masukkan id author"
===============================================================================`);
      
        
    }
}

module.exports = View