import React from 'react';
import LoginDropdown from './LoginDropdown';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="header w-full">
            <div className="backgroundGrey pt-6 w-full px-4 grid grid-cols-4">
                <div className="col-start-2 col-span-2">
                  <div className="w-full text-center">
                      <h1 className="pb-3 font-bold transition-all
                          text-[1rem] 
                          md:text-[2.0rem] 
                          lg:text-[3.75rem]">
                          PutRecipeHere()
                      </h1>
                  </div>
                  <nav className="flex flex-row justify-center items-center space-x-2 pt-1 mb-6 h-[30px]">
                      <Link 
                          href="/" 
                          className="bg-blue-600! hover:bg-blue-700 text-white rounded shadow px-4 py-1 text-[8px] md:text-[12px] lg:text-[16px]"
                      >
                        Home
                        
                      </Link>
                      
                      <Link 
                          href="/finder" 
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded shadow px-4 py-1 transition-all
                          text-[8px] md:text-[12px] lg:text-[16px]"
                      >
                          Recipe Finder
                      </Link>
                      
                      <Link 
                          href="/builder" 
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded shadow px-4 py-1 transition-all
                          text-[8px] md:text-[12px] lg:text-[16px]"
                      >
                          Recipe Builder
                      </Link>
                  </nav>
                </div>
                <div className="col-start-4 col-span-1 flex justify-end w-full">
                    <LoginDropdown />
                </div>
            </div>
        </header>
    );
}