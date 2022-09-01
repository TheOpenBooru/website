const ctx: Worker = self as any;
import PouchDB from "pouchdb";

console.log("Installed  ")
(async () => {

})()
const db = new PouchDB("tags");

let r = fetch("http://slate:8443/tags/all")
