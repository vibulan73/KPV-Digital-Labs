"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, User } from "lucide-react";
import type { Leader } from "@/lib/types";

export default function LeadersPage() {
    const [leaders, setLeaders] = useState<Leader[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/leaders");
            const data = await res.json();
            setLeaders(data);
        } catch (error) {
            console.error("Failed to fetch leaders", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/leaders/${id}`, { method: "DELETE" });
            if (res.ok) setLeaders(leaders.filter(i => i.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    const filtered = leaders.filter(i =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-light text-white">Leadership Team</h1>
                    <p className="text-white/40 text-sm">Manage company leaders</p>
                </div>
                <Link href="/admin/leaders/new" className="bg-white text-black px-4 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-gray-100">
                    <Plus size={18} /> Add New
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search leaders..."
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
                        <div key={item.id} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all flex items-start gap-4">
                            {item.image ? (
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                            ) : (
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-white/20"><User size={32} /></div>
                            )}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-medium text-white truncate">{item.name}</h3>
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={`/admin/leaders/${item.id}/edit`} className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10"><Edit size={14} /></Link>
                                        <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-400/50 hover:text-red-400 rounded-lg hover:bg-red-500/10">
                                            {deletingId === item.id ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-white/40 truncate">{item.title}</p>
                                <div className="flex gap-2 mt-2">
                                    {item.linkedin && <span className="text-xs px-2 py-0.5 rounded bg-[#0077b5]/20 text-[#0077b5]">LinkedIn</span>}
                                    {item.twitter && <span className="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-500">Twitter</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
