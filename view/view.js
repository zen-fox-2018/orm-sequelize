class View {
    static showAdd(data) {
        console.log('=============-Data Terbaru-=============')
        console.log(data)
        console.log('========================================')
        process.exit()
    }

    static showData(data) {
        console.log('=========-Hasil Pencarian Data-=========')
        console.log(data)
        console.log('========================================')
        process.exit()
    }

    static showAll(data) {
        console.log('=========-Hasil Pencarian Data-=========')
        data.forEach(e => {
            console.log(e.dataValues)
        })
        console.log('========================================')
        process.exit() 
    }

    static updateSuccess(data) {
        console.log(`========-Data berhasil diupdate-========`)
        console.log(data)
        console.log('========================================')
        process.exit() 
    }

    static showError(err) {
        console.log(err)
    }
}

module.exports = View