// SignUpForm.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignUp = () => {

    const [showPassword, setshowPassword] = useState(false)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = formData;
        if (!name || !email || !phone || !password || !cpassword) {
            toast.error('Please Fill All The Feild', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            if (password !== cpassword) {
                toast.error('Password And Confirm Password Must be Same', {
                    position: "top-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                try {
                    const response = await axios.post('/api/register', formData, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = response.status

                    if (data === 202) {
                        toast.warn('Email is already exists', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else if (data === 200) {
                        toast.warn('SignUp Sucessful Login Now', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        setTimeout(() => {
                            navigate("/login");
                        }, 2000);

                    } else {
                        Swal.fire(
                            'Something went Wrong',
                            'Try Again',
                            'error'
                        )
                    }
                } catch (error) {
                    console.error('Error posting data:', error);
                }
            }
        }

    };

    const PostData = async (e) => {
        // e.preventDefault();

        try {
            const response = await axios.get('/api/userauthcheck', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Include credentials if necessary
            });

            console.log(response);
            if (response.status === 200) {
                setTimeout(() => {
                    // setloader(false)
                    navigate("/")
                }, 1 * 1000);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }


    }
    useEffect(() => {
        PostData()
    }, [])

    return (
        <div className="flex items-center justify-center h-screen signuppage px-4 md:px-0">
            <form className="bg-white p-8 rounded shadow-md w-96 select-none" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password
                    </label>
                    <div className='h-auto relative'>
                        <input
                            type={showPassword === false ? "password" : "text"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <div className='w-auto h-full absolute top-0 right-2 flex items-center text-2xl cursor-pointer' onClick={() => { setshowPassword(!showPassword) }}>
                            {showPassword === false ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6 h-auto ">
                    <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-medium mb-2">
                        Confirm Password
                    </label>
                    <div className='h-auto relative'>
                        <input
                            type={showPassword === false ? "password" : "text"}
                            id="cpassword"
                            name="cpassword"
                            value={formData.cpassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <div className='w-auto h-full absolute top-0 right-2 flex items-center text-2xl cursor-pointer' onClick={() => { setshowPassword(!showPassword) }}>
                            {showPassword === false ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                    </div>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-600 text-sm font-medium mb-2">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    >
                        <option value="" disabled>
                            Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Sign Up
                </button>

                {/* Link to go Login Page */}
                <p className="mt-4 text-sm text-gray-600 flex justify-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default SignUp;
