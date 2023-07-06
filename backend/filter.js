let posts = require("./data/posts.json");

// the filter should filter based on headline, author, tags, 

function filter_posts(filters) {
    
    let { text = false, time = false, saves = false, amount = false } = filters || {};
    let result = [];

    if (text !== false) {
        result.push(...posts.filter(post => post.text.includes(text)));
        console.log("text yes");
    }

    if (time !== false) {
        result.push(...posts.filter(post => post.timestamp >= time));
        console.log("time yes");
    }

    result = result.filter((obj, index, self) =>
        index === self.findIndex(item => JSON.stringify(item) === JSON.stringify(obj))
    );

    return result;
}

module.exports = {
    filter_posts
};
