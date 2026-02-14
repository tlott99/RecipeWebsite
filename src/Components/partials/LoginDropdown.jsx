"use client";

import React from 'react';
import { authClient } from "@/lib/auth/client"; // Import your Neon client
import LogoutButton from '../DropdownMenu/LogoutButton';
import Profile from '../DropdownMenu/Profile';
import Link from 'next/link';

export default function LoginDropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    
    // Get actual auth state from Neon
    const { data: session, isLoading } = authClient.useSession();
    const isAuthenticated = !!session; 

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="relative w-md inline-block text-left">
            <button onClick={toggleMenu} className="flex items-center justify-center p-6 rounded-md hover:bg-gray-100 transition-colors"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* SVG Icon */}
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={handleClose}></div>
                    <div className="flex flex-col gap-2 right-0 z-20 mt-2 max-w-[200px]">
                        {isLoading ? (
                            <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
                        ) : (
                            <>
                                {isAuthenticated && (
                                    <div className="flex flex-col border rounded-lg bg-blue-600 block px-4 py-2 z-30 text-sm " onClick={handleClose}>
                                        <Profile user={session.user} />
                                    </div>
                                )}
                                <div className="text-white border rounded-lg bg-blue-600 block px-4 py-2 z-30 text-sm" onClick={handleClose}>
                                    {isAuthenticated ? (
                                        <LogoutButton onLoggedOut={handleClose} /> 
                                    ) : (
                                        <Link href="/auth/sign-in" onClick={handleClose}>Log In</Link>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}