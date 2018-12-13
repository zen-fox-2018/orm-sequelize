class View {
    
    static cliTable(data) {
        console.log(data.toString());
    }

    static add(data) {
        console.log('=========== new data created ===========');
        console.log(data);
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
        console.log('============= your result ==============');
        data.forEach(e => {
            console.log(e.dataValues);
        });
        console.log('========================================');
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