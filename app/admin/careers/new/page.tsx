"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Plus, X } from "lucide-react";
import type { Career } from "@/lib/types";

export default function NewCareerPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Career>>({
        role: "",
        title: "",
        location: "Remote",
        type: "Full-time",
        team: "Engineering",
        qualifications: [""],
        responsibilities: [""],
        skills: [""],
        color: "from-blue-500 to-indigo-500",
        disc: "",
        summary: "",
        href: "#",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (index: number, value: string, field: 'qualifications' | 'responsibilities' | 'skills') => {
        const newArray = [...(formData[field] || [])];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const addArrayItem = (field: 'qualifications' | 'responsibilities' | 'skills') => {
        setFormData(prev => ({ ...prev, [field]: [...(prev[field] || []), ""] }));
    };

    const removeArrayItem = (index: number, field: 'qualifications' | 'responsibilities' | 'skills') => {
        const newArray = [...(formData[field] || [])];
        newArray.splice(index, 1);
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Clean up empty array items
            const cleanedData = {
                ...formData,
                qualifications: formData.qualifications?.filter(i => i.trim() !== ""),
                responsibilities: formData.responsibilities?.filter(i => i.trim() !== ""),
                skills: formData.skills?.filter(i => i.trim() !== ""),
            };

            const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cleanedData),
            });

            if (!res.ok) throw new Error("Failed to create career");

            router.push("/admin/careers");
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Failed to save. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/careers"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-light text-white">Post New Job</h1>
                    <p className="text-white/40 text-sm">Create a new opening</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-6">
                    <h2 className="text-lg font-medium text-white border-b border-white/5 pb-4">Basic Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Role Name</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Senior Frontend Engineer"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Internal Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Frontend Engineer II"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Team</label>
                            <select
                                name="team"
                                value={formData.team}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            >
                                <option value="Engineering" className="bg-black">Engineering</option>
                                <option value="Product" className="bg-black">Product</option>
                                <option value="Design" className="bg-black">Design</option>
                                <option value="Data" className="bg-black">Data</option>
                                <option value="Infrastructure" className="bg-black">Infrastructure</option>
                                <option value="Marketing" className="bg-black">Marketing</option>
                                <option value="Sales" className="bg-black">Sales</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            >
                                <option value="Full-time" className="bg-black">Full-time</option>
                                <option value="Part-time" className="bg-black">Part-time</option>
                                <option value="Contract" className="bg-black">Contract</option>
                                <option value="Internship" className="bg-black">Internship</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g. Remote, London, NYC"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Color Theme</label>
                            <select
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            >
                                <option value="from-blue-500 to-teal-400" className="bg-black">Blue - Teal</option>
                                <option value="from-purple-500 to-pink-400" className="bg-black">Purple - Pink</option>
                                <option value="from-yellow-500 to-orange-400" className="bg-black">Yellow - Orange</option>
                                <option value="from-green-500 to-emerald-400" className="bg-black">Green - Emerald</option>
                                <option value="from-red-500 to-rose-400" className="bg-black">Red - Rose</option>
                                <option value="from-indigo-500 to-sky-400" className="bg-black">Indigo - Sky</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Descriptions */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-6">
                    <h2 className="text-lg font-medium text-white border-b border-white/5 pb-4">Job Description</h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Detailed Description</label>
                            <textarea
                                name="disc"
                                value={formData.disc}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="Full description of the role..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase">Short Summary (for cards)</label>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                rows={2}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="Brief summary..."
                            />
                        </div>
                    </div>
                </div>

                {/* Dynamic Lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h2 className="text-lg font-medium text-white">Skills Required</h2>
                            <button type="button" onClick={() => addArrayItem('skills')} className="text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200">Add Skill</button>
                        </div>
                        <div className="space-y-2">
                            {formData.skills?.map((skill, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={(e) => handleArrayChange(idx, e.target.value, 'skills')}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
                                        placeholder="e.g. React"
                                    />
                                    <button type="button" onClick={() => removeArrayItem(idx, 'skills')} className="text-white/30 hover:text-red-400">
                                        <X size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h2 className="text-lg font-medium text-white">Responsibilities</h2>
                            <button type="button" onClick={() => addArrayItem('responsibilities')} className="text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200">Add Item</button>
                        </div>
                        <div className="space-y-2">
                            {formData.responsibilities?.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleArrayChange(idx, e.target.value, 'responsibilities')}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
                                        placeholder="Responsibility..."
                                    />
                                    <button type="button" onClick={() => removeArrayItem(idx, 'responsibilities')} className="text-white/30 hover:text-red-400">
                                        <X size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-4 md:col-span-2">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h2 className="text-lg font-medium text-white">Qualifications</h2>
                            <button type="button" onClick={() => addArrayItem('qualifications')} className="text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200">Add Items</button>
                        </div>
                        <div className="space-y-2">
                            {formData.qualifications?.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleArrayChange(idx, e.target.value, 'qualifications')}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
                                        placeholder="Qualification..."
                                    />
                                    <button type="button" onClick={() => removeArrayItem(idx, 'qualifications')} className="text-white/30 hover:text-red-400">
                                        <X size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-6">
                    <Link
                        href="/admin/careers"
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
                        Publish Opening
                    </button>
                </div>
            </form>
        </div>
    );
}
