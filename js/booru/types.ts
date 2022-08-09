import { Data } from "dataclass";

export class PostQuery {
    sort = "created_at";
    descending = true;

    include_tags: Array<string> = [];
    exclude_tags: Array<string> = [];

    created_after: bigint = null;
    created_before: bigint = null;

    ids: Array<bigint> = null;
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
    height: bigint;
    width: bigint;
    type: string;
}

export class Post {
    id: bigint;
    created_at: number;
    uploader: bigint;
    deleted: boolean;
    source: string;
    rating: string;
    full: Image;
    preview: Image | null;
    thumbnail: Image;
    media_type: string;
    hashes: object;
    tags: Array<string>;
    comments: Array<bigint>;
    edits: Array<bigint>;
    upvotes: bigint;
    downvotes: bigint;
}

export class Profile {
    id: string;
    created_at: bigint;
    username: string;
    level: string;
    posts: array<bigint>;
    comments: array<bigint>;
    email: string;
    settings: string;
    upvotes: array<bigint> = [];
    downvotes: array<bigint> = [];
}

const Types = { Post, PostQuery, TagQuery, PostEdit, Image, Profile };
export default Types;
