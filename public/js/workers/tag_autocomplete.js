// import { all } from "../js/tags.js";

// const ENDPOINT = "http://192.168.0.82:57255";
// var tag_list = [];

// (async () => {
//     tag_list = await all()
// })();

// function binarySearchStartIndex(query, limit) {
//     const compare = (a, b) => a.localeCompare(b.slice(0, a.length));
//     debugger;
//     var pointer = Math.floor(tag_list.length / 2);
//     var jump = pointer;
//     while (true) {
//         jump = Math.floor(jump / 2);
//         var current = tag_list[pointer].name;
//         var direction = compare(query, current);

//         if (direction === 0) {
//             // Keep iterating upwards in the array until
//             // it reaches a value that doesn't start with text
//             while (compare(query, tag_list[pointer - 1].name) === 0) {
//                 pointer--;
//             }
//             break;
//         } else if (jump === 0) {
//             break;
//         } else {
//             pointer += jump * direction;
//         }
//     }
    
//     var returnTags = [];
//     for (let i = pointer; ;i++) {
//         var tag = tag_list[i]
//         if (compare(query,tag.name) !== 0)
//             break;
//         returnTags.push(tag_list[i]);
//     }
//     var returnTags = returnTags.sort((a,b) => a.count - b.count)
//     return returnTags.slice(0,limit);
// }

// onmessage = async (e) => {
//     const search = e.data;
    
//     var tags;
//     if (tag_list.length !== 0 || search.length > 1) {
//         tags = binarySearchStartIndex(e.data, 100);
//     } else {
//         tags = [];
//     }
//     self.postMessage({
//         timestamp: Date.now(),
//         tags,
//     });
// };