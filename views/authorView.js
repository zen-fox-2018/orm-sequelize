class View {
    static helpText() {
        console.log(
            `
            ============================= documentation ===================================
                author add -> add<space> "data yang ingin dimasukkan"
                author read_one -> read_one<space> "masukkan id author"
                author read_all -> read_all
                author update -> update<space> "masukkan data yang ingin di update dan idnya"
                author delete -> delete<space> "masukkan id author"
                tag add -> add<space> "data yang ingin dimasukkan"
                tag read_one -> read_one<space> "masukkan id tag"
                tag read_all -> read_all
                tag update -> update<space> "masukkan data yang ingin di update dan idnya"
                tag delete -> delete<space> "masukkan id author"
                article add -> add<space> "data yang ingin dimasukkan"
                article read_one -> read_one<space> "masukkan id article"
                article read_all -> read_all
                article update -> update<space> "masukkan data yangingin di update dan idnya"
                article delete -> delete<space> "masukkan id author
            ===============================================================================
            `
        )
    }

    static readData(allData) {
        console.log(`Here's all the data: `);
        console.log(allData);
    }

    static readError(err) {
        console.log(`ERROR: ${err}`);
    }

    static addAuthorSucceed(data) {
        console.log(`Data has been added to the table`);
        console.log(data);   
    }

    static addAuthorErr(err) {
        console.log(`ERROR: ${err}`);
    }

    static readOneData(data) {
        console.log(`Here's the author's data you are looking for: `);
        console.log(data);
    }

    static updateSucceed(data) {
        console.log(`Update Data Succeed!`);
        console.log(data);
    }

    static error(err) {
        console.log(`ERROR: ${err}`)
    }

    static dataDeleted() {
        console.log(`Delete data succeed`);
        
    }
}

module.exports = View