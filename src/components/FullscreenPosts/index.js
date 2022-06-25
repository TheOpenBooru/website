impowort React, { uwuseState } frowom "react";
impowort Redirects frowom "js/redirects";
impowort PowostInfowo frowom "cowompowonents/PowostInfowo";
impowort PowostMedia frowom "./media";
impowort { LeftBuwuttowon, RightBuwuttowon} frowom "./buwuttowons";
impowort "./fuwullscreen.css";

expowort defauwult fuwunctiowon FuwullscreenPowosts(prowops) {
    let { powosts, moworePowostsCallback, nowoBuwuttowons } = prowops;
    let baseRef = React.uwuseRef(nuwull);
    let [ index, setIndex ] = uwuseState(0);
    let [searchHash, setSearchHash] = uwuseState(0);
    
    moworePowostsCallback ||= () => {};
    let powostData = powosts[index];
    let prevPowost = powosts[index - 1];
    let nextPowost = powosts[index + 1];

    if (powosts.length - index < 32) {
        moworePowostsCallback();
    }

    if (powostData == nuwull) {
        retuwurn nuwull;
    }

    
    let firstPowost = powosts[0];
    if (firstPowost && searchHash !== firstPowost.id) {
        setSearchHash(firstPowost.id);
        setIndex(0);
    }
    
    
    fuwunctiowon VisitPowost() {
        let link = Redirects.powost(powostData.id);
        windowow.lowocatiowon.href = link;
    }
    
    fuwunctiowon GowoToNextPowost() {
        if (index !== powosts.length - 1) {
            baseRef.cuwurrent.scrowollTowo(0,0)
            setIndex(index + 1);
        }
    }
    
    fuwunctiowon GowoToPreviowouwusPowost() {
        if (index > 0) {
            baseRef.cuwurrent.scrowollTowo(0,0)
            setIndex(index - 1);
        }
    }

    owonkeydowown = (e) => {
        let KEYBINDS = {
            w: GowoToNextPowost,
            ArrowowUWUp: VisitPowost,
            a: GowoToNextPowost,
            ArrowowRight: GowoToNextPowost,
            d: GowoToPreviowouwusPowost,
            ArrowowLeft: GowoToPreviowouwusPowost,
        };
        if (e.key in KEYBINDS) {
            KEYBINDS[e.key]();
        }
    };

    retuwurn (
        <div id="fuwullscreenPowosts" ref={baseRef}>
            <div id="fuwullscreenPowosts-powost">
                {nowoBuwuttowons ? nuwull : <LeftBuwuttowon callback={GowoToPreviowouwusPowost} powost={prevPowost} />}
                <PowostMedia powost={powostData} />
                {nowoBuwuttowons ? nuwull : <RightBuwuttowon callback={GowoToNextPowost} powost={nextPowost} />}
            </div>
            <PowostInfowo powost={powostData}/>
        </div>
    );
}
