"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NotFound from "./NotFound";
import { useParams } from "next/navigation";

type Job = {
    id: string;
    role: string;
    skills: string[];
    title: string;
    disc: string;
    location: string;
    type: string;
    team: string;
    icon: React.ReactElement;
    color: string;
    summary: string;
    responsibilities: string[];
    qualifications: string[];
};

const JOBS: Job[] = [
    {
        id: "intern-1",
        role: "Software Engineer Intern",
        title: "Software Engineer Intern",
        location: "Remote",
        type: "Internship",
        team: "Engineering",
        skills: ["React", "Java", "Tailwind"],
        color: "from-yellow-400 to-orange-500",
        disc: "Work with mentors on real product features: implement UI components, write tests, and contribute to backend services. Great for learning full-stack engineering practices.",
        summary:
            "Work with senior engineers to ship real product features and learn full-stack engineering best practices.",
        responsibilities: [
            "Build and test UI components",
            "Assist backend tasks and debugging",
            "Collaborate with mentors on feature delivery",
        ],
        qualifications: [
            "Basic knowledge of React or Java",
            "Eager to learn full-stack development",
            "Good problem-solving skills",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                <path d="M8 20h8"></path>
                <path d="M9 8h6"></path>
            </svg>
        ),
    },

    {
        id: "frontend-1",
        role: "Frontend Engineer",
        title: "Frontend Engineer",
        location: "Remote / Hybrid (NYC)",
        type: "Full-time",
        team: "Product",
        skills: ["React", "TypeScript", "CSS", "Next.js"],
        color: "from-sky-400 to-indigo-500",
        disc: "Design and implement performant, accessible user interfaces. Collaborate with product and design to ship pixel-perfect UIs and optimize client rendering and bundle size.",
        summary:
            "Build delightful user experiences using modern React. Own features from design to production.",
        responsibilities: [
            "Ship pixel-perfect UI components",
            "Collaborate with designers & backend",
            "Write tests and document APIs",
        ],
        qualifications: [
            "3+ years React/TypeScript",
            "Familiar with Next.js or similar frameworks",
            "Strong communication skills",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 7h18"></path>
                <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                <path d="M7 3v4"></path>
                <path d="M17 3v4"></path>
            </svg>
        ),
    },

    {
        id: "backend-1",
        role: "Backend Engineer",
        title: "Backend Engineer",
        location: "Remote / NYC",
        type: "Full-time",
        team: "Infrastructure",
        skills: ["Node.js", "Postgres", "API design", "Docker"],
        color: "from-indigo-500 to-violet-500",
        disc: "Build scalable APIs and services, design data models, and optimize queries. Ownership of reliability, performance, and backend architecture decisions.",
        summary:
            "Design scalable services and take ownership of backend components, APIs, and data models.",
        responsibilities: [
            "Design & implement APIs",
            "Optimize performance and reliability",
            "Work on data modeling and infrastructure",
        ],
        qualifications: [
            "3+ years Node.js/TypeScript",
            "Database experience",
            "Interest in distributed systems",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2v6"></path>
                <path d="M6 8v6a6 6 0 0012 0V8"></path>
                <rect x="3" y="8" width="18" height="8" rx="2"></rect>
            </svg>
        ),
    },

    {
        id: "devops-1",
        role: "DevOps Engineer",
        title: "DevOps Engineer",
        location: "Onsite (London)",
        type: "Full-time",
        team: "SRE / Infrastructure",
        skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
        color: "from-emerald-400 to-teal-600",
        disc: "Manage cloud infrastructure, automate deployments, and improve observability. Drive SRE practices to reduce incidents and improve recovery time.",
        summary:
            "Lead infrastructure automation, observability improvements, and SRE practices.",
        responsibilities: [
            "Manage CI/CD and cloud infra",
            "Automate deployments",
            "Improve monitoring and incident response",
        ],
        qualifications: [
            "Experience with AWS & Kubernetes",
            "Strong Terraform & CI/CD knowledge",
            "Understanding of SRE principles",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2v4"></path>
                <path d="M12 18v4"></path>
                <path d="M4.9 4.9l2.8 2.8"></path>
                <path d="M16.3 16.3l2.8 2.8"></path>
                <path d="M2 12h4"></path>
                <path d="M18 12h4"></path>
                <path d="M4.9 19.1l2.8-2.8"></path>
                <path d="M16.3 7.7l2.8-2.8"></path>
            </svg>
        ),
    },

    {
        id: "design-1",
        role: "Product Designer",
        title: "Product Designer",
        location: "Remote",
        type: "Full-time",
        team: "Design",
        skills: ["Figma", "UX research", "Prototyping"],
        color: "from-pink-400 to-rose-500",
        disc: "Lead user research, craft interaction patterns, and produce high-fidelity prototypes. Work closely with engineers to ensure designs are feasible and consistent.",
        summary:
            "Own research, experience design, and rapid prototyping for product teams.",
        responsibilities: [
            "Create high-fidelity prototypes",
            "Conduct UX research & testing",
            "Work closely with engineering",
        ],
        qualifications: [
            "Strong product design portfolio",
            "Experience with Figma",
            "Good UX research understanding",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 21l3-3 4 4 11-11a4 4 0 00-5.657-5.657L5 16l-2 5z"></path>
            </svg>
        ),
    },

    {
        id: "data-1",
        role: "Data Scientist",
        title: "Data Scientist",
        location: "Hybrid (Berlin)",
        type: "Full-time",
        team: "Data",
        skills: ["Python", "Pandas", "ML", "SQL"],
        color: "from-cyan-400 to-sky-600",
        disc: "Analyze product and usage data, build predictive models, and work with teams to turn insights into measurable product improvements.",
        summary:
            "Analyze data, build ML models, and help drive product decisions with insights.",
        responsibilities: [
            "Analyze datasets & create reports",
            "Build predictive models",
            "Collaborate with product & engineering",
        ],
        qualifications: [
            "Experience with ML & Python",
            "Strong SQL knowledge",
            "Ability to present insights clearly",
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="8" r="3"></circle>
                <path d="M19 21v-6"></path>
                <path d="M5 21v-4"></path>
                <path d="M12 11v10"></path>
            </svg>
        ),
    },
];

