export const PostDoesNotExist = new Error("That post does not exist");
export const PostAlreadyExists = new Error("This post already exists");
export const ValidationError = new Error("Validation Error, maybe the API is the wrong version");
export const RateLimited = new Error("Your being rate-limited, please wait");
export const PermisionError = new Error("You don't have the correct permissions");

const Errors = {
    PostDoesNotExist,
    PostAlreadyExists,
    ValidationError,
    RateLimited,
    PermisionError,
};
export default Errors;
