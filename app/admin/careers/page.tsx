"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, MapPin, Loader2 } from "lucide-react";
import type { Career } from "@/lib/types";

export default function CareersPage() {
    const [careers, setCareers] = useState<Career[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        try {
            const res = await fetch("/api/careers");
            const data = await res.json();
            setCareers(data);
        } catch (error) {
            console.error("Failed to fetch careers", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this opening?")) return;

        setDeletingId(id);
        try {
            const res = await fetch(`/api/careers/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setCareers(careers.filter(c => c.id !== id));
            } else {
                alert("Failed to delete career");
            }
        } catch (error) {
            console.error("Error deleting career", error);
        } finally {
            setDeletingId(null);
        }
    };

    const filteredCareers = careers.filter(c =>
        c.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-light text-white">Careers</h1>
                    <p className="text-white/40 text-sm">Manage job openings and internships</p>
                </div>
                <Link
                    href="/admin/careers/new"
                    className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    <Plus size={18} />
                    <span>Post Job</span>
                </Link>
            </div>

            {/* Search and Filter */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search roles, locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
            </div>

            {/* List */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-white/30" size={32} />
                </div>
            ) : (
                <div className="grid gap-4">
                    {filteredCareers.length > 0 ? (
                        filteredCareers.map((career) => (
                            <div
                                key={career.id}
                                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${career.color} flex-shrink-0 flex items-center justify-center text-white shadow-lg`}>
                                        <span className="text-xs font-bold">{career.role.substring(0, 2).toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">{career.role}</h3>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-white/50">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={12} /> {career.location}
                                            </span>
                                            <span>•</span>
                                            <span>{career.type}</span>
                                            <span>•</span>
                                            <span>{career.team}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity self-end sm:self-auto">
                                    <Link
                                        href={`/admin/careers/${career.id}/edit`}
                                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                        title="Edit"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(career.id)}
                                        disabled={deletingId === career.id}
                                        className="p-2 text-red-400/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                                        title="Delete"
                                    >
                                        {deletingId === career.id ? (
                                            <Loader2 size={18} className="animate-spin" />
                                        ) : (
                                            <Trash2 size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <p className="text-white/30">No careers found matching your search.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
