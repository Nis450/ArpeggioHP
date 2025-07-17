"use client"; // これを追加

import Head from 'next/head';
import { useState, useEffect } from 'react';

import Header from '../base/Header';
import Footer from '../base/Footer';

export default function Home() {
    const [, setScrollOpacity] = useState(1);  

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 10) { 
                setScrollOpacity(0);
            } else {
                setScrollOpacity(1);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   
    return (
        <div className='bg-mikuYellow'>
            <Head>
                <title>Arpeggio</title>
            </Head>
            <Header bgColor="bg-white" textColor="text-mikuBlack" />
            <div className="bg-white text-mikuBlack flex flex-col items-center justify-left pt-20  tracking-lwidest">
                <h1 className="text-5xl font-bold pt-10">TERMS & CONDITIONS</h1>
            </div>

            <div className="bg-white text-mikuBlack flex flex-col items-center justify-center  pt-10 tracking-wide">
                <div className='items-center justify-center w-3/5'>
                    <h2 className='text-xl pb-10'>Be sure to observe when using &quot;Bion Maita&quot;.</h2>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>1. Prohibited Items</h2>
                        <h2>- Use against public order and morals.</h2>
                        <h2>- Unauthorized commercial use, political use, religious use, use for R-designated works.</h2>
                        <h2>- Use for accounts that make excessive political, religious, or vulgar statements.</h2>
                        <h2>- Use to despise others or other countries.</h2>
                        <h2>- Use that causes trouble to the original author and other related parties.</h2>
                        <h2>- Self-made remarks/redistribution.</h2>
                        <h2>- The act of making an official standing picture an icon for any kind of SNS by anyone other than the illustration creator.</h2>
                        <h2>- Tracing of standing pictures and related illustrations.</h2>
                        <h2>- Actions that violate this agreement.</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>2. Licensed Items in Compliance with Prohibited Items</h2>
                        <h2>- Processing of voices that can be enjoyed by individuals. (Distribution is prohibited)</h2>
                        <h2>- Production of cosplay costumes, wearing at events, etc.</h2>
                        <h2>- Release of works using this sound source, MMD and 3DCG models of this character, and other illustration materials.</h2>
                        <h2>- Production of goods for non-profit purposes, use of this sound source and characters for distribution of doujin events.</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>3. About Commercial Use</h2>
                        <h2>- Regardless of the genre of the work, contacting Doshisha University VOCALOID Association Arpeggio is mandatory.</h2>
                        <h2>- If you are not sure whether it is a commercial one, please contact Doshisha University VOCALOID Association Arpeggio.</h2>
                        <h2>- You don&apos;t need to contact us if you only use it at spot sale events, fan fiction media such as BOOTH, or upload secondary creations to video posting sites or illustration posting sites.</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>4. About Voice Bank/Character</h2>
                        <h2>- This voice bank is a continuous sound audio library.</h2>
                        <h2>- When using this sound source, it is not necessary to indicate the name of the voice bank.</h2>
                        <h2>- The voice bank is for UTAU, but you can use it with software other than UTAU.</h2>
                        <h2>- If you want to use the official standing picture, please specify the character name and creator&apos;s name, and you can use it without permission.</h2>
                        <h2>- If you want to treat it as a coupling with another character, you can use it if it is not prohibited by the other party&apos;s rules.</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>5. Disclaimer</h2>
                        <h2>- We do not take any responsibility even if any trouble such as damage, disadvantage, accident, etc., occurs due to using this sound source.</h2>
                        <h2>- This agreement is subject to change without notice.</h2>
                    </div>
                </div>
            </div>
            <Footer bgColor="bg-white" textColor="text-mikuBlack"/>
        </div>
    );
}