'use client'
import { metadata } from '@/app/layout';
import { db } from '@/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { abortOnSynchronousPlatformIOAccess } from 'next/dist/server/app-render/dynamic-rendering';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const paystackSecretKey = process.env.REACT_APP_PAYSTACK_SECRET_KEY;

const paystackAPI = axios.create({
  baseURL: 'https://api.paystack.co/',
  headers: {
    Authorization: `Bearer ${paystackSecretKey}`,
    'Content-Type': 'application/json',
  },
});

// Payment Initialization Interface
interface PaymentInitRequest {
  email: 'fordjourfordjour@gmail.com';
  amount: 25000; // Amount in Cedis
  currency: 'GHS'; // Currency
}

interface PaymentInitResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}



const Register = () =>{
    const[email,setEmail] = useState<string>('')
    const[amount,setAmount] = useState<string>('')
    const[firstname,setFirstname] = useState<string>('')
    const[laststname,setLastname] = useState<string>('')
    const[program,setProgram] = useState<string>('')
    const[year,setYear] = useState<string>('')
    return(
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="w-full max-w-3xl mx-auto p-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Register</h1>
  
            {/* Payment details */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">REGISTER</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                  <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                  <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>
              </div>
  
              <div className="mt-4">
                <label htmlFor="address" className="block text-gray-700 dark:text-white mb-1">Institution</label>
                <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">Year (eg.first)</label>
                  <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                  <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>
              </div>
            </div>
  
            {/* Payment Information */}
            {/* <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
              <div className="mt-4">
                <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Card Number</label>
                <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div> */}
  {/* 
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                  <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div> */}
                {/* <div>
                  <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">CVV</label>
                  <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>
              </div>
            </div> */}
  
            <div className="mt-8 flex justify-end">        
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Register