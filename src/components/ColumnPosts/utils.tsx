export function SplitPosts(posts: Array<object>, parts: number) {
    let buckets = Array.apply(null, Array(parts)).map(() => []);

    posts.reduce((bucketIndex, post, i) => {
        let currentBucket = buckets[bucketIndex];
        let nextBucket = buckets[(bucketIndex + 1) % parts]
        if (getColumnHeight(currentBucket) > getColumnHeight(nextBucket)) {
            nextBucket.push(post);
            return (bucketIndex + 2) % parts
        } else {
            currentBucket.push(post);
            return (bucketIndex + 1) % parts
        }
    }, 0)

    return buckets;
}


function getColumnHeight(column: Array<object>) {
    return column.reduce((total,post) => {
        let height = (post.full.height / post.full.width)
        return total + height
    },0)
}

function getShortestColumnIndex(columns) {
    let heights = columns.map(getColumnHeight);
    let MinHeight = Math.min(...heights);
    let index = heights.indexOf(MinHeight);
    return index;
}
