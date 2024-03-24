import React from "react";
import image from "../assets/images/imageLogin.png"
import logo from "../assets/logo/logohitam.png"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <>
            <div className="flex">
                <div className="bg-gradient-purple w-3/5 h-screen text-white">
                    <div className="mt-20 ml-20">
                        <p className="text-4xl mb-5">Welcome To</p>
                        <p className="text-4xl font-semibold">BackOffice Mini PoS</p>
                    </div>
                    <img src={image} alt="Image Login" width={650} className="m-auto" />
                    <div className="flex flex-col items-center w-full text-center">
                        <p className="text-xl">Organize your work and control
                        </p>
                        <p className="text-xl">
                            your data progress through this portal</p>
                    </div>
                </div>
                <div className="bg-white w-2/5 h-screen p-16">
                    <img src={logo} alt="Logo Haus" height={100} />
                    <p className="pt-16 text-3xl font-bold">Login to BackOffice Mini PoS</p>
                    <p className="pt-10">Welcome back! login with your data that you entered
                        during registration</p>
                    <form action="">
                        <div className="mt-5">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input type="text" name="email" id="email" className="w-full mt-2 p-2 gap-10 border border-gray-300 rounded-lg bg-[#F8F8F8]" />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" className="w-full mt-2 p-2 gap-10 border border-gray-300 rounded-lg bg-[#F8F8F8]" />
                        </div>
                        <div className="flex justify-between">
                            <div className="mt-5">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember" className="text-sm">&nbsp; Remember me</label>
                            </div>
                            <div className="mt-5">
                                <a href="#" className="text-sm text-[#F59028]">Forgot Your Password?</a>
                            </div>
                        </div>
                        <div className="mt-10 bg-[#866ffc] rounded-md hover:bg-[#9c89ff]">
                            <button type="submit" className="bg-gradient-purple w-full py-2 text-white" onClick={handleLogin}>Login</button>
                        </div>
                        <div className="mt-10 text-center">
                            <p>Don't have an account? <a href="#" className="text-purple-500 underline">Register here</a></p>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )

}

export default LoginPage;