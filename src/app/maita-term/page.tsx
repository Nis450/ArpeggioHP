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
                <h1 className="text-5xl font-bold pt-10">利用規約</h1>
            </div>

            <div className="bg-white text-mikuBlack flex flex-col items-center justify-center  pt-10 tracking-wide">
                <div className=' items-center justify-center w-3/5 '>
                    <h2 className='text-xl pb-10'>「琵音マイタ」を使う際は、必ず守ってください。</h2>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>1.禁止事項</h2>
                        <h2>・公序良俗、良識に反する使用。 </h2>
                        <h2>・無断での商用利用、政治的利用、宗教的利用、R指定作品への使用。</h2>
                        <h2>・過度に政治的、宗教的、下品な発言をするアカウントへの使用。</h2>
                        <h2>・他者や他国を侮蔑するための利用。</h2>
                        <h2>・原作者・その他関係者に迷惑のかかる使用。</h2>
                        <h2>・自作発言/再配布。</h2>
                        <h2>・イラスト製作者以外が公式立ち絵をSNS等のアイコンにする行為。</h2>
                        <h2>・立ち絵や関連イラストのトレース行為。</h2>
                        <h2>・本規約に反した行為。</h2>
                    </div>


                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>2.禁止事項を遵守した上での許諾事項</h2>
                        <h2>・個人で楽しむ範囲の声の加工。(配布は禁止)</h2>
                        <h2>・コスプレ衣装の制作、イベント等での着用。</h2>
                        <h2>・本音源を使用した作品、又本キャラクターのMMD及び3DCGモデル、他イラスト素材などの公開。</h2>
                        <h2>・非営利目的でのグッズ製作、同人イベント頒布物への本音源、キャラクターの使用。</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>3.商用利用について</h2>
                        <h2>作品のジャンル問わず同志社大学VOCALOID研究会Arpeggioへの連絡必須です。</h2>
                        <h2>また商用にあたるかどうか判断がつかない場合も同志社大学VOCALOID研究会Arpeggioへご連絡ください。</h2>
                        <h2>即売会や、BOOTH等の同人媒体での利用や動画投稿サイトやイラスト投稿サイトへの二次創作物のアップロードを行う程度でしたら連絡は不要です。</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>4.音源・キャラクターについて</h2>
                        <h2>本音源は連続音音声ライブラリです。本音源を使用した際、音源の名前を表記する必要はありません。</h2>
                        <h2>音源はUTAU向けとなっていますが、UTAU以外のソフトで使用していただいても構いません。</h2>
                        <h2>公式立ち絵を利用したい場合はキャラ名、作成者名を明記していただければ許可なしでご利用いただけます。</h2>
                        <h2>他の音源キャラクターとカップリング扱いをしたい場合、お相手様の規約の禁止事項でなければ利用可能です。</h2>
                    </div>

                    <div className='rule py-4'>
                        <h2 className='font-bold text-xl'>5.免責事項</h2>
                        <h2>本音源を使用したことにより損害・不利益・事故等の何らかのトラブルが発生した場合でも、当方は一切の責任を負いません。 本規約は予告なく変更されることがあります。 </h2>
                    </div>
                </div>
            </div>
            <Footer bgColor="bg-white" textColor="text-mikuBlack"/>
        </div>
    );
}