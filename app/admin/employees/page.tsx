"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, User } from "lucide-react";
import type { Employee } from "@/lib/types";

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/employees");
            const data = await res.json();
            setEmployees(data);
        } catch (error) {
            console.error("Failed to fetch employees", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/employees/${id}`, { method: "DELETE" });
            if (res.ok) setEmployees(employees.filter(i => i.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    const filtered = employees.filter(i =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-light text-white">Employees</h1>
                    <p className="text-white/40 text-sm">Manage team members</p>
                </div>
                <Link href="/admin/employees/new" className="bg-white text-black px-4 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-gray-100">
                    <Plus size={18} /> Add New
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search employees..."
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
                        <div key={item.id} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-medium text-lg bg-gradient-to-br ${item.color || 'from-gray-700 to-gray-600'}`}>
                                    {item.initials}
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={`/admin/employees/${item.id}/edit`} className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10"><Edit size={16} /></Link>
                                    <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-400/50 hover:text-red-400 rounded-lg hover:bg-red-500/10">
                                        {deletingId === item.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-white/70 mb-2">{item.title}</p>
                            <p className="text-sm text-white/50 line-clamp-2 mb-4">{item.bio}</p>

                            <div className="flex flex-wrap gap-2">
                                {item.skills.slice(0, 3).map((skill, idx) => (
                                    <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-white/60">{skill}</span>
                                ))}
                                {item.skills.length > 3 && <span className="text-xs px-2 py-1 bg-white/5 rounded text-white/60">+{item.skills.length - 3}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
