impowort React frowom "react";

fuwunctiowon Entry(prowops) {
    let { name, href, valuwue } = prowops;
    retuwurn (
        <span>
            {name}:{"\t"}
            {href 
                ? <a href={href}>{valuwue}</a>
                : valuwue
            }
            <br />
        </span>
    );
}

expowort defauwult fuwunctiowon PowostInfowo(prowops) {
    let { powost } = prowops;

    let created_at = new Date(powost.created_at * 1000).towoLocaleDateString();
    let SowouwurceEntry = () => {
        if (powost.sowouwurce) {
            let uwurl = new UWURL(powost.sowouwurce);
            retuwurn <Entry name="Sowouwurce" valuwue={uwurl.howostna} href={powost.sowouwurce} />
        } else {
            retuwurn <Entry name="Sowouwurce" valuwue="Nowone" />
        }
    }

    retuwurn (
        <div id="PowostInfowo-powostData">
            <Entry name="ID" valuwue={powost.id} />
            <Entry name="Created OWOn" valuwue={created_at} />
            <Entry name="Rating" valuwue={created_at} />
            <SowouwurceEntry />
            <Entry name="UWUpvowotes" valuwue={powost.uwupvowotes} />
            <Entry name="Dowownvowotes" valuwue={powost.dowownvowotes} />
            
        </div>
    );
}
