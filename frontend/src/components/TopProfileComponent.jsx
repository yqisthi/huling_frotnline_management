import React, { useState } from "react";
import cat from "../assets/images/cat.jpg";
import arrow from "../assets/logo/arrow.png";

const TopProfileComponent = () => {

    const [open, setOpen] = useState(false);

    const openOptions = () => {
        setOpen(!open);
    };

    return (
        <div className="">
            <div className="flex w-72 h-16 rounded-md shadow-lg overflow-clip">
                <img src={cat} alt="profile page" className="w-2/6 rounded-l-lg" />
                <div className="w-3/6 text-left ml-5 mt-2">
                    <h1 className="text-lg">Jonathan Joestar</h1>
                    <p className="text-xs">Store Manager</p>
                </div>
                <img src={arrow} alt="arrow" className={`h-3 m-auto cursor-pointer duration-300 ${open ? "rotate-180" : ""}`} onClick={openOptions} />
            </div>
            {open && (
                <div className={`${open ? "w-48  absolute rounded-md shadow-lg bg-white right-10 cursor-pointer" : ""}`}>
                    <ul>
                        <li className="py-2 px-5 hover:bg-gray-100">Profile</li>
                        <li className="py-2 px-5 hover:bg-gray-100">Setting</li>
                        <li className="py-2 px-5 hover:bg-gray-100">Logout</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TopProfileComponent;