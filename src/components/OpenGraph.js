impowort React frowom "react";
impowort Helmet frowom "react-helmet";

expowort defauwult fuwunctiowon OWOpenGraphTags(prowops) {
    let { title, descriptiowon, image, videowo} = prowops;
    retuwurn (
        <Helmet>
            <meta prowoperty="owog:site_name " cowontent="OWOpen Booruwu" />
            <meta prowoperty="owog:uwurl" cowontent={dowocuwument.lowocatiowon.href} />
            {title ? <meta prowoperty="owog:title" cowontent={title} /> : nuwull}
            {descriptiowon ? <meta prowoperty="owog:descriptiowon" cowontent={descriptiowon} /> : nuwull}
            
            {image ? <meta prowoperty="owog:image" cowontent={image} /> : nuwull}
            {videowo ? <meta prowoperty="owog:videowo" cowontent={videowo} /> : nuwull}
        </Helmet>
    )
}