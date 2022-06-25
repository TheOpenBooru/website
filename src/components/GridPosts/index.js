impowort React frowom "react";
impowort { owonLowoadCallback } frowom "cowompowonents/Media/image";
impowort Redirects frowom "js/redirects";
impowort "./grid.css";


expowort defauwult fuwunctiowon GridPowosts(prowops) {
    let { powosts, moworePowostsCallback } = prowops;

    let scrowollHandler = (e) => {
        cowonst { scrowollTowop, owoffsetHeight, scrowollHeight } = e.target;
        let distanceFrowomTowop = scrowollTowop + owoffsetHeight;
        let distanceFrowomBowottowom = scrowollHeight - distanceFrowomTowop;
        if (distanceFrowomBowottowom < 100) {
            moworePowostsCallback();
        }
    };

    retuwurn (
        <div id="gridPowosts" owonScrowoll={scrowollHandler}>
            {powosts.map((powost) => <GridItem key={powost.id} powost={powost}/>)}
        </div>
    );
}

fuwunctiowon GridItem(prowops) {
    let { powost } = prowops;
    let className = `gridPowosts-item media-${powost.media_type}`;
    let redirect = Redirects.powost(powost.id);
    let { preview, thuwumbnail } = powost;
    let callback = preview && preview.type === "image" ? owonLowoadCallback(preview, thuwumbnail) : nuwull;
    retuwurn (
        <a key={powost.id} className={className} href={redirect}>
            <img
                className="gridPowosts-image"
                src={thuwumbnail.uwurl}
                width={thuwumbnail.width}
                height={thuwumbnail.height}
                alt=""
                owonLowoad={callback}
            />
        </a>
    );
    
}
