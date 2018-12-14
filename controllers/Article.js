const Model = require('../models');
const ArticleView = require('../views/Article');
class Article {
  static addArticle(data) {
    let newArticle = {
      title : data[0],
      body : data[1],
      authorId : data[2],
      tagId : data[3]
    }
    Model.Article.create(newArticle, {logging : false})
      .then(() => {
        ArticleView.showSucces(`Successfully created ${JSON.stringify(newArticle)}`);
      })

      .catch((err) => {
        if (err.parent.constraint === 'custom_fkey_tagId') {
          ArticleView.showErr(`Tag id does not exists`);
        } else if (err.parent.constraint === 'custom_fkey_authorId') {
          ArticleView.showErr(`Author id does not exists`);
        } else {
          ArticleView.showErr(err.parent.constraint);
        }
      })
  }

  static findOne(data) {
    Model.Article.findByPk(data[0])
      .then((Article) => {
        if (Article) {
          ArticleView.showData(Article);
        } else {
          ArticleView.showErr(`Article is empty.`);
        }
      })

      .catch((err) => {
        ArticleView.showErr(err);
      })
  }

  static findAll() {
    Model.Article.findAll()
      .then((Articles) => {
        if (Articles.length) {
          ArticleView.showAllData(Articles)
        } else {
          ArticleView.showErr(`Article is empty.`)
        }
      })

      .catch((err) => {
        ArticleView.showErr(err);
      })
  }

  static updateArticle(data) {
    let idArticle = data.splice(-1, 1);
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
      obj[data[i]] = data[i+1];
    }
    Model.Article.update(obj, {where : {id : idArticle}})
      .then((data) => {
        data[0] == 1 ? ArticleView.showSucces(`Successfully updated Article ${idArticle}`) : ArticleView.showErr(`Article doesnt exists`);
      })

      .catch((err) => {
        ArticleView.showErr(err);
      })
  }

  static deleteArticle(data) {
    Model.Article.destroy({where: {id : data[0]}})
      .then((data) => {
        data == 1 ? ArticleView.showSucces(`Successfully deleted Article ${idArticle}`) : ArticleView.showErr(`Article doesnt exists`);
      })

      .catch((err) => {
        ArticleView.showErr(err);
      })
  }

  static help() {
    ArticleView.help();
  }
}

module.exports = Article;
