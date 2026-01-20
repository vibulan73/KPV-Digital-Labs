"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
    LayoutDashboard,
    Briefcase,
    Settings,
    Users,
    Quote,
    Code2,
    FileText,
    LogOut,
    Menu,
    X,
    UserCircle,
    FolderKanban
} from "lucide-react";

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Careers", href: "/admin/careers", icon: Briefcase },
    { name: "Services", href: "/admin/services", icon: Settings },
    { name: "Testimonials", href: "/admin/testimonials", icon: Quote },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Blogs", href: "/admin/blogs", icon: FileText },
    { name: "KPV Talk", href: "/admin/kpv-talk", icon: FileText },
    { name: "Tech Stack", href: "/admin/tech-stack", icon: Code2 },
    { name: "Leaders", href: "/admin/leaders", icon: UserCircle },
    { name: "Employees", href: "/admin/employees", icon: Users },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/admin/login");
            router.refresh();
        } catch (error) {
            console.error("Logout failed", error);
            setIsLoggingOut(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 bottom-0 w-72 bg-[#0A0A0A] border-r border-white/10 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="h-20 flex items-center px-6 border-b border-white/5 gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                            <Image
                                src="/KPV.svg"
                                alt="Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-medium tracking-tight">KPV Admin</span>
                        <button
                            className="ml-auto lg:hidden text-white/50 hover:text-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-white text-black font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                        : "text-white/60 hover:text-white hover:bg-white/5 dashed-border"
                                        }`}
                                >
                                    <item.icon
                                        size={20}
                                        className={isActive ? "text-black" : "text-white/50 group-hover:text-white"}
                                    />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* User Footer */}
                    <div className="p-4 border-t border-white/5">
                        <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                                AD
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">Administrator</p>
                                <p className="text-xs text-white/40 truncate">admin@kpv.com</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            disabled={isLoggingOut}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors disabled:opacity-50"
                        >
                            {isLoggingOut ? "Logging out..." : (
                                <>
                                    <LogOut size={16} />
                                    <span>Log Out</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-72 min-h-screen flex flex-col">
                {/* Mobile Header */}
                <header className="lg:hidden h-16 border-b border-white/10 flex items-center px-4 bg-black/50 backdrop-blur-md sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 -ml-2 text-white/70 hover:text-white"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="ml-3 font-medium">Dashboard</span>
                </header>

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
