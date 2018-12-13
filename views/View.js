class View {
    static documentation() {
        console.log('===== documentation ===============================================')
        console.log('author add -> add<space> "data yang ingin dimasukkan"')
        console.log('author read_one -> read_one<space> "masukkan id author"')
        console.log('author read_all -> read_all')
        console.log('author update -> update<space> "masukkan data yang ingin di update dan idnya"')
        console.log('author delete -> delete<space> "masukkan id author"')
    }

    static displayError(msg, err) {
        console.log(msg)
        console.log(err)
    }

    static displaySuccess(msg) {
        console.log(msg)
    }
}

module.exports = View