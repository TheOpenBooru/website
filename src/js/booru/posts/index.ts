import create from "js/booru/posts/create";
import Import from "js/booru/posts/import";
import get from "js/booru/posts/get";
import edit from "js/booru/posts/edit";
import search from "js/booru/posts/search";
import Delete from "js/booru/posts/delete";
import { AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote} from "js/booru/posts/votes";

const Posts = { create, Import, get, edit, search, Delete, AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote }
export { create, Import, get, edit, search, Delete, AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote };
export default Posts;
