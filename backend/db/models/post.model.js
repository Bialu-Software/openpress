const { DataTypes } = require("sequelize");
const User = require("./user.model");

function remove_illegal_tag_characters(inputString) {
  const regex = /[^A-Za-z0-9_]/g;
  const cleanedString = inputString.replace(regex, "");
  return cleanedString;
}

module.exports = (sequelize) => {
  sequelize.define("post", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    image_url: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    headline: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    html: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
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
      set(value) {
        modified_value = remove_illegal_tag_characters(value);
        const tags_str = modified_value ? modified_value.join(",") : "";
        this.setDataValue("tags", tags_str);
      },
    },
    timestamp: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
    },
  });
};
