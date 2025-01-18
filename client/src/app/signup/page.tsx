"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const router = useRouter();
    const handleSignup = async () => {};
    return <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link href="#">
                <Image src="/amazon-log.png" alt="amazon logo" height={150} width={150}/>
            </Link>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md x1:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create your account
                    </h1>
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)} 
                                className="bg-gray-50 border border-e-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full block"
                                placeholder="name@company.com"

                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                Your Password
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} 
                                className="bg-gray-50 border border-e-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full block"
                                placeholder="password"

                            />
                        </div>
                        <button 
                            className="w-full text-white bg-orange-400 hover:bg-orange-500 font-medium text-small py-2.5 rounded-lg px-5 text-center" 
                            onClick={handleSignup}
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <Link href="/login" className="font-medium text-primary-700 hover:underline">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Page;


