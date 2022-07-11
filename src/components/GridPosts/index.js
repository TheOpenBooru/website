import React, { useRef } from "react";
import { onLoadCallback } from "components/Media/image";
import LoadingIcon from "components/Loading";
import Settings from "js/settings";
import Redirects from "js/redirects";
import "./grid.css";


export default function GridPosts(props) {
    let { posts, morePostsCallback, loading } = props;
    let scrollRef = useRef();

    let checkScroll = () => {
        if (scrollRef.current === undefined) return;
        const { scrollTop, offsetHeight, scrollHeight } = scrollRef.current;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 100) {
            morePostsCallback();
        }
    };
    setTimeout(checkScroll,50)
    let style = {
        "--IMAGE-SIZE": Settings.GridItemSize + "rem",
    };
    return (
        <div id="gridPosts" ref={scrollRef} style={style}>
            {posts.map((post) => <GridItem key={post.id} post={post} />)}
            {loading ? <LoadingIcon/> : null}
        </div>
    );
}

function GridItem(props) {
    let { post } = props;
    let className = `gridPosts-item media-${post.media_type}`;
    let redirect = Redirects.post(post.id);
    let { preview, thumbnail } = post;
    let callback = preview && preview.type === "image" ? onLoadCallback(preview, thumbnail) : null;
    return (
        <a key={post.id} className={className} href={redirect}>
            <img
                className="gridPosts-image"
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt=""
                onLoad={callback}
            />
        </a>
    );
    
}
