class View {
    static displayErr(err) {
        console.log(err)
    }

    static help() {
        console.log(
            `
        ============== ALL COMMAND ==================================
        author add <first_name> <last_name> <religion> <gender> <age>
        author read_one <id>
        author read_all 
        author update <column> <value> <id>
        author delete <id>
        tag add <name>
        tag read_one <id>
        tag read_all
        tag update <column> <value> <id>
        tag delete <id>
        article add <title> <body> <AuthorId> <TagId>
        article read_one <id>
        article update <column> <value>
        article delete <id>
            `
        )
    }

    static displaySuccess(data) {
        console.log(data)
    }
}

module.exports = View