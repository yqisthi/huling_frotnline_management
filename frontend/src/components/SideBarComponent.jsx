import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import logomenu from "../assets/logo/menu.png";
import dashboardlogo from "../assets/logo/dashboard.png";
import documentlogo from "../assets/logo/stock.png";
import locationlogo from "../assets/logo/location.png";
import inventorylogo from "../assets/logo/inventory.png";
import reconsilelogo from "../assets/logo/reconsile.png";
import komisilogo from "../assets/logo/komisi.png";

const SideBarComponent = ({ show }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeSideBar = () => {
        setShowSideBar(true);
        console.log(showSideBar);
    };


    return (
        <div className={`h-screen text-white bg-[#484848] ${showSideBar ? 'w-0 -translate-x-40' : 'w-72'} shadow-lg duration-300`}>
            <ul>
                <li className="px-3 h-44 text-md border-b-2 border-[#C4C4C4] items-center justify-between flex font-semibold">
                    <img src={logo} className="h-14 mb-6" />
                    <img src={logomenu} className="h-6 cursor-pointer" onClick={closeSideBar} />
                </li>
                <ul className="py-6 px-5">
                    <li className="p-3">
                        MAIN
                    </li>
                    <NavLink to="/home">
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={dashboardlogo} className="h-6 inline mr-4 w-6" />
                            Dashboard
                        </li>
                    </NavLink>
                    <li className="p-3">
                        TRANSACTIONS
                    </li>
                    <NavLink to={"/stackinput"}>
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={documentlogo} className="h-6 inline mr-4 w-6" />
                            Input Initial Stack
                        </li>
                    </NavLink>
                    <li className="p-3">
                        PLANNING
                    </li>
                    <NavLink to={"/planning"}>
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={locationlogo} className="h-6 inline mr-4 w-6" />
                            Route Planner
                        </li>
                    </NavLink>
                    <li className="p-3">
                        LAPORAN
                    </li>
                    <NavLink to={"/inventory"}>
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={inventorylogo} className="h-6 inline mr-4 w-6" />
                            Laporan Stok Inventory
                        </li>
                    </NavLink>
                    <NavLink to={"/penjualan"}>
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={komisilogo} className="h-6 inline mr-4 w-6" />
                            Laporan Penjualan
                        </li>
                    </NavLink>
                    <NavLink to={"/retur"}>
                        <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                            <img src={reconsilelogo} className="h-6 inline mr-4 w-6" />
                            Laporan Retur
                        </li>
                    </NavLink>
                    <li className="flex items-center p-3 text-sm rounded-lg hover:bg-[#5533FF]">
                        <img src={komisilogo} className="h-6 inline mr-4 w-6" />
                        Komisi
                    </li>

                </ul>
            </ul>
        </div>
    );
}

export default SideBarComponent;