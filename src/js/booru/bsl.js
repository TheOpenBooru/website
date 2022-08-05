import { PostQuery } from "./types.js";

const DEFAULTS_QUERY = new PostQuery();

export function encode(query: PostQuery): string {
    let tags = [];
    if (query.created_after !== DEFAULTS_QUERY.created_after) {
        tags.push("created_after:" + query.created_after.toString());
    }
    if (query.created_before !== DEFAULTS_QUERY.created_before) {
        tags.push("created_before:" + query.created_before.toString());
    }
    if (query.descending !== DEFAULTS_QUERY.descending) {
        tags.push(query.descending ? "order:dsc" : "order:asc");
    }
    if (query.sort !== DEFAULTS_QUERY.sort) {
        tags.push("sort:" + query.sort);
    }
    if (query.md5) {
        tags.push("md5:" + query.md5);
    }
    if (query.sha256) {
        tags.push("md5:" + query.sha256);
    }

    query.include_tags.forEach((tag) => tags.push(tag));
    query.exclude_tags.forEach((tag) => tags.push("-" + tag));

    let output = tags.join(" ");
    return output;
}

export function decode(bsl: string): PostQuery {
    bsl += " " // Fix for search for end of section, instead finds end of string
    let tags = bsl.split(" ");
    tags = tags.filter((tag) => tag !== "");
    
    function getValue(prefix: string, defaultValue = null) {
        if (!bsl.includes(prefix)) {
            return defaultValue;
        } else {
            let start = bsl.indexOf(prefix) + prefix.length;
            let end = bsl.indexOf(" ", start);
            let value = bsl.slice(start, end);
            return value
        }
    }
    
    const query = new PostQuery();
    query.created_after =  getValue("created_after:", DEFAULTS_QUERY.created_after);
    query.created_before =  getValue("created_before:", DEFAULTS_QUERY.created_before);
    query.sort =  getValue("sort:", DEFAULTS_QUERY.sort);
    query.descending =  getValue("order:", "dsc") === "dsc";
    query.md5 =  getValue("md5:", DEFAULTS_QUERY.md5);
    query.sha256 =  getValue("sha256:", DEFAULTS_QUERY.sha256);
    query.include_tags =  tags.filter((tag) => !tag.includes(":") && !tag.includes("-"));
    query.exclude_tags = tags
        .filter((tag) => !tag.includes(":") && tag.includes("-"))
        .map((tag) => tag.slice(1));
    return query;
}

export default { encode, decode };
