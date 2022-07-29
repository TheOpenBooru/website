export const LoginFailure = new Error("Failed to Login");
export const PasswordReset = new Error("Password Was Reset");
export const WrongAPIVersion = new Error("The API is the wrong version");
export const InsufficentPermissions = new Error("You don't have the correct permissions");
export const RateLimited = new Error("Your being rate-limited, please wait");
export const BadPasswordRequirements = new Error("Your Password Does Not Meet the Requirements");
export const UserAlreadyExists = new Error("User with that name already exists");

const Booru = {
    LoginFailure,
    PasswordReset,
    WrongAPIVersion,
    RateLimited,
    BadPasswordRequirements,
    UserAlreadyExists,
};
export default Booru;
