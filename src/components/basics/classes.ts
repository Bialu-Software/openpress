class SavedPosts {
    static getSavedPosts() {
        const rawData = localStorage.getItem("savedPosts");

        return {
            rawData: rawData,
            parsedData: rawData ? JSON.parse(rawData) : []
        }
    }

    static checkPost(id: number | undefined) {
        const postArrayIndex: number = SavedPosts.getSavedPosts().parsedData.indexOf(String(id));

        return postArrayIndex;
    }

    static setItem(id: number | undefined) {
        const postId: string = String(id);
        const savedPostsData = SavedPosts.getSavedPosts();

        if(savedPostsData.rawData) {
            const savedPostsArray: string[] = savedPostsData.parsedData;
            let newPosts: string[] = [];

            if(SavedPosts.checkPost(id) === -1) {
                newPosts = savedPostsArray.concat([postId]);
            } else {
                savedPostsArray.splice(SavedPosts.checkPost(id), 1);
                newPosts = savedPostsArray;
            }
    
            localStorage.setItem("savedPosts", JSON.stringify(newPosts));
        } else {
            localStorage.setItem("savedPosts", JSON.stringify([postId]));
        }
    }
}
export {
    SavedPosts
};