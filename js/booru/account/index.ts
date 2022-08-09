import Errors from "./errors";
import profile from "./profile";
import { level, loggedIn, token, username } from "./store";
import login from "./login";
import logout from "./logout";
import register from "./register";

export * from "./errors";
export const Booru = { Errors, profile, register, login, logout, level, loggedIn, token, username };
export { Errors, profile, register, login, logout, level, loggedIn, token, username };
export default Booru;
