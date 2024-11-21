import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-44' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>We are here with our trending fashion collection at the lower price than the other fashion brands ,  We are not a clothing brand we are lifestyle.</p>
            </div>
        

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap1 text-gray-600'>
             <li>+91 9891096989</li>
             <li>fashionclub@gmail.com</li>
            </ul>
        </div>
    </div>
    <div>
        <hr />
        <p className='p-y-5 text-sm text-center'>Copyright 2024@ fashionclub.com - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer