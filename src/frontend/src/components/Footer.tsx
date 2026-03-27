import { Link } from "@tanstack/react-router";
import { SiDiscord, SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "dracon.bot";

  return (
    <footer
      className="mt-20"
      style={{
        background: "rgba(14, 20, 17, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(120,255,200,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-3 h-3 rounded-full animate-pulse-glow"
                style={{ backgroundColor: "#00FF66", flexShrink: 0 }}
              />
              <span
                className="font-black text-lg tracking-widest"
                style={{ color: "#F2F6F3", letterSpacing: "0.15em" }}
              >
                DRACON
              </span>
            </div>
            <p className="text-sm" style={{ color: "#A9B7AE" }}>
              The ultimate Discord bot for complete server control.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://discord.gg/dracon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#A9B7AE", background: "rgba(30,36,33,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00FF66";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
                }}
              >
                <SiDiscord size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#A9B7AE", background: "rgba(30,36,33,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00FF66";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
                }}
              >
                <SiGithub size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "#A9B7AE", background: "rgba(30,36,33,0.6)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00FF66";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
                }}
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00FF66" }}
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
                    style={{ color: "#A9B7AE" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F2F6F3";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
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
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00FF66" }}
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
                      style={{ color: "#A9B7AE" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#F2F6F3";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#A9B7AE";
                      }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.to!}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#A9B7AE" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#F2F6F3";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#A9B7AE";
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
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00FF66" }}
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
                    style={{ color: "#A9B7AE" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F2F6F3";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
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
          style={{ borderTop: "1px solid rgba(120,255,200,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#A9B7AE" }}>
            © {year} DRACON. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#A9B7AE" }}>
            Built with <span style={{ color: "#00FF66" }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#A9B7AE" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00FF66";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#A9B7AE";
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
