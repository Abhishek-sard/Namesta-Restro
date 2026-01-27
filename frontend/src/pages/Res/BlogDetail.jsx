import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(data.data);
                setLoading(false);
            } catch (err) {
                setError('Blog not found');
                setLoading(false);
            }
        };
        fetchBlog();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="pt-40 min-h-screen flex items-center justify-center bg-[#fdfaf5]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="pt-40 min-h-screen text-center bg-[#fdfaf5]">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! {error}</h1>
                <button
                    onClick={() => navigate('/blogs')}
                    className="text-red-600 font-bold hover:underline flex items-center gap-2 mx-auto"
                >
                    <ArrowLeft size={20} /> Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={blog.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
                            {blog.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-red-400" />
                                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-red-400" />
                                <span>By {blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-red-400" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-20">
                <button
                    onClick={() => navigate('/blogs')}
                    className="group flex items-center gap-2 text-gray-500 hover:text-red-600 font-bold mb-12 transition-colors"
                >
                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow group-hover:-translate-x-1 transition-all">
                        <ArrowLeft size={18} />
                    </div>
                    <span>BACK TO ALL NEWS</span>
                </button>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-orange-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        {blog.content.split('\n').map((paragraph, i) => (
                            paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
                        ))}
                    </div>

                    <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Written by</p>
                                <p className="text-gray-900 font-bold">{blog.author}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Share:</span>
                            {/* Share icons placeholder */}
                            <div className="flex gap-2">
                                {['FB', 'TW', 'IN'].map(social => (
                                    <button key={social} className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-sm font-bold text-gray-400 hover:border-red-600 hover:text-red-600 transition-all">
                                        {social}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts Placeholder */}
                <div className="mt-32">
                    <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-cursive">Keep <span className="text-red-600">Reading</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center bg-gray-50 p-12 rounded-[2rem] border border-dashed border-gray-200">
                        <p className="col-span-2 text-gray-500 italic">More stories coming soon to Namaste News!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
