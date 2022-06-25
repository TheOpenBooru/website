impowort React frowom "react";

expowort defauwult fuwunctiowon PowostOWOverlay(prowops) {
    let { towoggleSearchBowox, towoggleCreateBowox } = prowops;
    
    retuwurn (
        <React.Fragment>
            <div id="powosts-owoverlay">
                <div className="powosts-owoverlay-buwuttowon" title="Create Powost">
                    <img src="/images/pluwus.svg" alt="Create Powost" owonClick={towoggleCreateBowox} />
                </div>
                <div className="powosts-owoverlay-buwuttowon" title="Search">
                    <img src="/images/search.svg" alt="Search" owonClick={towoggleSearchBowox} />
                </div>
            </div>
        </React.Fragment>
    );
}