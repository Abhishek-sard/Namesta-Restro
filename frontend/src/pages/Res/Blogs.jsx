import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/blogs');
                setBlogs(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cursive">Namaste <span className="text-red-600">News</span></h1>
                    <p className="text-gray-600 italic">Latest updates, awards, and stories from the family.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog) => (
                            <div key={blog._id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                                <div className="h-56 bg-gray-200 relative overflow-hidden">
                                    <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{blog.category}</div>
                                    <img
                                        src={blog.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-600 transition-colors leading-tight line-clamp-2 h-16">{blog.title}</h3>
                                    <Link to={`/blogs/${blog._id}`} className="flex items-center gap-2 text-red-600 font-bold hover:underline">
                                        READ ARTICLE <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-20 text-center">
                    <button className="text-gray-900 font-bold border-b-2 border-black hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-widest py-2">LOAD OLDER NEWS</button>
                </div>
            </div>
        </div>
    );
};

export default News;
