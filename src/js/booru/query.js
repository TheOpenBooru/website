class PostQuery {
    limit = 64;
    index = 0;

    sort = "created_at";
    descending = true;

    include_tags = [];
    exclude_tags = [];

    created_after = null;
    created_before = null;

    md5 = null;
    sha256 = null;
}

export { PostQuery };
