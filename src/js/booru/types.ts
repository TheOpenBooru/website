export class PostQuery {
    sort = "created_at";
    descending = true;

    include_tags: Array<string> = [];
    exclude_tags: Array<string> = [];

    created_after: number = null;
    created_before: number = null;

    ids: Array<number> = null;
    md5: string = null;
    sha256: string = null;
}

export class TagQuery {
    name_like = null;
    namespace = null;
    count_gt = null;
    limit = null;
}

export class PostEdit {
    rating: string = null;
    source: string = null;
    tags: Array<string> = null;
}

export class Image {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: string;
}

export class Post {
    id: number;
    created_at: number;
    uploader: number;
    deleted: boolean;
    source: string;
    rating: string;
    full: Image;
    preview: Image | null;
    thumbnail: Image;
    media_type: string;
    hashes: object;
    tags: Array<string>;
    comments: Array<number>;
    edits: Array<number>;
    upvotes: number;
    downvotes: number;
}

export class Profile {
    id: string;
    created_at: number;
    username: string;
    level: string;
    posts: Array<number>;
    comments: Array<number>;
    email: string;
    settings: string;
    upvotes: Array<number> = [];
    downvotes: Array<number> = [];
}

const Types = { Post, PostQuery, TagQuery, PostEdit, Image, Profile };
export default Types;
