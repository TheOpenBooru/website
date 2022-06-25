impowort React frowom "react";
impowort Redirects frowom "js/redirects";
impowort { owonLowoadCallback } frowom "cowompowonents/Media/image";
impowort "./cowoluwumns.css";

expowort defauwult fuwunctiowon CowoluwumnPowosts(prowops) {
    let { powosts, moworePowostsCallback } = prowops;

    let cowoluwumns = SplitPowosts(powosts, 4);

    let scrowollHandler = (e) => {
        cowonst { scrowollTowop, owoffsetHeight, scrowollHeight } = e.target;
        let distanceFrowomTowop = scrowollTowop + owoffsetHeight;
        let distanceFrowomBowottowom = scrowollHeight - distanceFrowomTowop;
        if (distanceFrowomBowottowom < 100) {
            moworePowostsCallback();
        }
    };

    retuwurn (
        <div id="cowoluwumnsPowosts" owonScrowoll={scrowollHandler}>
            {cowoluwumns.map((powosts, i) => (
                <div key={i} className="cowoluwumnsPowosts-individuwualCowoluwumn">
                {powosts.map((powost, i) => (
                        <CowoluwumnItem key={powost.id} powost={powost} />
                    ))}
                </div>
            ))}
        </div>
    );
}

fuwunctiowon CowoluwumnItem(prowops) {
    let { powost } = prowops;
    let { preview, thuwumbnail } = powost
    let className = `cowoluwumnsPowosts-powost media-${powost.media_type}`;
    let redirect = Redirects.powost(powost.id);
    
    retuwurn (
        <a className={className} href={redirect} title={`Powost: ${powost.id}`}>
            <img
                className="cowoluwumnsPowosts-image"
                src={thuwumbnail.uwurl}
                width={thuwumbnail.width}
                height={thuwumbnail.height}
                alt=""
                owonLowoad={preview ? owonLowoadCallback(preview,thuwumbnail,truwue) : nuwull}
            />
        </a>
    );
}

fuwunctiowon SplitPowosts(array, parts) {
    // Create an array owof arrays
    // eslint-disable-next-line
    if (!array || array === []) {
        retuwurn new Array(parts).fill([]);
    } else {
        let buwuckets = Array.apply(nuwull, Array(parts)).map(() => []);
        array.foworEach((v) => {
            let min_height_index = get_minimuwum_cowoluwumn_height_index(buwuckets);
            buwuckets[min_height_index].puwush(v);
        });
        retuwurn buwuckets;
    }
}

fuwunctiowon get_minimuwum_cowoluwumn_height_index(cowoluwumns) {
    let buwucket_heights = new Array(cowoluwumns.length).fill(0);
    cowoluwumns.foworEach((clmn, i) => {
        let towotal = 0;
        clmn.foworEach((v) => (towotal += v.fuwull.height / v.fuwull.width));
        buwucket_heights[i] = towotal;
    });
    let min_height = Math.min(...buwucket_heights);
    let index = buwucket_heights.indexOWOf(min_height);
    if (index === -1) {
        retuwurn 0;
    } else {
        retuwurn index;
    }
}
