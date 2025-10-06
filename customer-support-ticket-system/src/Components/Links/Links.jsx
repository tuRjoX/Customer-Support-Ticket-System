import React from 'react';
import FacebookIcon from '../../assets/fb.png';
import XIcon from '../../assets/x.png';
import LinkedInIcon from '../../assets/li.png';
import MailIcon from '../../assets/m.png';

const Links = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 bg-black text-white p-10 mt-20 justify-between md:px-20">
                <div>
                    <h1 className='text-lg font-semibold'>CS — Ticket System</h1>
                    <p className='text-[#A1A1AA] w-[350px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Company</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li><a>About Us</a></li>
                        <li><a>Our Mission</a></li>
                        <li><a>Contact Sales</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Services</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li><a>Products & Services</a></li>
                        <li><a>Customer Stories</a></li>
                        <li><a>Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Information</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms of Service</a></li>
                        <li><a>Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Social Links</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li className='flex items-center gap-2'><img src={FacebookIcon} alt="" /><a>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={XIcon} alt="" /><a>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={LinkedInIcon} alt="" /><a>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={MailIcon} alt="" /><a>support@cst.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='border-t-1 border-gray-800'>
                <p className='text-center text-[#A1A1AA] bg-black p-4'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
        
    );
};

export default Links;