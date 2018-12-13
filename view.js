class view {
    static showMenu() {
        let theMenu = ['=======documentation====================', 'author add -> add<space> "data yang ingin dimasukkan"', 'author read_one -> read_one<space> "masukkan id author"', 'author read_all -> read_all', 'author update -> update<space> "masukkan data yang ingin di update dan idnya"', 'author delete -> delete<space> "masukkan id author"', 'tag add -> add<space> "data yang ingin dimasukkan"', 'tag read_one -> read_one<space> "masukkan id tag"', 'tag read_all -> read_all', 'tag update -> update<space> "masukkan data yang ingin di update dan idnya', 'tag delete -> delete<space> "masukkan id author"', 'article add -> add<space> "data yang ingin dimasukkan"', 'article read_one -> read_one<space> "masukkan id article"', 'article read_all -> read_all', 'article update -> update<space> "masukkan data yang ingin di update dan idnya"', 'article delete -> delete<space> "masukkan id author"']
        for (let i = 0; i <= theMenu.length-1; i++) {
            console.log(theMenu[i])
        }
    }
    static dataAuthorAdded() {
        console.log('New Author Added')
    }
    static showErr(err) {
        console.log(err)
    }
    static showAuthorData(data) {
        //data.get({plain:true})
        console.log(data.dataValues)
    }
    static showAuthors(dataAuthor) {
        for (let i = 0; i <= dataAuthor.length-1; i++) {
            console.log(dataAuthor[i].dataValues)
        }
    }
    static dataUpdated() {
        console.log("Data has been updated")
    }
    static dataDeleted() {
        console.log("Data has been deleted")
    }
}
module.exports = view;