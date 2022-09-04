import Settings from "js/settings";
import { Account } from "js/booru";
import OpenBooru, { Types } from "openbooru";
import { cache, CacheType, CacheScope } from 'cache-decorator';

const booru = new OpenBooru(Settings.apiUrl, Account.Store.token)

export default class Tags{
    static async get(tag: string): Promise<Types.Tag | null> {
        let tags = await booru.TagsSearch({
            name_like: tag,
            limit: 1
        })
        return tags[0] || null;
    }
    
    static async autocomplete(text: string, limit: number = 5): Promise<Types.Tag[]> {
        if (!text) return []
        
        let tags = await booru.TagsSearch({
            name_like: text,
            limit: limit,
        });
        return tags
    }
}