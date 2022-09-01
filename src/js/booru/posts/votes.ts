import Settings from "js/settings";
import { Account, Errors } from "js/booru";

function MakeRequest(url) {
    return new Promise<void>((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", "Bearer " + Account.Store.token);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve();
            } else {
                if (xhr.status === 404) {
                    reject(Errors.PostDoesNotExist);
                } else if (xhr.status === 422) {
                    reject(Errors.ValidationError);
                } else if (xhr.status === 429) {
                    reject(Errors.RateLimited);
                }
            }
        };
        xhr.send();
    });
}

export async function AddUpvote(post_id) {
    MakeRequest(`${Settings.apiUrl}/post/${post_id}/upvote/add`);
}

export async function RemoveUpvote(post_id) {
    MakeRequest(`${Settings.apiUrl}/post/${post_id}/upvote/remove`);
}

export async function AddDownvote(post_id) {
    MakeRequest(`${Settings.apiUrl}/post/${post_id}/downvote/add`);
}
export async function RemoveDownvote(post_id) {
    MakeRequest(`${Settings.apiUrl}/post/${post_id}/downvote/remove`);
}
