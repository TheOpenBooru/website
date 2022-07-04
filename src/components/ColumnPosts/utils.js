export function SplitPosts(array, parts) {
    let buckets = Array.apply(null, Array(parts)).map(() => []);
    array.forEach((v) => {
        let smallestColumnIndex = getShortestColumnIndex(buckets);
        buckets[smallestColumnIndex].push(v);
    });
    return buckets;
}


function getShortestColumnIndex(columns) {
    let heights = new Array(columns.length).fill(0);

    columns.forEach((clmn, i) => {
        let total = 0;
        clmn.forEach((v) => (total += v.full.height / v.full.width));
        heights[i] = total;
    });
    
    let MinHeight = Math.min(...heights);
    let index = heights.indexOf(MinHeight);
    return index;
}
