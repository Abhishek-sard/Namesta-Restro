import React, { useState, useEffect } from 'react';
import {
    Users,
    Utensils,
    ShoppingBag,
    Plus,
    Search,
    MoreVertical,
    Edit,
    Trash2,
    CheckCircle,
    Clock,
    Settings,
    Bell,
    LogOut,
    AlertCircle,
    Lock,
    BookOpen,
    FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('menu');
    const { user, logout } = useAuth();
    const [menuItems, setMenuItems] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({ name: '', category: '', price: '', description: '', image: '', imageFile: null });

    // Blog State
    const [blogs, setBlogs] = useState([]);
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [blogFormData, setBlogFormData] = useState({
        title: '',
        content: '',
        author: user?.name || '',
        category: 'Food',
        image: ''
    });

    // Password Reset State
    const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
    const [passwordStatus, setPasswordStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        if (activeTab === 'menu') {
            fetchMenu();
        } else if (activeTab === 'customers') {
            fetchUsers();
        } else if (activeTab === 'blogs') {
            fetchBlogs();
        }
    }, [activeTab]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };
            const { data } = await axios.get('http://localhost:5000/api/auth/users', config);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
        setLoading(false);
    };

    const fetchMenu = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:5000/api/menu');
            setMenuItems(data.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
        setLoading(false);
    };

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:5000/api/blogs');
            setBlogs(data.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const data = new FormData();
            data.append('name', formData.name);
            data.append('category', formData.category);
            data.append('price', formData.price);
            data.append('description', formData.description);
            if (formData.imageFile) {
                data.append('image', formData.imageFile);
            }

            if (editingItem) {
                await axios.put(`http://localhost:5000/api/menu/${editingItem._id}`, data, config);
            } else {
                await axios.post('http://localhost:5000/api/menu', data, config);
            }
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({ name: '', category: '', price: '', description: '', image: '', imageFile: null });
            fetchMenu();
        } catch (error) {
            console.error('Error saving menu item:', error);
            alert(error.response?.data?.error || 'Error saving menu item');
        }
        setLoading(false);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            category: item.category,
            price: item.price,
            description: item.description || '',
            image: item.image || '',
            imageFile: null
        });
        setIsModalOpen(true);
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setPasswordStatus({ type: '', message: '' });

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            return setPasswordStatus({ type: 'error', message: 'Passwords do not match' });
        }

        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };
            await axios.put('http://localhost:5000/api/auth/updatepassword', {
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            }, config);

            setPasswordStatus({ type: 'success', message: 'Password updated successfully!' });
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            setPasswordStatus({
                type: 'error',
                message: error.response?.data?.message || 'Error updating password'
            });
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await axios.delete(`http://localhost:5000/api/menu/${id}`);
                fetchMenu();
            } catch (error) {
                console.error('Error deleting menu item:', error);
            }
        }
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${user.token}`
                }
            };

            const formData = new FormData();
            formData.append('title', blogFormData.title);
            formData.append('content', blogFormData.content);
            formData.append('author', blogFormData.author);
            formData.append('category', blogFormData.category);

            if (blogFormData.imageFile) {
                formData.append('image', blogFormData.imageFile);
            } else {
                formData.append('image', blogFormData.image);
            }

            if (editingBlog) {
                await axios.put(`http://localhost:5000/api/blogs/${editingBlog._id}`, formData, config);
            } else {
                await axios.post('http://localhost:5000/api/blogs', formData, config);
            }
            setIsBlogModalOpen(false);
            setEditingBlog(null);
            setBlogFormData({ title: '', content: '', author: user.name, category: 'Food', image: '', imageFile: null });
            fetchBlogs();
        } catch (error) {
            console.error('Error saving blog:', error);
        }
        setLoading(false);
    };

    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setBlogFormData({
            title: blog.title,
            content: blog.content,
            author: blog.author,
            category: blog.category,
            image: blog.image || ''
        });
        setIsBlogModalOpen(true);
    };

    const handleDeleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                };
                await axios.delete(`http://localhost:5000/api/blogs/${id}`, config);
                fetchBlogs();
            } catch (error) {
                console.error('Error deleting blog:', error);
            }
        }
    };

    const renderSidebar = () => (
        <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col pt-24 z-20">
            <div className="px-6 mb-8">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Menu</h2>
            </div>
            <nav className="flex-1 px-4 space-y-2">
                {renderNavItem(
                    LayoutDashboard,
                    "Overview",
                    activeTab === 'overview',
                    () => setActiveTab('overview')
                )}
                {renderNavItem(
                    Utensils,
                    "Menu Management",
                    activeTab === 'menu',
                    () => setActiveTab('menu')
                )}
                {renderNavItem(
                    BookOpen,
                    "Blog Management",
                    activeTab === 'blogs',
                    () => setActiveTab('blogs')
                )}
                {renderNavItem(
                    ShoppingBag,
                    "Orders",
                    activeTab === 'orders',
                    () => setActiveTab('orders')
                )}
                {renderNavItem(
                    Users,
                    "Customers",
                    activeTab === 'customers',
                    () => setActiveTab('customers')
                )}
                <div className="pt-8 mb-4 px-2">
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Account</h2>
                    {renderNavItem(
                        Settings,
                        "Settings",
                        activeTab === 'settings',
                        () => setActiveTab('settings')
                    )}
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 mt-2"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </nav>
        </div>
    );

    const renderNavItem = (Icon, label, active, callback) => (
        <button
            onClick={callback}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'
                }`}
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </button>
    );



    const renderMenuTable = () => (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Menu Management</h3>
                    <p className="text-gray-500">Manage your restaurant items and categories</p>
                </div>
                <button
                    onClick={() => { setEditingItem(null); setFormData({ name: '', category: '', price: '', description: '', image: '', imageFile: null }); setIsModalOpen(true); }}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-100"
                >
                    <Plus className="w-5 h-5" />
                    Add New Item
                </button>
            </div>

            <div className="p-6 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Item Details</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            <tr><td colSpan="5" className="py-20 text-center text-orange-600 font-bold">Loading Menu...</td></tr>
                        ) : menuItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ?
                            menuItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.image.startsWith('http') ? item.image : `http://localhost:5000/uploads/${item.image}`}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=No+Img'; }}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{item.name}</p>
                                                <p className="text-xs text-gray-500 truncate max-w-[150px]">{item.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-orange-200">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900">${item.price}</td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-1.5 text-green-500 font-bold text-[10px] uppercase">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            Live
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="py-12 text-center text-gray-400 italic">No menu items found. Add some to get started!</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderUsersTable = () => (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Customer Management</h3>
                    <p className="text-gray-500">View and manage registered users and their roles</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl font-bold hover:bg-gray-200 transition-all">
                        Export List
                    </button>
                </div>
            </div>

            <div className="p-6 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">User Information</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Role</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Joined Date</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            <tr><td colSpan="5" className="py-20 text-center text-orange-600 font-bold">Loading Users...</td></tr>
                        ) : users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ?
                            users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())).map((u) => (
                                <tr key={u._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-bold uppercase transition-all group-hover:bg-orange-600 group-hover:text-white">
                                                {u.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{u.name}</p>
                                                <p className="text-xs text-gray-500">{u.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border ${u.role === 'admin'
                                            ? 'bg-red-50 text-red-600 border-red-100'
                                            : 'bg-blue-50 text-blue-600 border-blue-100'
                                            }`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 font-medium text-gray-700 text-sm">
                                        {new Date(u.createdAt || Date.now()).toLocaleDateString()}
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-1.5 text-green-500 font-bold text-[10px] uppercase">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            Active
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="py-12 text-center text-gray-400 italic">No customers found.</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderBlogsTable = () => (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Blog Management</h3>
                    <p className="text-gray-500">Create and manage your restaurant blogs</p>
                </div>
                <button
                    onClick={() => {
                        setEditingBlog(null);
                        setBlogFormData({ title: '', content: '', author: user?.name, category: 'Food', image: '' });
                        setIsBlogModalOpen(true);
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-100"
                >
                    <Plus className="w-5 h-5" />
                    Add New Blog
                </button>
            </div>

            <div className="p-6 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Blog Details</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Author</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="pb-4 pt-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            <tr><td colSpan="5" className="py-20 text-center text-orange-600 font-bold">Loading Blogs...</td></tr>
                        ) : blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ?
                            blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase())).map((blog) => (
                                <tr key={blog._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-5 px-4 text-sm font-bold text-gray-900">{blog.title}</td>
                                    <td className="py-5 px-4">
                                        <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-orange-200">
                                            {blog.category}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 text-sm text-gray-600">{blog.author}</td>
                                    <td className="py-5 px-4 text-sm text-gray-500">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEditBlog(blog)}
                                                className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteBlog(blog._id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="py-12 text-center text-gray-400 italic">No blogs found.</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );


    const renderSettingsTab = () => (
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-gray-50 text-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Security Settings</h3>
                    <p className="text-gray-500">Update your account password to keep it secure</p>
                </div>

                <div className="p-8">
                    {passwordStatus.message && (
                        <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 border-l-4 ${passwordStatus.type === 'success' ? 'bg-green-50 text-green-700 border-green-500' : 'bg-red-50 text-red-700 border-red-500'
                            }`}>
                            <AlertCircle className="w-5 h-5" />
                            <p className="text-sm font-bold">{passwordStatus.message}</p>
                        </div>
                    )}

                    <form onSubmit={handlePasswordChange} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                placeholder="Enter current password"
                                value={passwordData.currentPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
                                <input
                                    type="password"
                                    required
                                    minLength="6"
                                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                    placeholder="Min 6 characters"
                                    value={passwordData.newPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Confirm New Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                    placeholder="Confirm new password"
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                        >
                            {loading ? 'Updating...' : 'Save Password Changes'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-8 bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-start gap-4">
                <div className="bg-white p-2 text-orange-600 rounded-lg shadow-sm">
                    <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-orange-900 mb-1 text-sm">Advice for stronger password</h4>
                    <p className="text-orange-700 text-xs leading-relaxed">
                        Mix uppercase, lowercase, numbers, and symbols. Avoid using personal information like your name or birthday.
                    </p>
                </div>
            </div>
        </div>
    );

    const renderModal = () => (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 transition-all duration-500 ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">{editingItem ? 'Edit Menu Item' : 'Add New Item'}</h3>
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                            <Plus className="w-6 h-6 rotate-45" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Item Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                placeholder="e.g. Special Chicken MoMo"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium appearance-none"
                                    value={formData.category}
                                    required
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="">Select</option>
                                    <option value="Starters">Starters</option>
                                    <option value="Main Course">Main Course</option>
                                    <option value="Bread & Rice">Bread & Rice</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Drinks">Drinks</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Price ($)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Description</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium resize-none h-24"
                                placeholder="Brief description of the item..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Item Image</label>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0] })}
                                />
                                {formData.image && !formData.imageFile && (
                                    <p className="text-xs text-gray-500 truncate">Current: {formData.image.split('/').pop()}</p>
                                )}
                            </div>
                        </div>

                        <div className="pt-4 flex gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all border border-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-100"
                            >
                                {editingItem ? 'Save Changes' : 'Create Item'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#fcfcfd]">
            {renderSidebar()}

            <main className="ml-64 pt-24 min-h-screen">
                <header className="fixed top-0 right-0 left-64 h-24 bg-white/80 backdrop-blur-md border-b border-gray-100 z-10 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-2xl w-96 border border-gray-100">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search dishes, customers..."
                            className="bg-transparent border-none focus:outline-none text-sm w-full font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-orange-600 hover:shadow-sm transition-all relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                            </button>
                        </div>

                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-900 leading-none mb-1">{user?.name}</p>
                                <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">{user?.role}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-600 rounded-2xl shadow-lg shadow-orange-100 flex items-center justify-center text-white font-bold text-xl">
                                {user?.name?.charAt(0)}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
                                Welcome back, <span className="text-orange-600">{user?.name}</span> 👋
                            </h1>
                            <p className="text-gray-500 font-medium">Here's what's happening with your restaurant today.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 text-sm font-bold text-gray-600">
                                <Clock className="w-4 h-4 text-orange-600" />
                                {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </div>
                        </div>
                    </div>

                    {activeTab === 'menu' && renderMenuTable()}
                    {activeTab === 'blogs' && renderBlogsTable()}
                    {activeTab === 'customers' && renderUsersTable()}
                    {activeTab === 'settings' && renderSettingsTab()}
                    {activeTab === 'orders' && (
                        <div className="bg-white p-20 rounded-3xl border border-dashed border-gray-200 text-center">
                            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module Coming Soon</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">We're currently perfecting this section to give you the best experience. Stay tuned!</p>
                        </div>
                    )}
                </div>
            </main>
            {renderModal()}
            <BlogModal
                isOpen={isBlogModalOpen}
                onClose={() => setIsBlogModalOpen(false)}
                onSubmit={handleBlogSubmit}
                blog={editingBlog}
                formData={blogFormData}
                setFormData={setBlogFormData}
            />
        </div>
    );
};

const BlogModal = ({ isOpen, onClose, onSubmit, blog, formData, setFormData }) => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />
        <div className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl relative z-10 transition-all duration-500 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{blog ? 'Edit Blog' : 'Add New Blog'}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <Plus className="w-6 h-6 rotate-45" />
                    </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Blog Title</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                placeholder="Enter title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Author</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="Food">Food</option>
                                <option value="Events">Events</option>
                                <option value="Culture">Culture</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Offers">Offers</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Blog Image</label>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0] })}
                                />
                                {formData.image && !formData.imageFile && (
                                    <p className="text-xs text-gray-500 truncate">Current: {formData.image.split('/').pop()}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Content</label>
                        <textarea
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all font-medium resize-none h-40"
                            placeholder="Enter blog content..."
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all border border-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-100"
                        >
                            {blog ? 'Save Changes' : 'Create Blog'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default AdminDashboard;
