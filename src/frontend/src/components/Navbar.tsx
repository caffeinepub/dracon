import { Link, useRouter } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import type { Transition } from "motion/react";
import { AnimatePresence, type Variants, motion } from "motion/react";

const EASE: Transition["ease"] = [0.16, 1, 0.3, 1] as const;
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Commands", to: "/commands" },
  { label: "Support", to: "/support" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  {
    label: "Invite",
    to: "https://discord.com/oauth2/authorize",
    external: true,
  },
];

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: EASE,
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.2 },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: EASE },
  },
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentPath = router.state.location.pathname;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{ transition: "all 0.3s ease" }}
    >
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
        className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl glass-nav"
        style={{
          boxShadow: scrolled ? "0 0 30px rgba(0,255,102,0.08)" : "none",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <span
            className="w-3 h-3 rounded-full animate-pulse-glow"
            style={{ backgroundColor: "#00FF66", flexShrink: 0 }}
          />
          <span
            className="font-black text-xl tracking-widest"
            style={{
              color: "#F2F6F3",
              letterSpacing: "0.15em",
              transition: "color 0.2s ease",
            }}
          >
            DRACON
          </span>
        </Link>

        {/* Desktop center nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Resources dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium"
              style={{
                color: dropdownOpen ? "#00FF66" : "#A9B7AE",
                transition: "color 0.2s ease",
              }}
              data-ocid="nav.dropdown_menu"
            >
              Resources
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ display: "flex" }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="absolute top-full left-1/2 mt-3 w-52 rounded-xl overflow-hidden"
                  style={{
                    transform: "translateX(-50%)",
                    background: "rgba(14, 20, 17, 0.97)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(120,255,200,0.15)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.55), 0 0 20px rgba(0,255,102,0.08)",
                  }}
                >
                  <div className="p-2">
                    {navLinks.map((link, i) =>
                      link.external ? (
                        <motion.a
                          key={link.label}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: i * 0.04,
                            ease: EASE,
                          }}
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium"
                          style={{
                            color: "#A9B7AE",
                            transition: "color 0.2s ease, background 0.2s ease",
                          }}
                          whileHover={{
                            x: 3,
                            transition: { duration: 0.15 },
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "#00FF66";
                            (e.currentTarget as HTMLElement).style.background =
                              "rgba(0,255,102,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "#A9B7AE";
                            (e.currentTarget as HTMLElement).style.background =
                              "transparent";
                          }}
                        >
                          {link.label}
                        </motion.a>
                      ) : (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: i * 0.04,
                            ease: EASE,
                          }}
                          whileHover={{
                            x: 3,
                            transition: { duration: 0.15 },
                          }}
                        >
                          <Link
                            to={link.to}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium"
                            style={{
                              color:
                                currentPath === link.to ? "#00FF66" : "#A9B7AE",
                              transition:
                                "color 0.2s ease, background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "#00FF66";
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = "rgba(0,255,102,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                currentPath === link.to ? "#00FF66" : "#A9B7AE";
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = "transparent";
                            }}
                            data-ocid="nav.link"
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/partners"
            className="text-sm font-medium"
            style={{
              color: currentPath === "/partners" ? "#00FF66" : "#A9B7AE",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#F2F6F3";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                currentPath === "/partners" ? "#00FF66" : "#A9B7AE";
            }}
            data-ocid="nav.link"
          >
            Partners
          </Link>

          <Link
            to="/premium"
            className="text-sm font-semibold px-3 py-1 rounded-full"
            style={{
              color: "#00FF66",
              border: "1px solid rgba(0,255,102,0.3)",
              background:
                currentPath === "/premium"
                  ? "rgba(0,255,102,0.1)"
                  : "transparent",
              transition:
                "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(0,255,102,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,255,102,0.6)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 12px rgba(0,255,102,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                currentPath === "/premium"
                  ? "rgba(0,255,102,0.1)"
                  : "transparent";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,255,102,0.3)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
            data-ocid="nav.link"
          >
            Premium
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://discord.com/oauth2/authorize"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{
              background: "#00FF66",
              color: "#0A0D0B",
              boxShadow:
                "0 0 20px rgba(0,255,102,0.4), 0 0 40px rgba(0,255,102,0.2)",
              transition: "box-shadow 0.3s ease",
            }}
            whileHover={{
              y: -2,
              boxShadow:
                "0 0 30px rgba(0,255,102,0.65), 0 0 60px rgba(0,255,102,0.3)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
            whileTap={{ scale: 0.96 }}
            data-ocid="nav.primary_button"
          >
            <Zap size={14} fill="currentColor" />
            Invite Bot
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          type="button"
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#A9B7AE" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          data-ocid="nav.toggle"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block" }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block" }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl p-4"
            style={{
              background: "rgba(14, 20, 17, 0.98)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(120,255,200,0.12)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <motion.a
                    key={link.label}
                    variants={mobileItemVariants}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium"
                    style={{
                      color: "#A9B7AE",
                      transition: "color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#00FF66";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(0,255,102,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div key={link.label} variants={mobileItemVariants}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium"
                      style={{
                        color: currentPath === link.to ? "#00FF66" : "#A9B7AE",
                        transition: "color 0.2s ease, background 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(0,255,102,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }}
                      data-ocid="nav.link"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}
              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/partners"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    color: "#A9B7AE",
                    transition: "color 0.2s ease",
                  }}
                  data-ocid="nav.link"
                >
                  Partners
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/premium"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{ color: "#00FF66" }}
                  data-ocid="nav.link"
                >
                  Premium
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <a
                  href="https://discord.com/oauth2/authorize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold"
                  style={{
                    background: "#00FF66",
                    color: "#0A0D0B",
                    boxShadow: "0 0 20px rgba(0,255,102,0.4)",
                  }}
                  data-ocid="nav.primary_button"
                >
                  <Zap size={14} fill="currentColor" />
                  Invite Bot
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
