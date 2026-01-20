"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Link as LinkIcon } from "lucide-react";
import type { Service } from "@/lib/types";

export default function EditServicePage() {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState<Partial<Service>>({
        title: "",
        desc: "",
        href: "",
    });

    useEffect(() => {
        fetchService();
    }, [id]);

    const fetchService = async () => {
        try {
            const res = await fetch(`/api/services/${id}`);
            if (!res.ok) throw new Error("Not found");
            const data = await res.json();
            setFormData(data);
        } catch (error) {
            console.error(error);
            router.push("/admin/services");
        } finally {
            setFetching(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/services/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to update service");

            router.push("/admin/services");
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Failed to save. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin text-white/30" size={32} />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/services"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-light text-white">Edit Service</h1>
                    <p className="text-white/40 text-sm">Update service details</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Service Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase flex items-center gap-2">
                            <LinkIcon size={12} />
                            Read More Link (Optional)
                        </label>
                        <input
                            type="text"
                            name="href"
                            value={formData.href}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Link
                        href="/admin/services"
                        className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-all font-medium"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition-all font-medium flex items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        Update Service
                    </button>
                </div>
            </form>
        </div>
    );
}
