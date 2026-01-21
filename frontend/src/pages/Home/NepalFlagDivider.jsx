import React from 'react';
import { Handshake } from 'lucide-react';

const NepalFlagDivider = () => {
    return (
        <div className="w-full py-16 flex flex-col items-center justify-center bg-white overflow-hidden">
            <div className="flex items-center w-full max-w-4xl px-4 gap-4">
                {/* Nepal Side (Crimson) */}
                <div className="flex-grow h-1 bg-gradient-to-r from-transparent to-[#DC143C]"></div>

                <div className="relative group">
                    {/* Handshake Icon with Split Colors */}
                    <div className="relative z-10 p-4 bg-white rounded-full shadow-lg border-2 border-gray-100 transform transition hover:scale-110">
                        <Handshake
                            size={48}
                            className="text-gray-400 group-hover:rotate-12 transition-transform duration-500"
                        />
                        {/* Overlay colors on the icon for symbolic representation */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                            <div className="w-1/2 h-full bg-[#DC143C] rounded-l-full"></div>
                            <div className="w-1/2 h-full bg-[#00008B] rounded-r-full"></div>
                        </div>
                    </div>

                    {/* Decorative Labels - Mixing Style */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap">
                        <span className="text-[#DC143C] font-bold text-sm lg:text-base uppercase tracking-widest transition-all group-hover:scale-110">Nepal</span>
                        <span className="text-gray-300 font-light text-xl">|</span>
                        <span className="text-[#00008B] font-bold text-sm lg:text-base uppercase tracking-widest transition-all group-hover:scale-110">Australia</span>
                    </div>
                </div>

                {/* Australia Side (Deep Blue) */}
                <div className="flex-grow h-1 bg-gradient-to-l from-transparent to-[#00008B]"></div>
            </div>

            <p className="mt-6 text-gray-400 text-sm font-medium tracking-widest uppercase">Namaste from Nepal, G'day from Australia</p>
        </div>
    );
};

export default NepalFlagDivider;
