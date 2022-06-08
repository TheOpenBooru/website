export class PostQuery {
    sort = "created_at";
    descending = true;

    include_tags = [];
    exclude_tags = [];

    created_after = null;
    created_before = null;

    md5 = null;
    sha256 = null;
}

export class TagQuery {
    name_like = null
    namespace = null
    count_gt = null
    limit = null
}
