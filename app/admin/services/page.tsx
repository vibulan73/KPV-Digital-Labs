"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Loader2, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch("/api/services");
            const data = await res.json();
            setServices(data);
        } catch (error) {
            console.error("Failed to fetch services", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this service?")) return;

        setDeletingId(id);
        try {
            const res = await fetch(`/api/services/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setServices(services.filter(s => s.id !== id));
            } else {
                alert("Failed to delete service");
            }
        } catch (error) {
            console.error("Error deleting service", error);
        } finally {
            setDeletingId(null);
        }
    };

    const filteredServices = services.filter(s =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-light text-white">Services</h1>
                    <p className="text-white/40 text-sm">Manage service offerings</p>
                </div>
                <Link
                    href="/admin/services/new"
                    className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    <Plus size={18} />
                    <span>Add Service</span>
                </Link>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
            </div>

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-white/30" size={32} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-white/10 transition-all h-full"
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-white/5 text-white/70">
                                            {/* Placeholder icon as we can't save SVGs easily in JSON, we'll implement icon selection later if needed */}
                                            <div className="w-6 h-6 rounded bg-current opacity-20" />
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={`/admin/services/${service.id}/edit`}
                                                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Edit size={16} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(service.id)}
                                                disabled={deletingId === service.id}
                                                className="p-2 text-red-400/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                                            >
                                                {deletingId === service.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed mb-4">{service.desc}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5 flex items-center text-xs text-white/30">
                                    <span className="truncate">{service.href}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <p className="text-white/30">No services found matching your search.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
