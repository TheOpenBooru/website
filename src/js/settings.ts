const SettingsDefaults = {
    fullscreenPostPreviews: true,
    pauseVideosInBackground: true,
    searchLayout: "column",
    GridItemSize: 12,
    TagBlacklist: [],
    apiUrl: process.env.API_URL,
};


// const Settings = new Proxy(SettingsDefaults, {
//     get(obj, prop) {
//         if (!(prop in obj)) {
//             return undefined;
//         } else if (localStorage.getItem(prop)) {
//             let json = localStorage.getItem(prop);
//             try {
//                 let data = JSON.parse(json)
//                 return data.value
//             } catch {
//                 localStorage.removeItem(prop);
//                 return Settings[prop]
//             }
//         } else {
//             return obj[prop];
//         }
//     },
//     set(obj, prop, value) {
//         if (prop in obj) {
//             let json = JSON.stringify({value})
//             localStorage.setItem(prop, json)
//             return true;
//         } else {
//             return false;
//         }
//     }
// })

export default SettingsDefaults;
