class View {
  static help() {
    console.log(`
    ========================== AVAILABLE COMMAND ==========================
    author add --> add <space> 'data yg ingin dimasukan'
    author read_one --> read_one <space> 'author id'
    author read_all --> read_all
    author update --> update <space> 'data yang ingin diupdate dan idnya'
    author delete --> delete <space> 'id author'
    ========================================================================
    tag add --> add <space> 'data yg ingin dimasukan'
    tag read_one --> read_one <space> 'tag id'
    tag read_all --> read_all
    tag update --> update <space> 'data yang ingin diupdate dan idnya'
    tag delete --> delete <space> 'id tag'
    ========================================================================
    article add --> add <space> 'data yg ingin dimasukan'
    article read_one --> read_one <space> 'article id'
    article read_all --> read_all
    article update --> update <space> 'data yang ingin diupdate dan idnya'
    article delete --> delete <space> 'id article'
    ========================================================================
    `)
  }

  static display(data) {
    console.log(`====================================================\n`, data)
  }

  static disErr(err) {
    console.log(`ERROR :\n`, err)
  }
}
module.exports = View