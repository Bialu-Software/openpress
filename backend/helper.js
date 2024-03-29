const { models } = require('./db/');
const { salted_hash_password, salted_check_password } = require('./encryption');
const { Op } = require('sequelize');

class User {
  static async fetch_by_id(id) {
    /*
    Queries the database for the user with the specified id
    !Returns null if a user with this ID does not exist
    */
    const user = await models.user.findByPk(id);
    return user;
  }
  static async fetch_by_username(q_username) {
    /*
    Queries the database for the user with the specified username
    !Returns null if a user with this username does not exist
    */
    const user = await models.user.findOne({
      where: {
        username: q_username,
      },
    });
    return user;
  }
  static async fetch_by_email(q_email) {
    /*
    Queries the database for the user with the specified email
    !Returns null if a user with this email does not exist
    */
    const user = await models.user.findOne({
      where: {
        email: q_email,
      },
    });
    return user;
  }
  static async delete_by_id(uid) {
    /*
    Attempts to drop the row with the specified id.
    ! Returns false if we fail, otherwise true if we succeed
    */
    try {
      await models.user.destroy({ where: { id: uid } });
      return true;
    } catch (err) {
      return false;
    }
  }
  static async delete_by_username(username) {
    /*
    Attempts to drop the row with the specified username.
    ! Returns false if we fail, otherwise true if we succeed
    */
    const user = await User.fetch_by_username(username);
    if (!user) {
      return false;
    }
    return await User.delete_by_id(user.userid);
  }
  static async delete_by_email(email) {
    /*
    Attempts to drop the row with the specified email.
    ! Returns false if we fail, otherwise true if we succeed
    */
    const user = await User.fetch_by_email(email);
    if (!user) {
      return false;
    }
    return await User.delete_by_id(user.userid);
  }
  static async register(username, password, email) {
    /*
    Registers a new user with the specified information if possible
    Returns false if an error occoures, otherwise true if we succeed.
    */
    const hashed_pw = await salted_hash_password(password);
    try {
      await models.user.create({
        username: username,
        password: hashed_pw,
        email: email,
      });
      return true;
    } catch (err) {
      return false;
    }
  }
  static async login(username, password) {
    /*
    This function takes a username and plain password. If the user exists and password matches, it returns true, otherwise if either username or password are wrong, it returns false.
    */
    const user = await User.fetch_by_username(username);
    if (!user) {
      return false;
    }
    const match_pw = await salted_check_password(password, user.password);
    if (match_pw) {
      return true;
    } else {
      return false;
    }
  }
}

class Post {
  static async fetch_by_id(id) {
    /*
    Queries the database for the post with the specified id
    !Returns null if a post with this ID does not exist
    */
    const post = await models.post.findByPk(id);
    return post;
  }

  static async fetch_one_by_filter(flt) {
    /*
    Queries the database for the post with the specified filter
    !Returns null if a post matching this filter does not exist
    */
    const post = await models.post.findOne({
      where: {
        [Op.or]: Object.keys(flt).map((column) => ({ [column]: { [Op.like]: `%${flt[column]}%` } })),
      },
    });

    return post;
  }

  static async fetch_many_by_filter(flt, limit = 10, page = 1) {
    /*
    Queries the database for many posts matching the specified filter.
    Use the limit and page arguments to set how many rows to return and which page to return.
    Returns null if no such posts exist.
    */
    const offset = (page - 1) * limit;

    const posts = await models.post.findAll({
      where: {
        [Op.or]: Object.keys(flt).map((column) => ({ [column]: { [Op.like]: `%${flt[column]}%` } })),
      },
      limit,
      offset,
    });

    return posts;
  }

  static async fetch_all(limit = 10, page = 1) {
    /*
    Queries the database for all posts
    Use the limit and page arguments to set how many rows to return and which page to return.
    !Returns null if no posts exist
    */
    const offset = (page - 1) * limit;
    const posts = await models.post.findAll({
      limit: limit,
      offset: offset,
    });
    return posts;
  }

  static async create(image_url, headline, text, html, author, tags, timestamp) {
    /*
    Attempts to create a new post row from the specified arguments
    !Returns false if we fail, otherwise true if we succeed
    */
    try {
      models.post.create({
        image_url: image_url,
        headline: headline,
        text: text,
        html: html,
        author: author,
        tags: tags,
        timestamp: timestamp,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  static async delete_by_id(id) {
    /*
    Attempts to drop the row with the specified id.
    ! Returns false if we fail, otherwise true if we succeed
    */
    try {
      await models.post.destroy({ where: { postid: id } });
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = {
  User,
  Post,
};
