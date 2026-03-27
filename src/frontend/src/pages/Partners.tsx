import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

const partners = [
  {
    name: "Nexus Guard",
    description:
      "Premium Discord security and verification solutions trusted by 10,000+ servers worldwide.",
    category: "Security",
    website: "https://nexusguard.example.com",
    color: "#4ECDC4",
  },
  {
    name: "ServerBoost Pro",
    description:
      "The leading Discord server growth platform with advanced analytics and engagement tools.",
    category: "Growth",
    website: "https://serverbost.example.com",
    color: "#FF6B6B",
  },
  {
    name: "BotForge Studio",
    description:
      "Custom Discord bot development and hosting services with 24/7 uptime guarantees.",
    category: "Development",
    website: "https://botforge.example.com",
    color: "#FFE66D",
  },
  {
    name: "ModPanel",
    description:
      "Web-based Discord moderation dashboard with real-time alerts and team management.",
    category: "Moderation",
    website: "https://modpanel.example.com",
    color: "#C7B8EA",
  },
  {
    name: "CommunityOS",
    description:
      "All-in-one community management platform integrating Discord with web portals.",
    category: "Community",
    website: "https://communityos.example.com",
    color: "#A8EDEA",
  },
  {
    name: "VaultBot",
    description:
      "Advanced backup and restore solution for Discord servers of all sizes.",
    category: "Utility",
    website: "https://vaultbot.example.com",
    color: "#9B8EF0",
  },
];

export default function Partners() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: "#191919",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: theme.accent }}
          >
            Ecosystem
          </p>
          <h1
            className="font-black text-4xl md:text-6xl tracking-tight mb-4"
            style={{ color: "#F0F0F0" }}
          >
            Partners
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: "#9a9a9a" }}>
            Dracon works alongside the best tools in the Discord ecosystem. Meet
            our trusted partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl group"
              style={{
                background: "rgba(34,34,34,0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 40px rgba(0,0,0,0.4), 0 0 20px ${partner.color}22`;
                (e.currentTarget as HTMLElement).style.borderColor =
                  `${partner.color}44`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.3)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
              }}
              data-ocid={`partners.item.${i + 1}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                  style={{
                    background: `${partner.color}18`,
                    border: `1px solid ${partner.color}44`,
                    color: partner.color,
                  }}
                >
                  {partner.name[0]}
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${partner.color}18`,
                    color: partner.color,
                    border: `1px solid ${partner.color}33`,
                  }}
                >
                  {partner.category}
                </span>
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "#F0F0F0" }}
              >
                {partner.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#9a9a9a" }}
              >
                {partner.description}
              </p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                style={{ color: partner.color }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                Visit Website <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Become a Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-2xl"
          style={{
            background: "rgba(34,34,34,0.5)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: `0 0 60px rgba(${theme.rgb},0.05)`,
          }}
        >
          <h2
            className="font-black text-2xl md:text-3xl tracking-tight mb-3"
            style={{ color: "#F0F0F0" }}
          >
            Become a Partner
          </h2>
          <p
            className="text-sm max-w-md mx-auto mb-6"
            style={{ color: "#9a9a9a" }}
          >
            Are you building something great for the Discord community? We'd
            love to partner with you.
          </p>
          <a
            href="https://discord.gg/dracon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200"
            style={{
              background: theme.accent,
              color: "#111111",
              boxShadow: `0 0 20px rgba(${theme.rgb},0.4)`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                `0 0 30px rgba(${theme.rgb},0.6)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                `0 0 20px rgba(${theme.rgb},0.4)`;
            }}
            data-ocid="partners.primary_button"
          >
            Contact Us on Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}
