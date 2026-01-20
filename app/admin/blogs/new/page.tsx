"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Plus, X } from "lucide-react";
import type { Blog } from "@/lib/types";

export default function NewBlogPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [newTag, setNewTag] = useState("");
    const [formData, setFormData] = useState<Omit<Blog, "id">>({
        title: "",
        excerpt: "",
        content: "",
        author: "",
        date: new Date().toISOString().split('T')[0],
        tags: [],
        image: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create item");
            router.push("/admin/blogs");
            router.refresh();
        } catch (error) {
            alert("Failed to save.");
        } finally {
            setLoading(false);
        }
    };

    const addTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
            setNewTag("");
        }
    };

    const removeTag = (tag: string) => {
        setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
    };

    return (
        <div className="max-w-3xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/blogs" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Add Blog Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
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
                        <label className="text-xs font-medium text-white/60 uppercase">Author</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })}
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
                    <label className="text-xs font-medium text-white/60 uppercase">Excerpt</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-24"
                        value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Content (Markdown supported)</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-64 font-mono text-sm"
                        value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Tags</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            placeholder="Add tags"
                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                        />
                        <button
                            type="button"
                            onClick={addTag}
                            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            <Plus />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 bg-white/10 rounded-lg text-white">
                                {tag}
                                <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400"><X size={12} /></button>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Cover Image URL</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })}
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
