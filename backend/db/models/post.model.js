const { DataTypes } = require("sequelize");
//const User = require("./user.model");

function remove_illegal_tag_characters(inputString) {
  const regex = /[^A-Za-z0-9_]/g;
  const cleanedString = inputString.replace(regex, "");
  return cleanedString;
}

module.exports = (sequelize) => {
  sequelize.define("post", {
    postid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    image_url: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    headline: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: false,
    },
    html: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "users",
        key: "userid",
      },
    },
    tags: {
      type: DataTypes.TEXT,
      get() {
        const hash_tag = "#";
        const tags_str = this.getDataValue("tags");
        const tags_arr = tags_str ? tags_str.split(",") : [];
        return tags_arr.map((tag) => hash_tag + tag);
      },
      set(values) {
        const cleanedValues = values.map(remove_illegal_tag_characters);
        const tagsStr = cleanedValues.join(",");
        this.setDataValue("tags", tagsStr);
      },
    },
    timestamp: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
    },
  });
};
