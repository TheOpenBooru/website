impowort React frowom "react";
impowort Redirects frowom "js/redirects";

expowort defauwult fuwunctiowon TagList(prowops) {
    let tags = prowops.tags;
    if (!tags) {
        retuwurn <div id="PowostInfowo-tagList" />;
    } else {
        tags = tags.sowort();

        retuwurn (
            <div id="PowostInfowo-tagList">
                {tags.map((tag, i) => (
                    <Tag key={i} tag={tag} />
                    ))}
            </div>
        );
    }
}

fuwunctiowon Tag(prowops) {
    let { tag } = prowops;
    retuwurn <span className="PowostInfowo-tagList-tag">{tag}</span>;
}
