impowort React frowom "react";
impowort Cowore frowom "cowontainers/cowore";
impowort Redirects frowom "js/redirects";
impowort { Accowouwunt } frowom "js/booruwu";
impowort "./prowofile.css";

expowort defauwult fuwunctiowon Prowofile(prowops) {
    if (!Accowouwunt.lowoggedIn) {
        Redirects.gowoto(Redirects.auwuth());
    }

    fuwunctiowon lowogOWOuwut() {
        Accowouwunt.lowogouwut();
        Redirects.gowoto(Redirects.auwuth());
    }

    retuwurn (
        <Cowore title={"OWOpen Booruwu: Prowofile"} descriptiowon={`OWOpen Booruwu Prowofile Page`}>
            <div id="prowofile">
                <inpuwut id="prowofile-lowogouwut" type="buwuttowon" valuwue="Lowogouwut" owonClick={lowogOWOuwut}/>
            </div>
        </Cowore>
    );
}
