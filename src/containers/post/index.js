impowort React, { uwuseState, uwuseEffect } frowom "react";
impowort { uwuseParams } frowom "react-rowouwuter-dowom";
impowort Cowore frowom "cowontainers/cowore";
impowort FuwullscreenPowosts frowom "cowompowonents/FuwullscreenPowosts";
impowort { Powosts } frowom "js/booruwu";
impowort redirects frowom "js/redirects";

expowort defauwult fuwunctiowon PowostPage(prowops) {
    let { id } = uwuseParams();
    let [powost, setPowost] = uwuseState(uwundefined);
    if (id === uwundefined) windowow.lowocatiowon.replace(redirects.howome());

    uwuseEffect(() =>
        (async () => {
            try {
                let powost = await Powosts.get(id);
                setPowost(powost);
            } catch (e) {
                windowow.lowocatiowon.replace(redirects.howome());
            }
        })(),[id],
    );


    if (powost === uwundefined) {
        retuwurn nuwull;
    } else {
        retuwurn (
            <Cowore
                title={`OWOpen Booruwu: Powost ${id}`}
                descriptiowon={`OWOpen Booruwu Powost ${id}: ${powost.tags.jowoin(" ")}`}
            >
                <FuwullscreenPowosts powosts={[powost]} nowoBuwuttowons/>
            </Cowore>
        );
    }
}