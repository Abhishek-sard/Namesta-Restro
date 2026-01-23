import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const News = () => {
    const articles = [
        { title: "Voted Best MoMo in Sydney CBD 2024", date: "Jan 12, 2024", category: "Award" },
        { title: "Summer Cocktail Menu Launching Next Week!", date: "Jan 05, 2024", category: "What's New" },
        { title: "Our Founder's Journey from Kathmandu to Sydney", date: "Dec 20, 2023", category: "Story" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cursive">Namaste <span className="text-red-600">News</span></h1>
                    <p className="text-gray-600 italic">Latest updates, awards, and stories from the family.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article, i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                            <div className="h-56 bg-gray-200 relative overflow-hidden">
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{article.category}</div>
                                <div className="w-full h-full bg-[url('/food.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                            </div>
                            <div className="p-8 flex-grow">
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                    <Calendar size={14} />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-600 transition-colors leading-tight">{article.title}</h3>
                                <button className="flex items-center gap-2 text-red-600 font-bold hover:underline">
                                    READ ARTICLE <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="text-gray-900 font-bold border-b-2 border-black hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-widest py-2">LOAD OLDER NEWS</button>
                </div>
            </div>
        </div>
    );
};

export default News;
