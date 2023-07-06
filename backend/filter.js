let posts = require("./data/posts.json");
let profiles = require("./data/profiles.json")

// the filter should filter based on headline, author, tags, text

function filter_posts(filters) {

    let { headline = false, text = false, author = false, tags = [] } = filters || {};
    let result = [];

    if (headline !== false) {
        result.push(...posts.filter(post => post.headline.includes(headline)));
    }

    if (text !== false) {
        result.push(...posts.filter(post => post.text.includes(text)));
        console.log(posts);
        console.log("text yes");
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
