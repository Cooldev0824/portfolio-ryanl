"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/content/profile";
import { emailHref } from "@/lib/links";
import { LineIcon } from "@/components/ui/Icons";
import { Container } from "./Container";

const sectionIds = navItems.map((item) => item.href.split("#")[1]);

/** Tracks which home-page section is currently under the header. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      // At the very bottom only Contact can be reached, but shorter pages also bottom out on
      // earlier sections, so Contact wins there only when it was the link followed.
      if (atBottom && location.hash === "#contact") return setActive("contact");
      // The lowest section whose top has passed just below the header.
      // Nav order differs from page order, so compare positions rather than list order.
      let current: string | null = null;
      let best = -Infinity;
      for (const id of sectionIds) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= (atBottom ? innerHeight * 0.4 : 120) && top > best) [current, best] = [id, top];
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return enabled ? active : null;
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(pathname === "/");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.matchMedia("(min-width: 1024px)").matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
      button?.focus();
    };
  }, [open]);

  const isActive = (href: string) => active !== null && href.endsWith(`#${active}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          scrolled || open ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-border/60"
        }`}
      >
        <Container wide className={`relative flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? "h-16" : "h-[73px]"}`}>
          <Link href="/" className="flex items-center gap-[25px] rounded-md" onClick={() => setOpen(false)}>
            <span aria-hidden className="font-serif text-[2.6rem] leading-none tracking-[-0.12em] text-text sm:text-[3rem] xl:text-[3.7rem]">
              {profile.initials}
            </span>
            <span aria-hidden className="hidden h-[47px] w-px bg-text/45 sm:block" />
            <span className="sr-only leading-tight sm:not-sr-only">
              <span className="block text-[1.4rem] leading-[1.05] font-medium text-text xl:text-[1.8rem]">{profile.name}</span>
              <span className="block text-[0.9rem] text-[#d7dce6] xl:text-[1.06rem]">{profile.title}</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block xl:absolute xl:left-[calc(50%-234px)]">
            <ul className="flex items-center gap-1 xl:gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "location" : undefined}
                    className={`relative block px-3.5 py-2 text-[0.98rem] font-medium transition-colors hover:text-human ${
                      isActive(item.href) ? "text-human" : "text-text"
                    }`}
                  >
                    {item.label}
                    {/* Glowing underline: gold rule fading at both ends with a bright flare in the middle. */}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-[4px] h-px bg-[linear-gradient(90deg,transparent,#f2bd5c_25%,#ffe2a0_50%,#f2bd5c_75%,transparent)] transition-opacity duration-300 ${
                        isActive(item.href) ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="nav-flare absolute top-1/2 left-1/2 h-1.5 w-10 -translate-1/2 rounded-full bg-[#ffc95e] blur-[4px]" />
                      <span className="absolute top-1/2 left-1/2 h-[3px] w-4 -translate-1/2 rounded-full bg-[#fff3d1] blur-[1px]" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={emailHref}
            className="hidden h-[46px] items-center px-4 xl:w-[180px] xl:px-0 justify-center gap-3.5 rounded-[10px] border-[1.5px] border-human/90 text-[1.06rem] font-medium text-text transition-colors hover:bg-human-soft lg:inline-flex"
          >
            <LineIcon name="mail" className="h-[22px] w-[26px] text-human" strokeWidth={1.8} />
            Get in Touch
          </a>

          <button
            ref={buttonRef}
            type="button"
            className="-mr-2 grid size-11 place-items-center rounded-md text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would make it the containing block for this fixed panel. */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-border bg-bg lg:hidden ${scrolled ? "top-16" : "top-20"}`}
      >
        <Container>
          <nav aria-label="Mobile">
            <ul className="flex flex-col py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "location" : undefined}
                    className={`block border-b border-border py-4 font-serif text-3xl ${isActive(item.href) ? "text-human" : "text-text"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={emailHref} onClick={() => setOpen(false)} className="btn-gold mb-8 inline-flex h-12 items-center gap-2.5 rounded-lg px-6 font-medium">
              <LineIcon name="mail" className="size-5" strokeWidth={1.8} />
              Get in Touch
            </a>
          </nav>
        </Container>
      </div>
    </>
  );
}
