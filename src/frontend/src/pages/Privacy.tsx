import { motion } from "motion/react";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "When you add Dracon to your Discord server, we collect the following information:\n\nServer ID and configuration: Required to store your bot settings and preferences.\nUser IDs: Used for moderation logs, warnings, and feature functionality.\nMessage metadata: We do not read or store message content. We only log message IDs when required for moderation.\nAudit log data: Used to power Antinuke protection and moderation features.\n\nWe do not collect personal information such as email addresses, IP addresses, or real names unless voluntarily provided in a support context.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "The data we collect is used exclusively to:\n\nProvide and improve Dracon's features and functionality.\nStore server configuration and preferences.\nEnable moderation tools, logs, and protection systems.\nProvide customer support when requested.\nImprove service reliability and performance.\n\nWe do not sell, trade, or rent your data to third parties.",
  },
  {
    title: "3. Data Storage & Security",
    content:
      "All data is stored securely on industry-standard servers with encryption at rest and in transit. We use access controls to ensure only authorized personnel can access stored data.\n\nServer configuration data is retained as long as Dracon remains in your server. Upon removing the bot, you may request data deletion by contacting us through our support server.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "Dracon operates exclusively through the Discord API. We comply with Discord's Terms of Service and Developer Policy. We do not integrate with other third-party data processors.",
  },
  {
    title: "5. Your Rights",
    content:
      "You have the right to:\n\nRequest a copy of all data we hold about your server.\nRequest deletion of your server's data at any time.\nOpt out of non-essential data collection.\n\nTo exercise these rights, contact us through the official Dracon support server.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. Significant changes will be announced through our Discord support server. Continued use of Dracon after policy changes constitutes acceptance of the updated terms.",
  },
  {
    title: "7. Contact",
    content:
      "For privacy-related inquiries, please contact us via our Discord support server at discord.gg/dracon. We aim to respond to all inquiries within 48 hours.",
  },
];

export default function Privacy() {
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
            Legal
          </p>
          <h1
            className="font-black text-4xl md:text-6xl uppercase tracking-tight mb-4"
            style={{ color: "#F2F6F3" }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "#A9B7AE" }}>Last updated: March 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-4 rounded-xl mb-10"
          style={{
            background: "rgba(0,255,102,0.06)",
            border: "1px solid rgba(0,255,102,0.2)",
          }}
        >
          <p className="text-sm" style={{ color: "#A9B7AE" }}>
            Your privacy is important to us. This policy explains how Dracon
            collects, uses, and protects your data when you use our service.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h2
                className="font-bold text-lg mb-3"
                style={{ color: "#00FF66" }}
              >
                {section.title}
              </h2>
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "#A9B7AE" }}
              >
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
