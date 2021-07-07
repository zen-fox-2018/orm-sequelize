const Table = require('cli-table')

class View {
    
    static cliTable(data) {
        console.log(data.toString());
    }

    static add(data) {
        console.log('=========== new data created ===========');
        const table = new Table({
          head : Object.keys(data.dataValues),
          colWidths : [5,20,50,15,15,5,30,30]
        });
        table.push(Object.values(data.dataValues));
        console.log(table.toString());
        console.log('========================================');
        process.exit()
    }
    
    static display(data) {
        console.log('============= your result ==============');
        console.log(data);
        console.log('========================================');
        process.exit()
    }

    static displayAll(data) {
        // console.log('============= your result ==============');
        const table = new Table({
          head : Object.keys(data[0].dataValues),
          colWidths : [3,20,50,15,15,5,30,30]
        });
        data.forEach(e => {
            table.push(Object.values(e.dataValues));
        });
        console.log(table.toString());
        // console.log('========================================');
        process.exit()
    }

    static help() {
        console.log('=============== help ===============');
        console.log('node index.js author||tag||article add <data>');
        console.log('node index.js author||tag||article read_one <id>');
        console.log('node index.js author||tag||article read_all');
        console.log('node index.js author||tag||article update <id> <dataUpdate>');
        console.log('node index.js author||tag||article delete <id>');
    }

    static disErr(err) {
        console.log(err);
        process.exit()
    }
}

module.exports = View