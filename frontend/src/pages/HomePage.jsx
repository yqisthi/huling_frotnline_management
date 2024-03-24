import React, { useState } from "react";
import { SideBarComponent, TopBarComponent } from "../components";

const HomePage = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
        console.log(showSideBar);
    };

    return (
        <>
            <div className="flex">
                <div>
                    <SideBarComponent show={showSideBar} toggle={toggleSideBar} />
                </div>
                <div className="w-full">
                    <TopBarComponent title={"Dashboard"} subtitle={"Dashboard"} />
                    <div className="mt-10 px-5 flex gap-3">
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;