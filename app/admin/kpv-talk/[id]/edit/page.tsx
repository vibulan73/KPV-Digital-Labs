"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import type { KPVTalk } from "@/lib/types";

export default function EditKPVTalkPage() {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Omit<KPVTalk, "id">>({
        title: "",
        speaker: "",
        date: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: ""
    });

    useEffect(() => {
        fetch(`/api/kpv-talk/${id}`).then(res => res.json()).then(setFormData).catch(console.error);
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/kpv-talk/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed");
            router.push("/admin/kpv-talk");
            router.refresh();
        } catch (error) {
            alert("Failed to save.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/kpv-talk" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Edit KPV Talk</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                {/* Same fields as New Page */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Title</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })}
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Speaker</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.speaker} onChange={e => setFormData({ ...formData, speaker: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Date</label>
                        <input
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Description</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-32"
                        value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Video URL (YouTube/Vimeo)</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.videoUrl} onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Thumbnail URL (Optional)</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.thumbnailUrl} onChange={e => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                    />
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
