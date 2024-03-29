import { Post } from "openbooru/lib/types";


export function SplitPosts(posts: Array<Post>, parts: number) {
    let buckets = Array.apply(null, Array(parts)).map(() => []);
    
    function reduceInsertPost(bucketIndex, post) {
        let currentBucket = buckets[bucketIndex];
        let nextBucketIndex = (bucketIndex + 1) % parts
        let nextBucket = buckets[nextBucketIndex]
        
        if (getColumnHeight(currentBucket) > getColumnHeight(nextBucket)) {
            return reduceInsertPost(nextBucketIndex, post);
        } else {
            currentBucket.push(post);
            return nextBucketIndex
        }
    }
    posts.reduce(reduceInsertPost, 0)

    return buckets;
}


function getColumnHeight(column: Array<Post>) {
    return column.reduce((total,post) => {
        let height = Math.min((post.full.height / post.full.width), 2)
        return total + height
    },0)
}

