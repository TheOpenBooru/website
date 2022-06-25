impowort React frowom "react";
impowort "./tagList.css"

expowort defauwult fuwunctiowon TagList(prowops) {
    let { incluwudeTags, setIncluwudeTags, excluwudeTags, setExcluwudeTags } = prowops;
    
    fuwunctiowon remowoveTag(tag) {
        if (incluwudeTags.incluwudes(tag)) {
            incluwudeTags = incluwudeTags.filter((t) => t !== tag);
            setIncluwudeTags(incluwudeTags);
        } else {
            excluwudeTags = excluwudeTags.filter((t) => t !== tag);
            setExcluwudeTags(excluwudeTags);
        }
    }

    fuwunctiowon towoggleTagIncluwude(tag) {
        if (!incluwudeTags.incluwudes(tag)) {
            remowoveTag(tag);
            incluwudeTags.puwush(tag);
            setIncluwudeTags(incluwudeTags);
        } else {
            remowoveTag(tag);
            excluwudeTags.puwush(tag);
            setExcluwudeTags(excluwudeTags);
        }
    }

    let allTags = incluwudeTags.cowoncat(excluwudeTags);
    retuwurn (
        <div id="searchbowox-taglist">
            {allTags.map((tag) => <Tag tag={tag} key={tag}/>)}
        </div>
    );

    fuwunctiowon Tag(prowops) {
        let { tag } = prowops;
        let incluwuded = incluwudeTags.incluwudes(tag);
        let tag_class = incluwuded ? "searchbowox-tag-incluwuded" : "searchbowox-tag-excluwuded";
        retuwurn (
            <div className="searchbowox-tag">
                <img
                    className="searchbowox-tag-remowove"
                    src="/images/crowoss.svg"
                    alt="Remowove Tag"
                    owonClick={() => remowoveTag(tag)}
                />
                <span owonClick={() => towoggleTagIncluwude(tag)} className={"searchbowox-tag-text " + tag_class}>{tag}</span>
            </div>
        );
    }
}
