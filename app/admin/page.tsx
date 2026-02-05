import { readData } from "@/lib/dataStore";
import { Briefcase, Settings, Users, ArrowUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Career, Service, Employee } from "@/lib/types";

// Helper component for stat cards
function StatCard({ title, value, change, label, icon: Icon, color }: any) {
    return (
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400`}>
                    <Icon size={24} />
                </div>
                {change && (
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
                        <ArrowUp size={12} />
                        {change}
                    </div>
                )}
            </div>
            <h3 className="text-3xl font-light text-white mb-1">{value}</h3>
            <p className="text-sm text-white/40">{title}</p>
        </div>
    );
}

export default async function AdminDashboard() {
    // Load stats data
    const careers = await readData<Career>("careers");
    const services = await readData<Service>("services");
    const employees = await readData<Employee>("employees");
    const testimonials = await readData<any>("testimonials");

    const recentCareers = careers.slice(0, 3);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-light text-white mb-2">Welcome back, Admin</h1>
                <p className="text-white/40">Here's what's happening in your organization today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Active Openings"
                    value={careers.length}
                    icon={Briefcase}
                    color="blue"
                    change="+2 this week"
                />
                <StatCard
                    title="Total Services"
                    value={services.length}
                    icon={Settings}
                    color="purple"
                />
                <StatCard
                    title="Team Members"
                    value={employees.length}
                    icon={Users}
                    color="green"
                    change="+1 this month"
                />
                <StatCard
                    title="Testimonials"
                    value={testimonials.length}
                    icon={Users}
                    color="orange"
                />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                    <h2 className="text-lg font-medium text-white mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/careers/new" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-left group">
                            <div className="mb-3 text-white/70 group-hover:text-white transition-colors">
                                <Briefcase size={20} />
                            </div>
                            <p className="text-sm font-medium text-white">Post Job</p>
                            <p className="text-xs text-white/40">Add a new career opening</p>
                        </Link>
                        <Link href="/admin/employees/new" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-left group">
                            <div className="mb-3 text-white/70 group-hover:text-white transition-colors">
                                <Users size={20} />
                            </div>
                            <p className="text-sm font-medium text-white">Add Member</p>
                            <p className="text-xs text-white/40">Welcome a new employee</p>
                        </Link>
                        <Link href="/admin/services" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-left group">
                            <div className="mb-3 text-white/70 group-hover:text-white transition-colors">
                                <Settings size={20} />
                            </div>
                            <p className="text-sm font-medium text-white">Manage Services</p>
                            <p className="text-xs text-white/40">Update service offerings</p>
                        </Link>
                    </div>
                </div>

                {/* Recent Careers */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium text-white">Recent Openings</h2>
                        <Link href="/admin/careers" className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition-colors">
                            View all <ArrowRight size={12} />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {recentCareers.length > 0 ? (
                            recentCareers.map((career) => (
                                <div key={career.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors group">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${career.color} flex items-center justify-center text-white shadow-lg`}>
                                        <Briefcase size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-medium text-white truncate">{career.role}</h4>
                                        <p className="text-xs text-white/40 truncate">{career.location} • {career.type}</p>
                                    </div>
                                    <Link href={`/admin/careers/${career.id}/edit`} className="p-2 text-white/20 group-hover:text-white transition-colors">
                                        <Settings size={16} />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-white/30 text-center py-8">No active job openings.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
