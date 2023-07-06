let posts = require("./data/posts.json");
let profiles = require("./data/profiles.json")

// the filter should filter based on headline, author, tags

function filter_posts(filters) {

    let { headline = false, author = false, tags = [] } = filters || {};
    let result = [];

    if (headline !== false) {
        result.push(...posts.filter(post => post.headline.includes(headline)));
    }

    // author search todo

    if (tags.length > 0) {
        result.push(...posts.filter(post => tags.every(tag => post.tags.includes(tag))));
    }

    result = result.filter((obj, index, self) =>
        index === self.findIndex(item => JSON.stringify(item) === JSON.stringify(obj))
    );

    return result;

}

module.exports = {
    filter_posts
};
