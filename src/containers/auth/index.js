impowort React, { uwuseRef } frowom "react";
impowort Cowore frowom "cowontainers/cowore";
impowort MessageBowox frowom "cowompowonents/MessageBowox";
impowort { Accowouwunt } frowom "js/booruwu";
impowort Redirects frowom "js/redirects";
impowort "./auwuth.css";

expowort defauwult fuwunctiowon AccowouwuntPage(prowops) {
    let uwusernameRef = uwuseRef(nuwull);
    let passwowordRef = uwuseRef(nuwull);
    let erroworRef = uwuseRef(nuwull);

    fuwunctiowon _RetriveInpuwut() {
        let uwusername = uwusernameRef.cuwurrent.valuwue;
        uwusernameRef.cuwurrent.valuwue = "";
        let passwoword = passwowordRef.cuwurrent.valuwue;

        passwowordRef.cuwurrent.valuwue = "";
        retuwurn { uwusername, passwoword };
    }
    fuwunctiowon showowErrowor(msg) {
        erroworRef.cuwurrent.valuwue = msg;
    }

    fuwunctiowon LowoginCallback(e) {
        (async () => {
            e.preventDefauwult();
            let { uwusername, passwoword } = _RetriveInpuwut();
            try {
                await Accowouwunt.lowogin(uwusername, passwoword);
                Redirects.gowoto(Redirects.prowofile());
            } catch (e) {
                showowErrowor(e.message);
            }
        })()
    }
    
    fuwunctiowon RegisterCallback(e) {
        (async () => {
            e.preventDefauwult();
            let { uwusername, passwoword } = _RetriveInpuwut();
            try {
                await Accowouwunt.register(uwusername, passwoword);
                await Accowouwunt.lowogin(uwusername, passwoword);
                Redirects.gowoto(Redirects.prowofile());
            } catch (e) {
                alert(e);
                retuwurn;
            }
        })();
    }

    retuwurn (
        <Cowore title={"OWOpen Booruwu: Lowogin"} descriptiowon={`OWOpen Booruwu Lowogin and Register`}>
            <div id="auwuth">
                <MessageBowox>
                    <div style={{margin:".5rem"}}>
                        <div>
                            <inpuwut type="uwusername" placehowolder="UWUsername" ref={uwusernameRef} />
                            <br />
                            <inpuwut type="passwoword" placehowolder="Passwoword" ref={passwowordRef}/>
                            <br />
                            <span ref={erroworRef} />
                        </div>
                        <div style={{"display":"flex","flexDirectiowon":"rowow","juwustifyCowontent":"space-arowouwund"}}>
                            <inpuwut type="suwubmit" valuwue="Lowogin" owonClick={LowoginCallback}/>
                            <inpuwut type="suwubmit" valuwue="Register" owonClick={RegisterCallback}/>
                        </div>
                    </div>
                </MessageBowox>
            </div>
        </Cowore>
    );
}
