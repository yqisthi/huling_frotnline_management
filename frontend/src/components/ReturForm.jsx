import { useState } from "react";

const ReturForm = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        // Initialize form data here
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-3/4 h-[660px] overflow-auto">
                        <div className="flex justify-between">
                            <h2 className="text-4xl mb-10">Sisa Barang</h2>
                            <a className="text-2xl cursor-pointer" onClick={onClose}>X</a>
                        </div>
                        <table className="w-full h-auto mt-6 text-left border-b-2 border-[#E9EDF5] bg-[#F7F9FC]">
                            <thead className="border-b-2 border-[#E9EDF5]">
                                <tr>
                                    <th className="p-4">Nama Item</th>
                                    <th className="p-4">Bukti Foto Item</th>
                                    <th className="p-4">Jumlah Item</th>
                                    <th className="p-4">Status Item</th>
                                    <th className="p-4">Alasan</th>
                                    <th className="p-4">Total Price Item</th>
                                    <th className="p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4">Item 1</td>
                                    <td className="p-4">Foto 1</td>
                                    <td className="p-4">10</td>
                                    <td className="p-4">Status 1</td>
                                    <td className="p-4">Alasan 1</td>
                                    <td className="p-4">Rp. 100.000</td>
                                    <td className="p-4">
                                        <select id="inputField" name="inputField" className="w-auto">
                                            <option value="" disabled selected>Status</option>
                                            <option className="bg-[#E1FCEF] text-[#14804A]" value="Need Check">Disetujui</option>
                                            <option className="bg-[#FFEDEF] text-[#D1293D]" value="Need Confirm">Tidak Disetujui</option>
                                            {/* Add more options if needed */}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4">Item 2</td>
                                    <td className="p-4">Foto 2</td>
                                    <td className="p-4">20</td>
                                    <td className="p-4">Status 2</td>
                                    <td className="p-4">Alasan 2</td>
                                    <td className="p-4">Rp. 200.000</td>
                                    <td className="p-4">
                                        <select id="inputField" name="inputField" className="w-auto">
                                            <option value="" disabled selected>Status</option>
                                            <option className="bg-[#E1FCEF] text-[#14804A]" value="Need Check">Disetujui</option>
                                            <option className="bg-[#FFEDEF] text-[#D1293D]" value="Need Confirm">Tidak Disetujui</option>
                                            {/* Add more options if needed */}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end">
                            <div className="w-44 mt-10 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                                <button type="submit" className="bg-gradient-purple w-full py-2 text-white" >Konfirmasi</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReturForm;