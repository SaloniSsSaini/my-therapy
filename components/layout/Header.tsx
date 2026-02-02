"use client";

import { useState } from "react";
import Container from "./Container";
import { navigation } from "@/content/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderColor">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:fixed
          focus:top-2
          focus:left-2
          z-50
          bg-white
          px-4
          py-2
          border
          border-borderColor
          text-sm
        "
      >
        Skip to main content
      </a>

      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-serif font-medium text-textPrimary"
          >
            Dr. Maya Reynolds
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex gap-8 text-sm"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative
                  text-textPrimary
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[1px]
                  after:w-0
                  after:bg-textPrimary
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm border border-borderColor px-3 py-2 rounded-full"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-borderColor bg-white">
          <Container>
            <nav className="flex flex-col gap-6 py-6 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-textPrimary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
