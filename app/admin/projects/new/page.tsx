"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Info, X } from "lucide-react";
import type { Project } from "@/lib/types";

export default function NewProjectPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Project>>({
        title: "",
        description: "",
        aboutClient: "",
        problemStatement: "",
        ourSolution: "",
        resultsAndOutcomes: "",
        technologies: [],
        image: "/pr1.jpeg",
    });
    const [techInput, setTechInput] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create project");
            router.push("/admin/projects");
            router.refresh();
        } catch (error) {
            alert("Failed to save project.");
        } finally {
            setLoading(false);
        }
    };

    const addTechnology = () => {
        if (techInput.trim() && !formData.technologies?.includes(techInput.trim())) {
            setFormData({
                ...formData,
                technologies: [...(formData.technologies || []), techInput.trim()]
            });
            setTechInput("");
        }
    };

    const removeTechnology = (tech: string) => {
        setFormData({
            ...formData,
            technologies: formData.technologies?.filter(t => t !== tech) || []
        });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/projects" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Add Client Project</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Project Title</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })}
                        required
                        placeholder="e.g. Product Discovery Platform"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Description (Brief)</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" rows={2}
                        value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                        required
                        placeholder="Short description for cards..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">About Client</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" rows={2}
                        value={formData.aboutClient} onChange={e => setFormData({ ...formData, aboutClient: e.target.value })}
                        required
                        placeholder="Company background and industry..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Problem Statement</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" rows={3}
                        value={formData.problemStatement} onChange={e => setFormData({ ...formData, problemStatement: e.target.value })}
                        required
                        placeholder="What challenges did the client face..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Our Solution</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" rows={3}
                        value={formData.ourSolution} onChange={e => setFormData({ ...formData, ourSolution: e.target.value })}
                        required
                        placeholder="How we solved the problem..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Results and Outcomes</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" rows={2}
                        value={formData.resultsAndOutcomes} onChange={e => setFormData({ ...formData, resultsAndOutcomes: e.target.value })}
                        required
                        placeholder="Measurable results achieved..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Technologies</label>
                    <div className="flex gap-2">
                        <input
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={techInput}
                            onChange={e => setTechInput(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                            placeholder="e.g. React, Node.js"
                        />
                        <button type="button" onClick={addTechnology} className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white">
                            Add
                        </button>
                    </div>
                    {formData.technologies && formData.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {formData.technologies.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm flex items-center gap-2">
                                    {tech}
                                    <button type="button" onClick={() => removeTechnology(tech)} className="hover:text-red-400">
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Image URL or Path</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.image}
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/pr1.jpeg or https://example.com/image.jpg"
                    />
                    <p className="text-xs text-white/30 flex items-center gap-1">
                        <Info size={12} /> Use local path (/image.jpg from public folder) or internet URL
                    </p>
                    {formData.image && (
                        <div className="mt-2 flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-24 h-24 rounded-lg object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/pr1.jpeg';
                                }}
                            />
                            <span className="text-white/50 text-sm">Preview</span>
                        </div>
                    )}
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
