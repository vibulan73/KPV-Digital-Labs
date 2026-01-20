"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Plus, X } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

export default function NewCaseStudyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [newResult, setNewResult] = useState("");
    const [newTech, setNewTech] = useState("");
    const [formData, setFormData] = useState<Omit<CaseStudy, "id">>({
        title: "",
        client: "",
        industry: "",
        challenge: "",
        solution: "",
        results: [],
        technologies: [],
        image: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/case-studies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create item");
            router.push("/admin/case-studies");
            router.refresh();
        } catch (error) {
            alert("Failed to save.");
        } finally {
            setLoading(false);
        }
    };

    const addResult = () => {
        if (newResult.trim()) {
            setFormData(prev => ({ ...prev, results: [...prev.results, newResult.trim()] }));
            setNewResult("");
        }
    };
    const removeResult = (index: number) => {
        setFormData(prev => ({ ...prev, results: prev.results.filter((_, i) => i !== index) }));
    };


    const addTech = () => {
        if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
            setFormData(prev => ({ ...prev, technologies: [...prev.technologies, newTech.trim()] }));
            setNewTech("");
        }
    };
    const removeTech = (tech: string) => {
        setFormData(prev => ({ ...prev, technologies: prev.technologies.filter(t => t !== tech) }));
    };


    return (
        <div className="max-w-3xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/case-studies" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Add Case Study</h1>
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
                        <label className="text-xs font-medium text-white/60 uppercase">Client Name</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.client} onChange={e => setFormData({ ...formData, client: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Industry</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.industry} onChange={e => setFormData({ ...formData, industry: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Challenge</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-32"
                        value={formData.challenge} onChange={e => setFormData({ ...formData, challenge: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Solution</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-32"
                        value={formData.solution} onChange={e => setFormData({ ...formData, solution: e.target.value })}
                        required
                    />
                </div>

                {/* Results */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Key Results</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newResult}
                            onChange={(e) => setNewResult(e.target.value)}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            placeholder="e.g. 50% decrease in latency"
                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addResult())}
                        />
                        <button
                            type="button"
                            onClick={addResult}
                            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            <Plus />
                        </button>
                    </div>
                    <ul className="space-y-2 mt-2">
                        {formData.results.map((res, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg">
                                <span className="flex-1">{res}</span>
                                <button type="button" onClick={() => removeResult(idx)} className="hover:text-red-400"><X size={14} /></button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Technologies Used</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTech}
                            onChange={(e) => setNewTech(e.target.value)}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            placeholder="Add tech stack"
                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
                        />
                        <button
                            type="button"
                            onClick={addTech}
                            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            <Plus />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.technologies.map((tech) => (
                            <span key={tech} className="flex items-center gap-1 text-xs px-2 py-1 bg-white/10 rounded-lg text-white">
                                {tech}
                                <button type="button" onClick={() => removeTech(tech)} className="hover:text-red-400"><X size={12} /></button>
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
