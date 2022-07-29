import Errors from "./errors";
import Types from "./types";
import Account from "./account";
import Posts from "./posts";
import Tags from "./tags";
import Misc from "./misc";
import BSL from "./bsl";
import Info from "./info";

const Booru = { Account, Posts, Tags, Misc, Types, BSL, Info, Errors };
export { Account, Posts, Tags, Misc, Types, BSL, Info, Errors };
export default Booru;
