import { Link } from "@tanstack/react-router";
import { SiDiscord, SiGithub, SiX } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "dracon.bot";

  return (
    <footer
      className="mt-20"
      style={{
        background: "rgba(22, 22, 22, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-3 h-3 rounded-full animate-pulse-glow"
                style={{ backgroundColor: theme.accent, flexShrink: 0 }}
              />
              <span className="font-black text-lg">Dracon</span>
            </div>
            <p className="text-sm" style={{ color: "#9a9a9a" }}>
              The ultimate Discord bot for complete server control.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://discord.gg/dracon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#9a9a9a", background: "rgba(40,40,40,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
                }}
              >
                <SiDiscord size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#9a9a9a", background: "rgba(40,40,40,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
                }}
              >
                <SiGithub size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#9a9a9a", background: "rgba(40,40,40,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
                }}
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: theme.accent }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Commands", to: "/commands" },
                { label: "Support", to: "/support" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9a9a9a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
                    }}
                    data-ocid="nav.link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: theme.accent }}
            >
              Community
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Discord Server", href: "https://discord.gg/dracon" },
                { label: "Partners", to: "/partners" },
                { label: "Premium", to: "/premium" },
              ].map((l) => (
                <li key={l.label}>
                  {"href" in l ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#9a9a9a" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#F0F0F0";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#9a9a9a";
                      }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.to!}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#9a9a9a" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#F0F0F0";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#9a9a9a";
                      }}
                      data-ocid="nav.link"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: theme.accent }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9a9a9a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
                    }}
                    data-ocid="nav.link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#9a9a9a" }}>
            © {year} Dracon. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#9a9a9a" }}>
            Built with <span style={{ color: theme.accent }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#9a9a9a" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = theme.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#9a9a9a";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
