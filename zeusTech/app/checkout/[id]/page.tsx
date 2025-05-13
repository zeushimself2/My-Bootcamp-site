"use client"

import { db } from '@/config';
import Product from '@/models/Product';
import { collection, onSnapshot } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PaystackButton from '@/components/PaystackButton';
const Register = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [year, setYear] = useState<string>('1st');

    useEffect(() => {
        const getProduct = async () => {
            onSnapshot(collection(db, 'products'), (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.id === id) {
                        setProduct({ ...doc.data(), id: doc.id } as Product);
                    }
                });
            });
        }
        getProduct();
    }, [id]);

    const amountInPesewas = product?.price ? product.price * 100 : 0;

    const config = {
        reference: new Date().getTime().toString(),
        email: email,
        amount: amountInPesewas,
        phone: phone,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    };

    const handlePaystackSuccessAction = (reference: any) => {
        console.log('Payment successful:', reference);
        alert('Payment Successful!');
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment dialog closed');
    };
    const handlePayment = async () => {
      const paymentData = {
          email,
          amount: 25000,
          phone,
      };
  
     
  };
  

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="w-full max-w-3xl mx-auto p-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Register</h1>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Z-Tech bootcamp</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                <input 
                                    type="text" 
                                    id="first_name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white" 
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                <input 
                                    type="text" 
                                    id="last_name" 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-1">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white" 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 dark:text-white mb-1">Phone</label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white" 
                                />
                            </div>
                            <div>
                                <label htmlFor="year" className="block text-gray-700 dark:text-white mb-1">Year</label>
                                <select 
                                    id="year" 
                                    value={year} 
                                    onChange={(e) => setYear(e.target.value)} 
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white">
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="5th">5th</option>
                                    <option value="6th">6th</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <PaystackButton 
                            {...config} 
                            text="Register" 
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" 
                            onSuccess={handlePaystackSuccessAction} 
                            onClose={handlePaystackCloseAction} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
