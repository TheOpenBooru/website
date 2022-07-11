export class PostQuery {
    sort: String = "created_at";
    descending: Boolean = true;

    include_tags: Array<String> = [];
    exclude_tags: Array<String> = [];

    created_after: BigInt = null;
    created_before: BigInt = null;

    md5: String = null;
    sha256: String = null;
}

export class TagQuery {
    name_like = null;
    namespace = null;
    count_gt = null;
    limit = null;
}

export class PostEdit {
    rating: String = null;
    source: String = null;
    tags: Array<String> = null;
}

const Types = { PostQuery, TagQuery, PostEdit };
export default Types;