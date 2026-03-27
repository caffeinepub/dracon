import { motion } from "motion/react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By adding Dracon to your Discord server or using any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must remove Dracon from your server immediately.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 13 years of age and comply with Discord's Terms of Service to use Dracon. By using our service, you represent and warrant that you meet these requirements.",
  },
  {
    title: "3. Permitted Use",
    content: `You may use Dracon for:

• Managing and moderating your Discord server.
• Automating welcome messages, role assignments, and moderation actions.
• Protecting your community with Antinuke and verification features.

You may NOT use Dracon to:

• Violate Discord's Terms of Service or Community Guidelines.
• Harass, abuse, or harm other users.
• Distribute spam, malware, or illegal content.
• Circumvent security measures or attempt unauthorized access.`,
  },
  {
    title: "4. Premium Services",
    content:
      "Premium subscriptions are billed on a monthly or annual basis. All payments are non-refundable unless required by applicable law. We reserve the right to modify premium pricing with 30 days' notice. Cancellation takes effect at the end of the current billing period.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      'Dracon is provided "as is" without warranty of any kind. We are not liable for any damages, data loss, or disruption resulting from use of our service. Our maximum liability shall not exceed the amount you paid for premium services in the previous 3 months.',
  },
  {
    title: "6. Service Availability",
    content:
      "We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance. We reserve the right to suspend or terminate service at any time for violation of these terms.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content, branding, and code associated with Dracon is our intellectual property. You may not reproduce, distribute, or create derivative works without explicit written permission.",
  },
  {
    title: "8. Governing Law",
    content:
      "These Terms are governed by applicable law. Any disputes shall be resolved through binding arbitration or in a court of competent jurisdiction.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "We reserve the right to update these terms at any time. Significant changes will be communicated via our Discord support server. Continued use of Dracon following changes constitutes acceptance.",
  },
];

export default function Terms() {
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
            Terms of Service
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
            Please read these Terms of Service carefully. By using Dracon, you
            agree to be legally bound by these terms.
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
