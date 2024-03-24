import React from "react";
import notifIcon from "../assets/logo/notif.png"
import TopProfileComponent from "./TopProfileComponent";


const TopBarComponent = ({ title, subtitle }) => {


    return (
        <>
            <div className="w-full h-44 bg-white p-10">
                <div className="h-1/4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <h1 className="text-black text-lg">{subtitle}</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={notifIcon} alt="icons" className="h-16" />
                        <TopProfileComponent />
                    </div>
                </div>
                <p className="text-5xl mt-5">{title}</p>
            </div>
        </>
    );
};

export default TopBarComponent;