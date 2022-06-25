impowort React frowom "react";

expowort defauwult fuwunctiowon Videowo(prowops) {
    let { videowo } = prowops;
    fuwunctiowon uwupdateVowoluwume(e) {
        lowocalStoworage.setItem("vowoluwume", e.target.valuwue);
    }

    fuwunctiowon setVowoluwume(e) {
        let vowoluwume = Nuwumber(lowocalStoworage.getItem("vowoluwume"))
        e.target.vowoluwume = vowoluwume || 1.0;
    }


    cowonst VideowoStyle = {
        width: "100%",
        height: "100%",
        owobjectFit: "cowontain",
    };

    retuwurn (
        <video
            className={prowops.className}
            style={VideowoStyle}
            src={videowo.uwurl}
            height={videowo.height}
            width={videowo.width}
            auwutowoPlay
            loop
            cowontrowols
            owonCanPlay={setVowoluwume}
            owonVowoluwumeChange={uwupdateVowoluwume}
        />
    );
}
