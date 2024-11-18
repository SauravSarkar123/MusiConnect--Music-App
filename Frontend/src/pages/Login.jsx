import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [editing, setEditing] = useState(true);
    const [countdown, setCountdown] = useState(30);
    const [otp, setOtp] = useState("");
    const [resendDisabled, setResendDisabled] = useState(true);
    const navigate = useNavigate();
    const timerRef = useRef(null);
    const handleSendOtp = () => {
        if (phoneNumber) {
            setOtpSent(true);
            setEditing(false);
            startCountdown();
        }
    };
    const startCountdown = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current); // Clear any existing timer
        }
        setCountdown(30);
        setResendDisabled(true);
        timerRef.current = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current); // Stop the interval when the countdown reaches 0
                    timerRef.current = null; // Clear the ref
                    setResendDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };
    const handleContinue = () => {
        if (otp.length === 5) {
            // Add OTP validation logic if needed
            navigate("/");
        } else {
            alert("Please enter a valid 5-digit OTP.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch h-[450px]">
                <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://static01.nyt.com/images/2020/01/06/arts/06pop-caramanica/06pop-caramanica-superJumbo.jpg')" }}>
                    <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>
                <div className="w-full md:w-1/2 p-8 space-y-8 flex flex-col justify-between">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-violet-500">MusiConnect</h1>
                        <p className="text-gray-400 text-sm">Your personalized gateway to endless music vibes</p>
                    </div>
                    <div className="space-y-4 flex-grow flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-white">Login / Signup</h2>
                        {editing ? (
                            <>
                                <div className="flex items-center border border-gray-700 rounded-lg bg-gray-900 overflow-hidden focus-within:ring-2 focus-within:ring-violet-500">
                                    <span className="px-4 text-gray-300">+91</span>
                                    <input
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        className="w-full bg-transparent text-gray-200 px-4 py-2 focus:outline-none"
                                        maxLength={10}
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 rounded-lg transition" onClick={handleSendOtp}>
                                    Send OTP
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="text-sm text-white flex items-center space-x-2">
                                    <p>{`OTP sent to ${phoneNumber}`}</p>
                                    <button className="text-red-500 underline" onClick={() => setEditing(true)}>Edit</button>
                                </div>
                                <div className="flex items-center border border-gray-700 rounded-lg bg-gray-900 overflow-hidden focus-within:ring-2 focus-within:ring-violet-500">
                                    <input
                                        type="text"
                                        placeholder="Enter 5-digit OTP"
                                        maxLength={5}
                                        className="w-full bg-transparent text-gray-200 px-4 py-2 focus:outline-none"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button
                                        className={`w-1/2 bg-violet-600 text-white font-bold py-2 rounded-lg mr-2 transition ${resendDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-700"}`}
                                        disabled={resendDisabled}
                                        onClick={startCountdown}
                                    >
                                        Resend OTP
                                    </button>
                                    <button className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg ml-2 transition" onClick={handleContinue}>
                                        Continue
                                    </button>
                                </div>
                                {countdown > 0 && <p className="text-sm text-gray-400 mt-2">{`Resend OTP in ${countdown}s`}</p>}
                            </>
                        )}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-32" />
                        <p className="text-gray-400 font-medium text-sm">Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
