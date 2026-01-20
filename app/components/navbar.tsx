"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "How We Work", href: "#",
    submenu: [
      {
        name: "Project based",
        href: "/how-we-work/project-based",
      },
      { name: "Staff Agumentation", href: "/how-we-work/staff-agumentation" },

    ],
  },

  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        name: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      { name: "DevOps as a Service", href: "/services/devops" },
      {
        name: "Enterprise Software Development",
        href: "/services/enterprise-software-development",
      },
      {
        name: "Managed Service Augmentation",
        href: "/services/managed-service-augmentation",
      },
      { name: "MVP Factory", href: "/services/mvp-factory" },
      { name: "QA as a Service", href: "/services/qa" },
      { name: "Search Engine Optimization", href: "/services/seo" },
    ],
  },
  { name: "Careers", href: "/careers" },

  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Blogs", href: "/resources/blogs" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "KPV Talk", href: "/resources/kpv-talk" },

    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<string | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
          if (
            currentScrollY > lastScrollY.current &&
            currentScrollY - lastScrollY.current > 5
          ) {
            setIsVisible(false);
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true });

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const rect = element.getBoundingClientRect();
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementAbsoluteTop = rect.top + currentScrollY;
      const navbarHeight = 100;
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-20 md:-translate-y-24 opacity-0"
          } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        style={{
          transition: hasLoaded
            ? "all 0.5s ease-out"
            : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Main Navigation */}
        <div className="w-screen max-w-sm md:max-w-5xl mx-auto">
          <div className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 md:px-6 md:py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <Image
                    src="/KPV.svg"
                    alt="KPV"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium cursor-pointer flex items-center gap-2"
                      >
                        {item.name}
                        {item.submenu && (
                          <ChevronDown
                            size={16}
                            className="group-hover:rotate-180 transition-transform"
                          />
                        )}
                      </Link>
                    ) : (
                      <button

                        className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium cursor-pointer flex items-center gap-2"
                      >
                        {item.name}
                        {item.submenu && (
                          <ChevronDown
                            size={16}
                            className="group-hover:rotate-180 transition-transform"
                          />
                        )}
                      </button>
                    )}
                    {item.submenu && (
                      <div className="absolute px-2 mt-5 max-w-fit bg-black/50 backdrop-blur-5xl border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 rounded-lg whitespace-nowrap  text-white hover:text-black/90 hover:bg-white/70 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <Link href={"/contact"}>
                  <button
                    className="relative bg-white hover:bg-gray-50 text-black font-medium px-6 py-2 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"

                  >
                    <span className="mr-2">Let's Talk</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>

              {/* Admin Link (Desktop) */}
              <Link
                href="/admin/login"
                className="hidden md:flex p-2 text-white/5 hover:text-white/20 transition-colors"
                title="Admin Access"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${isOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                      }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-75"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden relative">
          {/* Backdrop overlay */}
          <div
            className={`fixed inset-0 backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsOpen(false)}
            style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
          />

          {/* Menu container */}
          <div
            className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
              } `}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (!item.submenu) {
                          setIsOpen(false);
                          window.location.href = item.href;
                        } else {
                          if (openSubmenu === item.name) {
                            setIsOpen(false);
                            window.location.href = item.href;
                          } else {
                            setOpenSubmenu(item.name);
                          }
                        }
                      }}
                      className={`w-full text-white/80 hover:text-white hover:bg-white/10 rounded-lg 
         px-3 py-1 text-left transition-all duration-300 font-medium cursor-pointer 
      transform hover:scale-[1.02] hover:translate-x-1 
      ${isOpen ? "animate-mobile-menu-item" : ""}`}
                      style={{
                        animationDelay: isOpen
                          ? `${index * 80 + 100}ms`
                          : "0ms",
                      }}
                    >
                      <div className="flex items-center justify-between py-3">
                        <span>{item.name}</span>
                        {item.submenu && (
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${openSubmenu === item.name ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </div>
                    </button>

                    {/* Submenu dropdown */}
                    {item.submenu && openSubmenu === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-white/80 hover:text-white hover:bg-white/10 
            rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer"
                            style={{
                              animationDelay: isOpen
                                ? `${(index + 1) * 80 + 100 + subindex * 40}ms`
                                : "0ms",
                            }}
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Link href={"/contact"}>
                  <button
                    className={`relative bg-white hover:bg-gray-50 text-black font-medium px-6 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group transform ${isOpen ? "animate-mobile-menu-item" : ""
                      }`}
                    style={{
                      animationDelay: isOpen
                        ? `${navigation.length * 80 + 150}ms`
                        : "0ms",
                    }}
                    onClick={() => scrollToSection("#contact")}
                  >
                    <span className="mr-2">Let's Talk</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
