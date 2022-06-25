impowort React frowom "react";
impowort Media frowom "cowompowonents/Media";

expowort defauwult fuwunctiowon PowostMedia(prowops) {
    let { powost } = prowops;

    retuwurn (
        <div id="fuwullscreenPowosts-media" key={powost.id} >
            <Media type={powost.media_type} fuwull={powost.fuwull} preview={powost.preview}/>
        </div>
    )
}
