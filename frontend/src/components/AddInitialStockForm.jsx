import React from "react";

const AddInitialStockForm = ({ isOpen, onClose }) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-2/4">
                        <div className="flex justify-between">
                            <h2 className="text-4xl mb-10">Add Initial Stock</h2>
                            <a className="text-2xl cursor-pointer" onClick={onClose}>X</a>
                        </div>
                        <form>
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Product</label>
                                    <input type="text" id="inputField" name="inputField" placeholder="Pilih Product" className="border rounded-md w-full px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                                    <input type="text" id="inputField" name="inputField" placeholder="100" className="border rounded-md w-full px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                    <input type="text" id="inputField" name="inputField" placeholder="Rp." className="border rounded-md w-full px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">Sub Total</label>
                                    <input type="text" id="inputField" name="inputField" placeholder="Rp." className="border rounded-md w-full px-3 py-2" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-44 mt-10 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                                    <button type="submit" className="bg-gradient-purple w-full py-2 text-white" onClick={onClose}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddInitialStockForm;