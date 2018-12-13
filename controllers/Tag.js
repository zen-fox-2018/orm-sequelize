const Model = require('../models');
const TagView = require('../views/Tag');
class Tag {
  static addTag(data) {
    let newTag = {
      name : data[0]
    }
    Model.Tag.create(newTag, {logging : false})
      .then(() => {
        TagView.showSucces(`Successfully created ${JSON.stringify(newTag)}`);
      })

      .catch((err) => {
        TagView.showErr(err);
      })
  }

  static findOne(data) {
    Model.Tag.findByPk(data[0])
      .then((tag) => {
        TagView.showData(tag)
      })

      .catch((err) => {
        TagView.showErr(err);
      })
  }

  static findAll() {
    Model.Tag.findAll()
      .then((tags) => {
        TagView.showData(tags)
      })

      .catch((err) => {
        TagView.showErr(err);
      })
  }

  static updateTag(data) {
    let idTag = data.splice(-1, 1);
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
      obj[data[i]] = data[i+1];
    }
    Model.Tag.update(obj, {where : {id : idTag}})
      .then((data) => {
        data[0] == 1 ? TagView.showSucces(`Successfully updated tag ${idTag}`) : TagView.showErr(`Tag doesnt exists`);
      })

      .catch((err) => {
        TagView.showErr(err);
      })
  }

  static deleteTag(data) {
    Model.Tag.destroy({where: {id : data[0]}})
      .then((data) => {
        data == 1 ? TagView.showSucces(`Successfully deleted tag ${idTag}`) : TagView.showErr(`Tag doesnt exists`);
      })

      .catch((err) => {
        TagView.showErr(err);
      })
  }

  static help() {
    TagView.help();
  }
}

module.exports = Tag;
