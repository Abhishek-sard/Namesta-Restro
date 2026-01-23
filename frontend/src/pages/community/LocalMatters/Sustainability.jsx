import React from 'react';
import { ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

const Sustainability = () => {
  const items = [
    {
      icon: <Recycle className="w-9 h-9 text-green-400" />,
      title: "Reducing Food Waste",
      desc: "Implementing smart portioning and donation programs."
    },
    {
      icon: <ShieldCheck className="w-9 h-9 text-blue-400" />,
      title: "Eco-friendly Packaging",
      desc: "100% biodegradable and recyclable takeaway materials."
    },
    {
      icon: <Zap className="w-9 h-9 text-yellow-400" />,
      title: "Responsible Sourcing",
      desc: "Partnering with suppliers who share our ecological values."
    },
    {
      icon: <Globe className="w-9 h-9 text-emerald-400" />,
      title: "Respecting Nature",
      desc: "Minimizing our environmental footprint in every operation."
    }
  ];

  return (
    <section className="py-24 bg-orange-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cursive">
            Sustainability & <span className="text-green-300">Responsibility</span>
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 font-light font-cursive">
            Our commitment to the planet is as strong as our commitment to our guests.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/15
                backdrop-blur-md
                p-8
                rounded-3xl
                border border-white/30
                shadow-xl shadow-black/30
                hover:bg-white/20
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                group
              "
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h4>

              <p className="text-orange-100 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
