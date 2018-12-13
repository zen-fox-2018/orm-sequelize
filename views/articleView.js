class View {
    static readData(allData) {
        console.log(`Here's all the data: `);
        console.log(allData);
    }

    static readError(err) {
        console.log(`ERROR: ${err}`);
    }

    static addSucceed(data) {
        console.log(`Data has been added to the table`);
        console.log(data);   
    }

    static addErr(err) {
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