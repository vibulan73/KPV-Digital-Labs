"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, Briefcase } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudiesPage() {
    const [items, setItems] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/case-studies");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch items", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/case-studies/${id}`, { method: "DELETE" });
            if (res.ok) setItems(items.filter(i => i.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    const filtered = items.filter(i =>
        i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.client.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-light text-white">Case Studies</h1>
                    <p className="text-white/40 text-sm">Manage case studies</p>
                </div>
                <Link href="/admin/case-studies/new" className="bg-white text-black px-4 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-gray-100">
                    <Plus size={18} /> Add New
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
            </div>

            {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-white/30" size={32} /></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((item) => (
                        <div key={item.id} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30">
                                        <Briefcase size={20} />
                                    </div>
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={`/admin/case-studies/${item.id}/edit`} className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10"><Edit size={16} /></Link>
                                        <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-400/50 hover:text-red-400 rounded-lg hover:bg-red-500/10">
                                            {deletingId === item.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-1 group-hover:text-white/90">{item.title}</h3>
                                <p className="text-sm text-indigo-400 mb-3">{item.client}</p>
                                <p className="text-sm text-white/50 line-clamp-3 mb-4">{item.challenge}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {item.industry && <span className="text-xs px-2 py-1 bg-white/5 rounded text-white/40">{item.industry}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
