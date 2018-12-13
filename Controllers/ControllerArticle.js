const View = require(`../Views/View`)
const Model = require(`../models`)
const Table = require(`cli-table`)
const Article = Model.Article

class ControllerArticle {
    static add(title, body, authorId, tagId) {
        Article.create({
            title: title,
            body: body,
            AuthorId: authorId,
            TagId: tagId,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            console.log(this.readAll());

        }).catch((err) => {
            console.log(err);
            
        });

    }

    static read_one(id) {
        var table = new Table({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });
        let values = []
        table.push(
            [`id`, 'title', 'body', 'Author ID', `Tag ID`, `created At`, `updated at`],
        );
        Article.findOne({
            where: {
                id: id
            }
        }).then((result) => {
            let arrResult = []
            for (const key in result.dataValues) {
                arrResult.push(result.dataValues[key])
            }
            table.push(arrResult)
            console.log(table.toString());

        }).catch((err) => {
            console.log(err);

        });
    }

    static readAll() {
        var table = new Table({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });
        let values = []
        table.push(
            [`id`, 'title', 'body', 'Author ID', `Tag ID`, `created At`, `updated at`],
        );
        Article.findAll().then((result) => {
            let arr = []
            result.filter((e) => {
                arr.push(e.dataValues)
            })
            
            for (let i = 0; i < arr.length; i++) {
                let result = []
                for (const key in arr[i]) {
                    result.push(arr[i][key])
                }
                table.push(result)
            }
            console.log(table.toString());

            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static update(id, arr) {
        let obj = {}

        for (let i = 0; i < arr.length; i += 2) {
            obj[arr[i]] = arr[i + 1]
        }
        Article.update(obj, {
            where: {
                id: id
            }
        }).then((result) => {
            var table = new Table({
                chars: {
                    'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                    , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                    , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                    , 'right': '║', 'right-mid': '╢', 'middle': '│'
                }
            });
            let values = []
            table.push(
                [`id`, 'title', 'body', 'Author ID', `Tag ID`, `created At`, `updated at`],
            );
            Article.findAll().then((result) => {
                let arr = []
                result.filter((e) => {
                    arr.push(e.dataValues)
                })

                for (let i = 0; i < arr.length; i++) {
                    let result = []
                    for (const key in arr[i]) {
                        result.push(arr[i][key])
                    }
                    table.push(result)
                }

                console.log(table.toString());
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
            
        });

    }

    static erase(data) {
        let obj = {}
        for (let i = 0; i < data.length; i+=2) {
            obj[data[i]] = data[i+1]
        }
        console.log(obj);
        
        Article.destroy({
            where: obj
        }).then((result) => {
            console.log(this.readAll());
            
        }).catch((err) => {
            console.log(err);
            
        });
       

    }
}

module.exports = ControllerArticle