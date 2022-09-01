import Errors from "js/booru/account/errors";
import profile from "js/booru/account/profile";
import Store from "js/booru/account/store";
import login from "js/booru/account/login";
import logout from "js/booru/account/logout";
import register from "js/booru/account/register";

export * from "js/booru/account/errors";
export const Booru = { Errors, profile, register, login, logout, Store };
export { Errors, profile, register, login, logout, Store };
export default Booru;
