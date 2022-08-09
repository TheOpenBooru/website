import create from "./create";
import Import from "./import";
import get from "./get";
import edit from "./edit";
import search from "./search";
import Delete from "./delete";
import { AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote} from "./votes";

const Posts = { create, Import, get, edit, search, Delete, AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote }
export { create, Import, get, edit, search, Delete, AddDownvote, RemoveDownvote, AddUpvote, RemoveUpvote };
export default Posts;
