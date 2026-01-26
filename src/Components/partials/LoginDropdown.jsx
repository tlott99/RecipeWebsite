"use client";

import React from 'react';
import LoginButton from '../DropdownMenu/LoginButton';
import LogoutButton from '../DropdownMenu/LogoutButton';
import Profile from '../DropdownMenu/Profile';

export default function LoginDropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { isAuthenticated } = ""

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative w-md inline-block text-left">
            <button
                id="basic-button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={toggleMenu}
                className="flex items-center justify-center p-6 rounded-md hover:bg-gray-100 transition-colors"
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
            </button>
            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 z-10" 
                        onClick={handleClose}
                    ></div>

                    <div 
                        className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        id="basic-menu"
                        role="menu"
                        aria-labelledby="basic-button"
                    >
                        {isAuthenticated && (
                            <div 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" 
                                role="menuitem" 
                                onClick={handleClose}
                            >
                                <Profile />
                            </div>
                        )}
                        
                        <div 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" 
                            role="menuitem" 
                            onClick={handleClose}
                        >
                            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}