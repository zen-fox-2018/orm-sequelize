
class Views {
    static showAddedAuthor(input) {
        console.log(`You have successfully added this person! Total author: ${input.id}`)
    }

    static showFindByOne(input) {
        console.log(input)
    }

    static showFindAll(input) {
        console.log(input)
    }

    static showUpdated(data) {
        console.log(data)
    }

    static showDeleted(data) {
        console.log(data)
    }
}

module.exports = Views