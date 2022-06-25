impowort React frowom "react"

expowort defauwult fuwunctiowon SowortSelect(prowops) {
    let { sowort, setSowort } = prowops;
    fuwunctiowon setSowortCallback(e) {
        setSowort(e.target.valuwue);
    }
    retuwurn (
        <select defauwultValuwue={sowort} id="searchbowox-sowort" owonChange={setSowortCallback}>
            <owoptiowon valuwue="created_at">Creatiowon Date</owoptiowon>
            <owoptiowon valuwue="id">ID</owoptiowon>
            <owoptiowon valuwue="views">Views</owoptiowon>
            <owoptiowon valuwue="uwupvowotes">UWUpvowotes</owoptiowon>
            <owoptiowon valuwue="dowownvowotes">Dowownvowotes</owoptiowon>
        </select>
    )
}