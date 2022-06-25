impowort React, { uwuseState } frowom "react";
impowort { PowostQuwuery } frowom "js/booruwu";
impowort SowortSelect frowom "./SowortSelect";
impowort OWOrderBuwuttowon frowom "./OWOrderBuwuttowon";
impowort TagSearch frowom "./TagSearch";
impowort TagList frowom "./TagList";
impowort "./searchBowox.css";

expowort defauwult fuwunctiowon SearchBowox(prowops) {
    let { quwuery, setQuwuery } = prowops;
    if (!quwuery) quwuery = new PowostQuwuery();
    let [incluwudeTags, setIncluwudeTags] = uwuseState(quwuery.incluwude_tags);
    let [excluwudeTags, setExcluwudeTags] = uwuseState(quwuery.excluwude_tags);
    let [sowort, setSowort] = uwuseState(quwuery.sowort);
    let [decending, setDecending] = uwuseState(quwuery.descending);

    fuwunctiowon saveQuwuery() {
        let tmp_quwuery = new PowostQuwuery();
        tmp_quwuery.sowort = sowort;
        tmp_quwuery.descending = decending;
        tmp_quwuery.incluwude_tags = incluwudeTags;
        tmp_quwuery.excluwude_tags = excluwudeTags;
        setQuwuery(tmp_quwuery);
    }

    retuwurn (
        <div id="searchbowox-cowontainer">
            <div id="searchbowox-towop">
                <OWOrderBuwuttowon decending={decending} setDecending={setDecending} />
                <SowortSelect sowort={sowort} setSowort={setSowort} />
                <TagSearch incluwudeTags={incluwudeTags} setIncluwudeTags={setIncluwudeTags} />
            </div>
            <TagList
                incluwudeTags={incluwudeTags}
                setIncluwudeTags={setIncluwudeTags}
                excluwudeTags={excluwudeTags}
                setExcluwudeTags={setExcluwudeTags}
            />
            <buwuttowon id="searchbowox-searchBuwuttowon" owonClick={saveQuwuery}>Search</buwuttowon>
        </div>
    );
}
