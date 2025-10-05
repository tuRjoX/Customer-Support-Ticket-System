import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar shadow-sm px-4">
            <div className="flex-1">
                <a className="text-xl font-bold">CS — Ticket System</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a>Changelog</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Download</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition border-0">
                            + New Ticket
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;