import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiDiscord } from "react-icons/si";

const faqs = [
  {
    q: "How do I add Dracon to my server?",
    a: 'Click the "Add to Discord" button on our homepage and authorize Dracon with the required permissions. The setup wizard will guide you through the initial configuration.',
  },
  {
    q: "Is Dracon free to use?",
    a: "Yes! Dracon has a generous free tier that includes all core features. Premium plans are available for advanced features, priority support, and higher rate limits.",
  },
  {
    q: "How does Antinuke work?",
    a: "Dracon monitors your server for suspicious activity in real-time. If a bot or user attempts a mass action (ban, kick, channel delete), Dracon immediately reverts the changes and removes the threat.",
  },
  {
    q: "Can I customize Dracon's responses?",
    a: "Absolutely. Dracon supports custom prefixes, embeds, and message templates throughout most modules. Premium users get access to the full Embed Builder for complete customization.",
  },
  {
    q: "What permissions does Dracon need?",
    a: "Dracon requires Administrator permissions for full functionality. You can grant individual permissions, but some features like Antinuke require elevated access to work correctly.",
  },
  {
    q: "How do I get support?",
    a: "Join our Discord support server for real-time help from the Dracon team. Premium users receive priority support with guaranteed response times.",
  },
];

function FAQ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 rounded-xl transition-all duration-200 flex items-start justify-between gap-4"
        style={{
          background: open ? "rgba(20,24,22,0.8)" : "rgba(20,24,22,0.5)",
          border: `1px solid ${open ? "rgba(0,255,102,0.25)" : "rgba(120,255,200,0.1)"}`,
        }}
        data-ocid={`support.item.${index + 1}`}
      >
        <span className="font-semibold text-sm" style={{ color: "#F2F6F3" }}>
          {faq.q}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "#00FF66",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            marginTop: 2,
          }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pt-3 pb-5 text-sm leading-relaxed"
              style={{
                color: "#A9B7AE",
                background: "rgba(14,20,17,0.4)",
                borderLeft: "2px solid rgba(0,255,102,0.3)",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Support() {
  return (
    <div
      style={{
        backgroundColor: "#0A0D0B",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00FF66" }}
          >
            Help Center
          </p>
          <h1
            className="font-black text-4xl md:text-6xl uppercase tracking-tight mb-4"
            style={{ color: "#F2F6F3" }}
          >
            Support
          </h1>
          <p style={{ color: "#A9B7AE" }}>
            Get help from our team or browse common questions.
          </p>
        </motion.div>

        {/* Discord CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(88,101,242,0.15) 0%, rgba(0,255,102,0.08) 100%)",
            border: "1px solid rgba(120,255,200,0.15)",
            boxShadow: "0 0 40px rgba(0,255,102,0.06)",
          }}
        >
          <SiDiscord
            size={40}
            className="mx-auto mb-4"
            style={{ color: "#5865F2" }}
          />
          <h2 className="font-bold text-xl mb-2" style={{ color: "#F2F6F3" }}>
            Join our Discord Server
          </h2>
          <p className="text-sm mb-6" style={{ color: "#A9B7AE" }}>
            Get real-time help from the Dracon team and community. We typically
            respond within minutes.
          </p>
          <a
            href="https://discord.gg/dracon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200"
            style={{
              background: "#5865F2",
              color: "#fff",
              boxShadow: "0 0 20px rgba(88,101,242,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(88,101,242,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 20px rgba(88,101,242,0.4)";
            }}
            data-ocid="support.primary_button"
          >
            <SiDiscord size={16} />
            Join Discord
          </a>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2
            className="font-bold text-lg uppercase tracking-wider mb-6"
            style={{ color: "#F2F6F3" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
