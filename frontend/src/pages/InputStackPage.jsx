import React, { useState } from "react";
import { SideBarComponent, TopBarComponent, AddInputStockForm } from "../components";
import datelogo from "../assets/logo/date.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputStackPage = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
        console.log(showSideBar);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex">
                <div>
                    <SideBarComponent show={showSideBar} toggle={toggleSideBar} />
                </div>
                <div className="w-full">
                    <TopBarComponent title={"Initial Stock"} subtitle={"Input Initial Stock"} />
                    <div className="px-5 flex gap-3 justify-between items-center">
                        <select id="inputField" name="inputField" className="border rounded-md p-2 h-10 mt-10 w-56">
                            <option value="" disabled selected>Pilih Outlet</option>
                            <option value="Outlet 1">Outlet 1</option>
                            <option value="Outlet 2">Outlet 2</option>
                            {/* Add more options if needed */}
                        </select>
                        <div className="flex items-center gap-4">
                            <DatePicker className="mt-10 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} icon={datelogo} >
                                <img src={datelogo} alt="" />
                            </DatePicker>
                            <div className="w-44 mt-10 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                                <button type="submit" className="bg-gradient-purple w-full py-2 text-white" onClick={openModal}>Add Initial Stok</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-6">
                        <table className="w-full h-auto mt-6 text-left border-b-2 border-[#E9EDF5] bg-white rounded-lg">
                            <thead className="border-b-2 border-[#E9EDF5] bg-[#F7F9FC]">
                                <tr>
                                    <th className="py-2 pl-10">USER_ID</th>
                                    <th className="py-2 pl-10">DRIVER NAME</th>
                                    <th className="py-2 pl-10">TRANSACTION DATE</th>
                                    <th className="py-2 pl-10">STATUS</th>
                                    <th className="py-2 pl-10">TOTAL ITEM PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-[#F7F9FC]">
                                    <td className="py-3 pl-10">1</td>
                                    <td className="py-3 pl-10">John Doe</td>
                                    <td className="py-3 pl-10">12/12/2021</td>
                                    <td className="py-3 pl-10">Success</td>
                                    <td className="py-3 pl-10">Rp. 100.000</td>
                                </tr>
                                <tr className="hover:bg-[#F7F9FC]">
                                    <td className="py-3 pl-10">2</td>
                                    <td className="py-3 pl-10">Jane Doe</td>
                                    <td className="py-3 pl-10">12/12/2021</td>
                                    <td className="py-3 pl-10">Success</td>
                                    <td className="py-3 pl-10">Rp. 200.000</td>
                                </tr>
                                <tr className="hover:bg-[#F7F9FC]">
                                    <td className="py-3 pl-10">3</td>
                                    <td className="py-3 pl-10">John Doe</td>
                                    <td className="py-3 pl-10">12/12/2021</td>
                                    <td className="py-3 pl-10">Success</td>
                                    <td className="py-3 pl-10">Rp. 100.000</td>
                                </tr>
                                <tr className="hover:bg-[#F7F9FC]">
                                    <td className="py-3 pl-10">3</td>
                                    <td className="py-3 pl-10">John Doe</td>
                                    <td className="py-3 pl-10">12/12/2021</td>
                                    <td className="py-3 pl-10">Success</td>
                                    <td className="py-3 pl-10">Rp. 100.000</td>
                                </tr>
                                <tr className="hover:bg-[#F7F9FC]">
                                    <td className="py-3 pl-10">4</td>
                                    <td className="py-3 pl-10">Jane Doe</td>
                                    <td className="py-3 pl-10">12/12/2021</td>
                                    <td className="py-3 pl-10">Success</td>
                                    <td className="py-3 pl-10">Rp. 200.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <AddInputStockForm isOpen={isModalOpen} onClose={closeModal} />
            </div >
        </>
    );
}

export default InputStackPage;