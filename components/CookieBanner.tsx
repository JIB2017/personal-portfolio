'use client';

import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState("");// Si está vacío significa que nunca se tomó una decisión

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);

        if(storedCookieConsent !== null) {
            if (storedCookieConsent === "accepted") {
                setCookieConsent("accepted");
            } else if (storedCookieConsent === "rejected") {
                setCookieConsent("rejected");
            }
        } else {
            setCookieConsent("");
        }

    }, [setCookieConsent]);


    useEffect(() => {
        const newValue = cookieConsent === "accepted" ? "granted" : "denied";

        window.gtag("consent", "update", {
            "analytics_storage": newValue
        });

        setLocalStorage("cookie_consent", cookieConsent);
        //console.log(localStorage.getItem("cookie_consent"));
    }, [cookieConsent]);


    return (
        <div className={`my-10 mx-auto max-w-max lg:max-w-screen-lg
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent === "" ? "flex" : "hidden"} px-3 md:px-4 py-3 justify-between items-center flex-row sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow z-10`}>

            <div className='text-left'>
                <p className='text-white-500 nonselect'>Estoy usando 
                <Link href="/info/cookies">
                    <span className='font-bold text-sky-400'> cookies </span> 
                </Link>
                    en el sitio.
                </p>
            </div>

            
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent("rejected")}>Rechazar</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent("accepted")}>Permitir cookies</button>
            </div>   
        </div>
    )
}
