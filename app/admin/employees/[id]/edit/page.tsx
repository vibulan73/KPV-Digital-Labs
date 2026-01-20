"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Plus, X } from "lucide-react";
import type { Employee } from "@/lib/types";

export default function EditEmployeePage() {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [loading, setLoading] = useState(false);
    const [newSkill, setNewSkill] = useState("");
    const [formData, setFormData] = useState<Omit<Employee, "id">>({
        name: "",
        initials: "",
        title: "",
        bio: "",
        skills: [],
        color: ""
    });

    useEffect(() => {
        fetch(`/api/employees/${id}`).then(res => res.json()).then(setFormData).catch(console.error);
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/employees/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed");
            router.push("/admin/employees");
            router.refresh();
        } catch (error) {
            alert("Failed to save.");
        } finally {
            setLoading(false);
        }
    };

    const addSkill = () => {
        if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
            setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
            setNewSkill("");
        }
    };

    const removeSkill = (skill: string) => {
        setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
    };

    return (
        <div className="max-w-2xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/employees" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"><ArrowLeft size={20} /></Link>
                <h1 className="text-2xl font-light text-white">Edit Employee</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Name</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase">Initials</label>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            value={formData.initials} onChange={e => setFormData({ ...formData, initials: e.target.value })}
                            required
                            maxLength={3}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Title</label>
                    <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                        value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Bio</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 h-32"
                        value={formData.bio} onChange={e => setFormData({ ...formData, bio: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Skills</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
                            placeholder="Add skills"
                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                        />
                        <button
                            type="button"
                            onClick={addSkill}
                            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            <Plus />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.skills.map((skill) => (
                            <span key={skill} className="flex items-center gap-1 text-xs px-2 py-1 bg-white/10 rounded-lg text-white">
                                {skill}
                                <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-400"><X size={12} /></button>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase">Color Gradient Class</label>
                    <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 [&>option]:text-black"
                        value={formData.color}
                        onChange={e => setFormData({ ...formData, color: e.target.value })}
                    >
                        <option value="from-blue-500 to-teal-400">Blue to Teal</option>
                        <option value="from-purple-500 to-pink-400">Purple to Pink</option>
                        <option value="from-yellow-500 to-orange-400">Yellow to Orange</option>
                        <option value="from-green-500 to-emerald-400">Green to Emerald</option>
                        <option value="from-red-500 to-rose-400">Red to Rose</option>
                        <option value="from-indigo-500 to-sky-400">Indigo to Sky</option>
                    </select>
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
