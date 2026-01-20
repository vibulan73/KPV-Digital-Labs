"use client";
import type React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const socialLinks = [
  { title: "Facebook", href: "#", icon: FacebookIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Youtube", href: "#", icon: YoutubeIcon },
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
];

const footerLinks: FooterSection[] = [
  {
    label: "Get To Know",
    links: [
      { title: "Home", href: "/" },
      { title: "How We Work", href: "/how-we-work" },
      { title: "Services", href: "/services" },
      { title: "Resources", href: "/resources" },
      { title: "Careers", href: "/careers" },
      { title: "Privacy Policy", href: "/#" },
      { title: "Terms of Service", href: "/#" },
      { title: "Admin", href: "/admin" },
    ],
  },
  {
    label: "Our Services",
    links: [
      {
        title: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      { title: "DevOps as a Service", href: "/services/devops" },
      {
        title: "Enterprise Software Development",
        href: "/services/enterprise-software-development",
      },
      {
        title: "Managed Service Augmentation",
        href: "/services/managed-service-agumentation",
      },
      { title: "MVP Factory", href: "/services/mvp-factory" },
      { title: "QA as a Service", href: "/services/qa" },
      { title: "Search Engine Optimisation", href: "/services/seo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full xl:grid-cols-3 ">
        <AnimatedContainer className="space-y-4">
          <Image
            src="/KPV.svg"
            alt="KPV Logo"
            width={64}
            height={64}
            className="size-16"
          />
          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p>
              © {new Date().getFullYear()} KPV Digital Labs. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <AnimatedContainer key={index} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <Link href={link.href}>
                    <link.icon className="me-1 size-6" />
                  </Link>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </AnimatedContainer>

        <div className="mt-4 md:mt-10 grid grid-cols-2 gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} KPV Digital Labs. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs">
          Web Development by KPV Digiatl Labs
        </p>
      </div>

      <div className="hidden md:block mt-8 pt-6 border-t border-foreground/10 w-full">
        <p className="text-muted-foreground text-xs text-center">
          Web Development by KPV Digiatl Labs
        </p>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
