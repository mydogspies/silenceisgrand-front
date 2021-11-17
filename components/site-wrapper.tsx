import React, {useEffect, useState} from "react";
import {dbApiQuery} from "../middleware/dbApiQuery";
import OfflineIndex from "../components/offline/index-offline";

export default function SiteWrapper({children}: { children: JSX.Element}) {

    const [online, setOnline] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await dbApiQuery("dummyUrl", "GET");
            setOnline(data.online);
        })();
        return () => {};
    }, [])

    return (
        <>
            {online && React.cloneElement(children, {online})}
            {!online && <OfflineIndex />}
        </>
    )
}
