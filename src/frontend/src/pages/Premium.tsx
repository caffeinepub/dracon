import { Link } from "@tanstack/react-router";
import { Building, Check, Crown, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for small servers getting started.",
    color: "#9a9a9a",
    colorRgb: "154,154,154",
    recommended: false,
    features: [
      "All core modules (Moderation, Welcome, Tickets)",
      "Antinuke basic protection",
      "Verification system",
      "Up to 5 reaction role panels",
      "Standard support via Discord",
      "50+ slash commands",
    ],
    cta: "Get Started Free",
    ctaHref: "https://discord.com/oauth2/authorize",
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$4.99",
    period: "per month",
    description: "For growing servers that need advanced tools.",
    color: null, // uses theme accent
    colorRgb: null,
    recommended: true,
    features: [
      "Everything in Free",
      "Advanced Antinuke with auto-recovery",
      "Unlimited reaction role panels",
      "Full Embed Builder access",
      "Custom welcome card designs",
      "Priority support (< 2hr response)",
      "Advanced analytics dashboard",
      "Auto-moderation filters",
    ],
    cta: "Start Premium",
    ctaHref: "https://discord.com/oauth2/authorize",
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large communities.",
    color: "#C7B8EA",
    colorRgb: "199,184,234",
    recommended: false,
    features: [
      "Everything in Premium",
      "Dedicated bot instance",
      "Custom command development",
      "SLA with 99.99% uptime guarantee",
      "Dedicated account manager",
      "White-label option",
      "API access for integrations",
    ],
    cta: "Contact Sales",
    ctaHref: "https://discord.gg/dracon",
  },
];

export default function Premium() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: "#191919",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 20%, rgba(${theme.rgb},0.06) 0%, transparent 70%)`,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-12">
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
            Pricing
          </p>
          <h1
            className="font-black text-4xl md:text-6xl tracking-tight mb-4"
            style={{ color: "#F0F0F0" }}
          >
            Premium Plans
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: "#9a9a9a" }}>
            Unlock the full power of Dracon. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const accentColor = plan.color ?? theme.accent;
            const accentRgb = plan.colorRgb ?? theme.rgb;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl flex flex-col"
                style={{
                  background: plan.recommended
                    ? "rgba(30,30,30,0.9)"
                    : "rgba(34,34,34,0.65)",
                  backdropFilter: "blur(12px)",
                  border: plan.recommended
                    ? `1px solid rgba(${accentRgb},0.4)`
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: plan.recommended
                    ? `0 0 40px rgba(${accentRgb},0.2), 0 0 80px rgba(${accentRgb},0.08), inset 0 0 40px rgba(${accentRgb},0.03)`
                    : "0 4px 24px rgba(0,0,0,0.3)",
                }}
                data-ocid={`premium.item.${i + 1}`}
              >
                {plan.recommended && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: accentColor,
                      color: "#111111",
                      boxShadow: `0 0 20px rgba(${accentRgb},0.5)`,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `rgba(${accentRgb},0.1)`,
                      border: `1px solid rgba(${accentRgb},0.25)`,
                    }}
                  >
                    <Icon size={20} style={{ color: accentColor }} />
                  </div>
                  <h2
                    className="font-black text-xl tracking-wide mb-1"
                    style={{ color: "#F0F0F0" }}
                  >
                    {plan.name}
                  </h2>
                  <p className="text-xs mb-4" style={{ color: "#9a9a9a" }}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-black text-4xl"
                      style={{
                        color: accentColor,
                        textShadow: plan.recommended
                          ? `0 0 20px rgba(${accentRgb},0.5)`
                          : "none",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: "#9a9a9a" }}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: accentColor }}
                      />
                      <span className="text-sm" style={{ color: "#9a9a9a" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200"
                  style={{
                    background: plan.recommended ? accentColor : "transparent",
                    color: plan.recommended ? "#111111" : accentColor,
                    border: plan.recommended
                      ? "none"
                      : `1px solid rgba(${accentRgb},0.4)`,
                    boxShadow: plan.recommended
                      ? `0 0 20px rgba(${accentRgb},0.4)`
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.recommended) {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 30px rgba(${accentRgb},0.6)`;
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    if (plan.recommended) {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 20px rgba(${accentRgb},0.4)`;
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                  data-ocid={`premium.button.${i + 1}`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm" style={{ color: "#9a9a9a" }}>
            Have questions?{" "}
            <Link
              to="/support"
              className="transition-colors duration-200 underline"
              style={{ color: theme.accent }}
              data-ocid="premium.link"
            >
              Visit our Support page
            </Link>{" "}
            or join our Discord.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
