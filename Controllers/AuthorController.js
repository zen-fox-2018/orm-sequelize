const view = require('../view');
const Models = require('../models');
class mainView {
    static showMenu() {
        view.showMenu()
    }
    static addAuthor(dataAuthor) {
        Models.Author.create({
            firstName : dataAuthor[0],
            lastName: dataAuthor[1],
            religion: dataAuthor[2],
            gender: dataAuthor[3],
            age: dataAuthor[4],
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(function(data) {
            view.dataAuthorAdded();
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
    static read_one(id) {
        Models.Author.findById(id[0])
        .then(function(Author) {
            view.showAuthorData(Author);
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
    static readAllData() {
        Models.Author.findAll()
        .then(function(Author) {
            view.showAuthors(Author)
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
    static updateData(theData) {
        let changeData = {}
        changeData[theData[0]] = theData[1]
        Models.Author.update(changeData, 
            {where : 
                {
                    id : theData[theData.length-1]
                }
        })
        .then(function() {
            view.dataUpdated()
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
    static deleteData(target) {
        Models.Author.destroy({
            where: {
                id : target
            }
        })
        .then(function() {
            view.dataDeleted()
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
}
module.exports = mainView