export default function Page() {
    const router = useRouter();
    const params = useParams();
    const { id } = params as { id?: string };

    const job = JOBS.find((j) => j.id === id) ?? null;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cover, setCover] = useState("");
    const [resume, setResume] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        setSuccess(false);
        setSubmitting(false);
        setErrors([]);
    }, [id]);

    if (!job) {
        return <NotFound />;
    }

    function validate() {
        const errs: string[] = [];
        if (!name.trim()) errs.push("Name is required.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Valid email is required.");
        if (!resume) errs.push("Resume is required.");
        setErrors(errs);
        return errs.length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setErrors([]);

        // Simulate upload + API call
        await new Promise((r) => setTimeout(r, 1100));
        console.log("Application submitted", {
            jobId: job!.id,
            name,
            email,
            cover,
            resumeName: resume?.name ?? null,
        });
        setSubmitting(false);
        setSuccess(true);
        // clear form
        setName("");
        setEmail("");
        setCover("");
        setResume(null);
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0] ?? null;
        if (f && f.size > 5 * 1024 * 1024) {
            setErrors(["Resume must be smaller than 5 MB."]);
            e.currentTarget.value = "";
            return;
        }
        setResume(f);
        setErrors([]);
    }

    return (
        <main className="min-h-screen mt-24 py-12 px-5 flex items-start justify-center text-[#e6eef8]">
            <div className="w-full max-w-4xl rounded-2xl p-7  shadow-2xl border border-white/20" >
                <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                        <h1 className="m-0 text-xl font-semibold">{job.title}</h1>
                        <p className="mt-1 text-sm" style={{ color: "#9fb0c8" }}>
                            {job.team} • {job.type} • {job.location}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            className="px-3 py-2 rounded-lg border border-white/5 text-sm hover:-translate-y-0.5 transition"
                            onClick={() => router.push("/careers")}
                        >
                            ← Back
                        </button>

                        <button
                            className="px-3 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-[#7c5cff] to-[#5a44ff] shadow-md text-sm"
                            onClick={() => {
                                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Apply now
                        </button>
                    </div>
                </header>

                <section className="mb-6">
                    <p className="text-sm" style={{ color: "#9fb0c8", lineHeight: 1.6 }}>
                        {job.summary}
                    </p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.02)" }}>
                            <h3 className="m-0 mb-2 text-sm">Responsibilities</h3>
                            <ul className="pl-4 text-sm" style={{ color: "#9fb0c8" }}>
                                {job.responsibilities.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.02)" }}>
                            <h3 className="m-0 mb-2 text-sm">Qualifications</h3>
                            <ul className="pl-4 text-sm" style={{ color: "#9fb0c8" }}>
                                {job.qualifications.map((q) => (
                                    <li key={q}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <form id="apply-form" className="mt-4 pt-4 border-t border-dashed border-white/5" onSubmit={handleSubmit}>
                    <h2 className="text-lg font-semibold mb-3">Apply for this role</h2>

                    {errors.length > 0 && (
                        <div className="mb-3 rounded-md p-3 text-sm" role="alert" style={{ background: "linear-gradient(90deg, rgba(255,120,120,0.08), rgba(255,110,110,0.04))", border: "1px solid rgba(255,80,80,0.08)", color: "#ffd9d9" }}>
                            <ul className="list-disc pl-5">
                                {errors.map((err) => (
                                    <li key={err}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {success && (
                        <div className="mb-3 rounded-md p-3 text-sm" style={{ background: "linear-gradient(90deg, rgba(23,229,167,0.06), rgba(23,229,167,0.03))", border: "1px solid rgba(23,229,167,0.06)", color: "#bff7e6" }}>
                            Application submitted — we'll be in touch.
                        </div>
                    )}

                    <label className="block mb-3">
                        <span className="block text-sm" style={{ color: "#9fb0c8" }}>
                            Full name
                        </span>
                        <input
                            className="mt-2 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/5 outline-none focus:shadow-[0_6px_20px_rgba(124,92,255,0.12)] transition"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jane Doe"
                        />
                    </label>

                    <label className="block mb-3">
                        <span className="block text-sm" style={{ color: "#9fb0c8" }}>
                            Email
                        </span>
                        <input
                            className="mt-2 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/5 outline-none focus:shadow-[0_6px_20px_rgba(124,92,255,0.12)] transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                        />
                    </label>

                    <label className="block mb-3">
                        <span className="block text-sm" style={{ color: "#9fb0c8" }}>
                            Cover letter (short)
                        </span>
                        <textarea
                            className="mt-2 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/5 outline-none focus:shadow-[0_6px_20px_rgba(124,92,255,0.12)] transition min-h-[100px] resize-y"
                            value={cover}
                            onChange={(e) => setCover(e.target.value)}
                            placeholder="Why you're a fit..."
                        />
                    </label>

                    <label className="block mb-3">
                        <span className="block text-sm" style={{ color: "#9fb0c8" }}>
                            Resume (PDF)
                        </span>
                        <input className="mt-2 w-full" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                        {resume && <div className="mt-2 text-sm" style={{ color: "#9fb0c8" }}>Selected: {resume.name}</div>}
                    </label>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 items-center">
                        <button
                            className="px-4 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-[#7c5cff] to-[#5a44ff] shadow-md disabled:opacity-60"
                            type="submit"
                            disabled={submitting}
                        >
                            {submitting ? "Submitting…" : "Submit application"}
                        </button>

                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg border border-white/5 text-sm hover:-translate-y-0.5 transition"
                            onClick={() => {
                                setName("");
                                setEmail("");
                                setCover("");
                                setResume(null);
                                setErrors([]);
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
