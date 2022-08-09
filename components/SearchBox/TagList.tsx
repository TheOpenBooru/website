import Image from "next/image";
import React from "react";
import styles from "./TagList.module.css";

export default function TagList(props) {
    let { includeTags, setIncludeTags, excludeTags, setExcludeTags } = props;
    
    function removeTag(tag) {
        if (includeTags.includes(tag)) {
            includeTags = includeTags.filter((t) => t !== tag);
            setIncludeTags(includeTags);
        } else {
            excludeTags = excludeTags.filter((t) => t !== tag);
            setExcludeTags(excludeTags);
        }
    }

    function toggleTagInclude(tag) {
        if (!includeTags.includes(tag)) {
            removeTag(tag);
            includeTags.push(tag);
            setIncludeTags(includeTags);
        } else {
            removeTag(tag);
            excludeTags.push(tag);
            setExcludeTags(excludeTags);
        }
    }

    let allTags = includeTags.concat(excludeTags);
    return (
        <div id={styles.TagList}>
            {allTags.map((tag) => <Tag tag={tag} key={tag}/>)}
        </div>
    );

    function Tag(props) {
        let { tag } = props;
        let included = includeTags.includes(tag);
        let tag_class = included ? styles.TagInclude : styles.ExcludedTag;
        tag_class += " " + styles.TagText
        return (
            <div className={styles.Tag}>
                <Image
                    className={styles.RemoveTag}
                    src="/images/cross.svg"
                    alt="Remove Tag"
                    height="20"
                    width="20"
                    onClick={() => removeTag(tag)}
                />
                <span onClick={() => toggleTagInclude(tag)} className={tag_class}>{tag}</span>
            </div>
        );
    }
}
