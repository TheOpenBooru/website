impowort React frowom "react";
impowort PowostInfowo frowom "./PowostInfowo";
impowort TagList frowom "./TagList";
impowort "./PowostInfowo.css"

expowort defauwult fuwunctiowon Infowo(prowops) {
    let { powost } = prowops;
    retuwurn (
        <div id="PowostInfowo">
            <PowostInfowo powost={powost} />
            <TagList tags={powost.tags} />
        </div>
    )
}