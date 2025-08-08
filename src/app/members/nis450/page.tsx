"use client";

import Header from '../../base/Header';
import Footer from '../../base/Footer';

// Nis450さんの詳細データ
const memberData = {
    id: "nis450",
    name: "にっしー",
    role: "映像班",
    description: "VOCALOID楽曲制作と歌ってみたを中心に活動しています。楽曲制作では主に初音ミクを使用し、ポップスからロックまで幅広いジャンルに挑戦しています。",
    // 詳細情報
    details: {
        socialLinks: [
            {
                name: "X",
                url: "https://x.com/nissko04",
                icon: "🐦"
            }
        ]
    }
};

export default function Nis450Page() {
    return (
        <>

            {/* ヘッダー は必ず先頭に書く */}
            <Header bgColor="bg-black" textColor="text-white" />

            {/* メインコンテンツは自由な内容・デザインで作成していいよ */}
            <div className="bg-black text-white min-h-screen">
                <div className="flex flex-col items-center justify-center py-20 ">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-mikuBlue">
                        <img
                            src={`/members/${memberData.id}.png`}
                            alt={memberData.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-3xl md:text-5xl text-center font-bold animate-fadeInUp delay-100 mb-4">
                        {memberData.name}
                    </h1>
                    <p className="text-xl text-mikuBlue font-semibold mb-2">{memberData.role}</p>
                    <p className="text-lg text-center mx-10 max-w-2xl">
                        {memberData.description}
                    </p>
                </div>

                {/* 詳細情報セクション */}
                <div className="flex flex-col items-center justify-center pb-20 tracking-wider mx-12">

                    {/* ソーシャルリンク */}
                    <div className="mt-12 bg-transparent border border-mikuBlue rounded-lg p-6 max-w-2xl w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center border-b border-mikuBlue pb-2">
                            ソーシャルメディア
                        </h2>
                        <div className="flex justify-center space-x-6">
                            {memberData.details.socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 border border-mikuBlue rounded-lg transition-all hover:border-mikuPink hover:scale-105"
                                >
                                    <span className="text-3xl mb-2">{link.icon}</span>
                                    <span className="text-mikuBlue font-semibold">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* フッター は必ず最後に書く */}
            <Footer bgColor="bg-black" textColor="text-white" />
        </>
    );
}
