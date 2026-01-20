"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Info } from "lucide-react";
import type { TechStackItem } from "@/lib/types";

export default function EditTechStackPage() {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<TechStackItem>>({
        name: "",
        iconClass: "",
    });

    useEffect(() => {
        fetch(`/api/tech-stack/${id}`).then(res => res.json()).then(setFormData).catch(console.error);
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/tech-stack/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed");
            router.push("/admin/tech-stack");
            router.refresh();
        } catch (error) {
            alert("Failed to save.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/tech-stack" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Edit Technology</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Name</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Devicon Class</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.iconClass} onChange={e => setFormData({ ...formData, iconClass: e.target.value })}
                        required
                    />
                    <p className="text-xs text-white/30 flex items-center gap-1">
                        <Info size={12} /> Find classes at <a href="https://devicon.dev" target="_blank" className="text-indigo-400 hover:underline">devicon.dev</a>
                    </p>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Preview</label>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                        <i className={`text-4xl ${formData.iconClass}`}></i>
                        <span className="text-white/50 text-sm">If icon shows up here, the class is correct.</span>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-medium flex gap-2 disabled:opacity-50">
                        {loading ? <Loader2 className="animate-spin" /> : <Save size={18} />} Save
                    </button>
                </div>
            </form>
        </div>
    );
}
