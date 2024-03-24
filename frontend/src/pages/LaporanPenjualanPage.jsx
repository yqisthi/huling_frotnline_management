import React, { useState } from "react";
import { SideBarComponent, TopBarComponent } from "../components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LaporanPenjualanPage = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


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
                    <TopBarComponent title={"Laporan Penjualan"} subtitle={"Lihat Laporan Penjualan"} />
                    <div className="px-5 flex gap-3 justify-between items-center">
                        <DatePicker className="mt-10 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <select id="inputField" name="inputField" className="border rounded-md p-2 h-10 mt-10 w-56">
                            <option value="" disabled selected>Pool Meruya</option>
                            <option value="Pool Meruya">Pool Meruya</option>
                            <option value="Pool Kebon Jeruk">Pool Kebon Jeruk</option>
                            <option value="Pool Cengkareng">Pool Cengkareng</option>
                        </select>
                        <select id="inputField" name="inputField" className="border rounded-md p-2 h-10 mt-10 w-56">
                            <option value="" disabled selected>Semua Produk</option>
                            <option value="Produk 1">Produk 1</option>
                            <option value="Produk 2">Produk 2</option>
                            <option value="Produk 3">Produk 3</option>
                        </select>
                        <div className="w-44 mt-10 bg-[#866ffc] rounded-md hover:bg-white hover:border-[#866ffc] hover:border-2">
                            <button type="submit" className="bg-gradient-purple w-full py-2 text-white hover:text-[#866ffc]">Konfirmasi</button>
                        </div>
                        <div className="w-44 mt-10 border-[#866ffc] border-2 rounded-md bg-white">
                            <button type="submit" className="bg-gradient-purple w-full py-2 text-[#866ffc] hover:bg-[#866ffc] hover:text-white">Download</button>
                        </div>

                    </div>
                    <div className="px-6">
                        <table className="w-full h-auto mt-6 text-left border-b-2 border-[#E9EDF5] bg-white rounded-lg">
                            <thead className="border-b-2 border-[#E9EDF5] bg-[#F7F9FC]">
                                <tr>
                                    <th className="py-2 pl-10">DATE</th>
                                    <th className="py-2 pl-10">DRIVER NAME</th>
                                    <th className="py-2 pl-10">STOK</th>
                                    <th className="py-2 pl-10">BARANG TERJUAL</th>
                                    <th className="py-2 pl-10">SISA BARANG</th>
                                    <th className="py-2 pl-10">YANG HARUS DI SETOR</th>
                                    <th className="py-2 pl-10">TOTAL PENJUALAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2 pl-10">12-12-2021</td>
                                    <td className="py-2 pl-10">Driver 1</td>
                                    <td className="py-2 pl-10">100</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                </tr>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2 pl-10">12-12-2021</td>
                                    <td className="py-2 pl-10">Driver 2</td>
                                    <td className="py-2 pl-10">100</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                </tr>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2 pl-10">12-12-2021</td>
                                    <td className="py-2 pl-10">Driver 3</td>
                                    <td className="py-2 pl-10">100</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">50</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                    <td className="py-2 pl-10">Rp. 500.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LaporanPenjualanPage;