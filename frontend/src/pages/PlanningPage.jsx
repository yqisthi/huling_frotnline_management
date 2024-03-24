import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import { SideBarComponent } from "../components";
import upload from "../assets/logo/upload.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PlanningPage = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [planOpen, setPlanOpen] = useState(false);
    const [planRouter, setplanRouter] = useState(true);
    const [startDate, setStartDate] = useState(new Date());

    const [file, setFile] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
        file && console.log(file);
        console.log(file.name);
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };

    const openPlan = () => {
        setPlanOpen(false);
        setplanRouter(true);
    };

    const openRouter = () => {
        setPlanOpen(true);
        setplanRouter(false);
    };


    return (
        <div className="flex">
            <div>
                <SideBarComponent show={showSideBar} toggle={toggleSideBar} />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <div className="w-1/3 px-5 py-10 h-screen">
                        <div className="flex w-22 h-12 gap-2 bg-[#D3D3D3] rounded-md p-1">
                            <button className={`w-full h-full ${planOpen ? "" : "bg-white"} text-center rounded-md`} onClick={openPlan}>Upload</button>
                            <button className={`w-full h-full ${planRouter ? "" : "bg-white"} text-center rounded-md`} onClick={openRouter}>Router Planner</button>
                        </div>
                        {!planOpen && (
                            <div>
                                <p className="my-10">Upload File</p>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <div className="border-dashed rounded-md h-56 border-black border-2 p-5">
                                            <p>Drop the files here ...</p>
                                        </div>
                                    ) : (
                                        <div className="border-dashed rounded-md h-56 border-black border-2 p-5">
                                            <img src={upload} alt="upload" className="w-8 h-10 m-auto mt-2" />
                                            <p className="text-center text-xs p-5">Upload the file containing data. Supported formats: Excel (.xls, .xlsx), Open Office (.ods), text (.csv, .txt). Maximum file size: 10MB.</p>
                                            <div className="flex items-center justify-between p-2 rounded-md h-12 border-black border-2">
                                                <p className="overflow-hidden w-3/6">{file ? file.name : "Choose File"}</p>
                                                <div className="w-2/5 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                                                    <button type="submit" className="bg-gradient-purple w-full py-1 text-white font-semibold" >Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {!planRouter && (
                            <div>
                                <select id="inputField" name="inputField" className="border w-full rounded-md p-2 h-10 mt-10">
                                    <option value="" disabled selected>Pilih Pool Huling</option>
                                    <option value="Outlet 1">Outlet 1</option>
                                    <option value="Outlet 2">Outlet 2</option>
                                    {/* Add more options if needed */}
                                </select>
                                <DatePicker className="mt-2 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        )}

                    </div>
                    {planOpen && (
                        <div className="w-2/3 h-screen bg-white">
                            Router planner
                        </div>
                    )}
                    {planRouter && (
                        <div className="w-2/3 h-screen bg-white">
                            upload
                        </div>
                    )}

                </div>
            </div>
        </div >
    );
};

export default PlanningPage;
