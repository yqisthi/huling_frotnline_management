import { useState } from "react";
import AddInitialStockForm from "./AddInitialStockForm";

const AddInputStockForm = ({ isOpen, onClose }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-3/4 h-[700px] overflow-auto">
                        <div className="flex justify-between">
                            <h2 className="text-4xl mb-10">Add Initial Stock</h2>
                            <a className="text-2xl cursor-pointer" onClick={onClose}>X</a>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                    <input type="text" id="inputField" name="inputField" onChange={handleChange} placeholder="Search" className="border rounded-md w-full px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Driver name</label>
                                    <input type="text" id="inputField" name="inputField" onChange={handleChange} placeholder="Driver Name" className="border rounded-md w-full px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                                    <input type="text" id="inputField" name="inputField" onChange={handleChange} placeholder="Status" className="border rounded-md w-full px-3 py-2" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-44 mt-10 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                                    <button type="submit" className="bg-gradient-purple w-full py-2 text-white" onClick={openModal}>Add Items</button>
                                </div>
                            </div>
                        </form>
                        <table className="w-full h-auto mt-6 text-left border-b-2 border-[#E9EDF5]">
                            <thead className="border-b-2 border-[#E9EDF5]">
                                <tr>
                                    <th className="py-2">Product Name</th>
                                    <th className="py-2">Quantity</th>
                                    <th className="py-2">Price</th>
                                    <th className="py-2">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2">The Sliding Mr. Bones</td>
                                    <td className="py-2">Malcolm Lockyer</td>
                                    <td className="py-2">1961</td>
                                    <td className="py-2">1961</td>
                                </tr>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2">Witchy Woman</td>
                                    <td className="py-2">The Eagles</td>
                                    <td className="py-2">1972</td>
                                    <td className="py-2">1972</td>
                                </tr>
                                <tr className="border-b-2 border-[#E9EDF5]">
                                    <td className="py-2">Shining Star</td>
                                    <td className="py-2">Earth, Wind, and Fire</td>
                                    <td className="py-2">1975</td>
                                    <td className="py-2">1975</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <AddInitialStockForm isOpen={isModalOpen} onClose={closeModal} />
                </div>
            )}
        </>
    );
};

export default AddInputStockForm;