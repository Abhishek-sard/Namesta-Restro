import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "The best Nepalese food I've had in Sydney. The goat curry and momos were spectacular, reminded me of home! The flavors are truly authentic.",
    rating: 5,
    role: "Local Guide"
  },
  {
    name: "Michael Thompson",
    review: "Warm hospitality and delicious food! The staff went above and beyond to make our family celebration special. Will definitely be coming back.",
    rating: 5,
    role: "Regular Customer"
  },
  {
    name: "Anish Karki",
    review: "Everything was perfect - from the Chatpatey to the main courses. Large portions and very reasonable prices. Best Nepalese spot in the city.",
    rating: 5,
    role: "Foodie"
  },
  {
    name: "Emma Roberts",
    review: "If you're looking for real taste, this is it. The ambiance is cozy and the spices are just right. Highly recommend the Chicken Tikka Masala!",
    rating: 5,
    role: "Dinner Guest"
  }
];

const Review = () => {
  return (
    <section className="py-20 bg-[#fdfaf5] overflow-hidden relative" id="reviews">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="font-cursive text-red-600">Love</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our beloved guests have to say about their experience at Namaste Restro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="text-red-100 w-10 h-10 absolute -top-4 -left-2 rotate-180 opacity-50" />
                <p className="text-gray-700 italic relative z-10 leading-relaxed pt-2">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold uppercase">
                  {item.name.charAt(0)}
                </div>
                <div className="ml-3 text-left">
                  <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.facebook.com/namasterestrosydney/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200/50 group"
          >
            Read More Reviews on Facebook
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Review;
