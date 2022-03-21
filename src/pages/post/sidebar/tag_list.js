import React from 'react';
import './tag_list.css';

function Tag(props) {
    let namespace = props.namespace || 'generic';
    return (
        <a className={`namespace-${namespace}`} href={`/posts?query=${props.name}`}>
            {props.name}
        </a>
    );
}

function TagList(props) {
    let tags = props.tags;
    if (!tags) {
        return (<div className="tag-list"/>)
    } else {
        return (
            <div className="tag-list">
                {tags.map((tag,i) => <Tag key={i} name={tag}/>)}
            </div>
        );
    }
}

export default TagList;