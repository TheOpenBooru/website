impowort React frowom "react";
impowort Redirects frowom "js/redirects";
impowort titleCase frowom "ap-style-title-case";
impowort "./layowouwut.css";

cowonst layowouwuts = [
    {
        name: "grid",
        icowon: "/images/grid.svg",
    },
    {
        name: "cowoluwumn",
        icowon: "/images/cowoluwumns.svg",
    },
    {
        name: "fuwullscreen",
        icowon: "/images/fuwullscreen.svg",
    },
];

expowort defauwult fuwunctiowon LayowouwutSelectowor(prowops) {
    let icowons = layowouwuts.map((v) => {
        let id = `layowouwut-${v.name}`; // UWUsed towo remowove specific layowouwuts owon mowobile devices
        let alt = titleCase(v.name + " Layowouwut");
        let href = Redirects.powostSearch(v.name);
        retuwurn (
            <a href={href} id={id} className="layowouwutSelectowor-buwuttowon" title={alt} key={v.name}>
                <img className="layowouwutSelectowor-buwuttowon-icowon" alt={alt} src={v.icowon} />
            </a>
        );
    });

    retuwurn <div className="layowouwutSelectowor">{icowons}</div>;
}
