import React, { useState } from "react";
import { ReturForm, SideBarComponent, TopBarComponent } from "../components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LaporanReturPage = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);



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
                    <TopBarComponent title={"Laporan Retur"} subtitle={"Lihat Laporan Reconcile"} />
                    <div className="px-5 flex gap-3 justify-between items-center">
                        <div className="flex items-center gap-4">
                            <select id="inputField" name="inputField" className="border rounded-md p-2 h-10 mt-10 w-56">
                                <option value="" disabled selected>Pilih Outlet</option>
                                <option value="Outlet 1">Outlet 1</option>
                                <option value="Outlet 2">Outlet 2</option>
                                {/* Add more options if needed */}
                            </select>
                            <select id="inputField" name="inputField" className="border rounded-md p-2 h-10 mt-10 w-56">
                                <option value="" disabled selected>Driver Name</option>
                            </select>
                        </div>
                        <DatePicker className="mt-10 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)}  >
                        </DatePicker>
                    </div>
                    <div className="px-6">
                        <table className="w-full h-auto mt-6 text-left border-b-2 border-[#E9EDF5] bg-white rounded-lg">
                            <thead className="border-b-2 border-[#E9EDF5] bg-[#F7F9FC]">
                                <tr>
                                    <th className="py-2 pl-10">DRIVER NAME</th>
                                    <th className="py-2 pl-10">JAM TUTUP KASIR</th>
                                    <th className="py-2 pl-10">POOL OUTLET</th>
                                    <th className="py-2 pl-10">STOK AWAL</th>
                                    <th className="py-2 pl-10">YANG HARUS DI SETOR</th>
                                    <th className="py-2 pl-10">SISA BARANG</th>
                                    <th className="py-2 pl-10">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 pl-10">Driver 1</td>
                                    <td className="py-2 pl-10">12:00</td>
                                    <td className="py-2 pl-10">Outlet 1</td>
                                    <td className="py-2 pl-10">100</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">
                                        <button className="bg-[#FFF0E0] border-2 border-[#C47320] rounded-lg text-sm text-[#935618] px-2" onClick={openModal}>
                                            Need Check {'>'}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 pl-10">Driver 2</td>
                                    <td className="py-2 pl-10">12:00</td>
                                    <td className="py-2 pl-10">Outlet 2</td>
                                    <td className="py-2 pl-10">100</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">
                                        <button className="bg-[#FFF0E0] border-2 border-[#C47320] rounded-lg text-sm text-[#935618] px-2">
                                            Need Check {'>'}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ReturForm isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div >
        </>
    )
}

export default LaporanReturPage;