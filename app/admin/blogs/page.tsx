"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, FileText } from "lucide-react";
import type { Blog } from "@/lib/types";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error("Failed to fetch blogs", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
            if (res.ok) setBlogs(blogs.filter(i => i.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    const filtered = blogs.filter(i =>
        i.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-light text-white">Blogs</h1>
                    <p className="text-white/40 text-sm">Manage blog posts</p>
                </div>
                <Link href="/admin/blogs/new" className="bg-white text-black px-4 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-gray-100">
                    <Plus size={18} /> Add New
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
            </div>

            {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-white/30" size={32} /></div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filtered.map((item) => (
                        <div key={item.id} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4 group hover:border-white/10 transition-all flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-white/30">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">{item.title}</h3>
                                    <p className="text-sm text-white/40">{item.author} • {item.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href={`/admin/blogs/${item.id}/edit`} className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10"><Edit size={16} /></Link>
                                <button onClick={() => handleDelete(item.id)} className="p-2 text-red-400/50 hover:text-red-400 rounded-lg hover:bg-red-500/10">
                                    {deletingId === item.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
