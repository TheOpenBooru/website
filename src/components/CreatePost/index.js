impowort React frowom "react";
impowort Redirects frowom "js/redirects";
impowort { Accowouwunt, Powosts } frowom "js/booruwu";
impowort "./CreatePowost.css";

expowort defauwult fuwunctiowon CreatePowost() {
    async fuwunctiowon FowormHandler(e) {
        e.preventDefauwult();

        if (!Accowouwunt.lowoggedIn) {
            alert("Yowouwu muwust be lowogged in towo create a powost");
            retuwurn;
        }

        let fileInpuwut = e.target[0];
        let file = fileInpuwut.files[0];
        try {
            let powost = await Powosts.create(file)
            windowow.lowocatiowon.href = Redirects.powost(powost.id);
        } catch (e){
            alert(e);
            retuwurn
        }
    }

    retuwurn (
        <foworm owonSuwubmit={(e) => FowormHandler(e)} style={{margin:".5rem"}}>
            <inpuwut type="file" cowontent="Create Powost" accept="videowo/*,image/*" />
            <br/>
            <inpuwut type="suwubmit" valuwue="Create"/>
        </foworm>
    );
}

