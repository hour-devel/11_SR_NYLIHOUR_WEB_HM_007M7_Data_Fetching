'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const NavbarConponent = () => {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 
  return (
    <div className={`navbar w-[100%] text-white z-40 fixed left-[50%] top-0 translate-x-[-50%] px-[30px] ${
        scrolling ? "bg-[#38130D]" : ""}`}>
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl w-[100px] bg-black">
                <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="" />
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li className="hover:bg-white rounded-md hover:text-black font-bold mr-[15px]">
                    <a>Home</a>
                </li>
                <li className="hover:bg-white rounded-md hover:text-black font-bold mr-[15px]">
                    <a>Popular</a>
                </li>
                <li className="hover:bg-white rounded-md hover:text-black font-bold mr-[15px]">
                    <a>Romantic</a>
                </li>
                <li className="hover:bg-white rounded-md hover:text-black font-bold mr-[15px]">
                    <a>Anime</a>
                </li>
            </ul>
        </div>
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto h-[40px]"/>
        </div>
    </div>
  )
}

export default NavbarConponent