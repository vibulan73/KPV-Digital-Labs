"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, Code2 } from "lucide-react";
import type { TechStackItem } from "@/lib/types";

export default function TechStackPage() {
    const [items, setItems] = useState<TechStackItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/tech-stack");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch tech stack", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/tech-stack/${id}`, { method: "DELETE" });
            if (res.ok) setItems(items.filter(i => i.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    const filtered = items.filter(i =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-light text-white">Tech Stack</h1>
                    <p className="text-white/40 text-sm">Manage technologies and frameworks</p>
                </div>
                <Link href="/admin/tech-stack/new" className="bg-white text-black px-4 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-gray-100">
                    <Plus size={18} /> Add New
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
            </div>

            {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-white/30" size={32} /></div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filtered.map((item) => (
                        <div key={item.id} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4 flex flex-col items-center gap-3 group hover:border-white/10 transition-all relative">
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href={`/admin/tech-stack/${item.id}/edit`} className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10"><Edit size={14} /></Link>
                                <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-400/50 hover:text-red-400 rounded-lg hover:bg-red-500/10">
                                    {deletingId === item.id ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                                </button>
                            </div>
                            <div className="text-4xl mt-2">
                                <i className={item.iconClass}></i>
                            </div>
                            <span className="text-white text-sm font-medium text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
