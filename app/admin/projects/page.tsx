"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusCircle, Edit, Trash2, Loader2 } from "lucide-react";
import type { Project } from "@/lib/types";

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        setDeleting(id);
        try {
            const res = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setProjects(projects.filter((p) => p.id !== id));
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            alert("Error deleting project");
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="animate-spin text-white" size={48} />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-light text-white">Client Projects</h1>
                <Link
                    href="/admin/projects/new"
                    className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-medium flex gap-2"
                >
                    <PlusCircle size={20} /> Add Project
                </Link>
            </div>

            <div className="grid gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex gap-6"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-32 h-32 object-cover rounded-xl"
                            />
                        )}
                        <div className="flex-1">
                            <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                            <p className="text-white/60 text-sm mb-4">{project.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                href={`/admin/projects/${project.id}/edit`}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
                            >
                                <Edit size={18} />
                            </Link>
                            <button
                                onClick={() => handleDelete(project.id)}
                                disabled={deleting === project.id}
                                className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/60 hover:text-red-500 disabled:opacity-50"
                            >
                                {deleting === project.id ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <Trash2 size={18} />
                                )}
                            </button>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className="text-center py-12 text-white/40">
                        No projects yet. Add your first project!
                    </div>
                )}
            </div>
        </div>
    );
}
