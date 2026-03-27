import { Link } from "@tanstack/react-router";
import { Building, Check, Crown, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for small servers getting started.",
    color: "#A9B7AE",
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
    recommended: false,
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$4.99",
    period: "per month",
    description: "For growing servers that need advanced tools.",
    color: "#00FF66",
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
    recommended: true,
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large communities.",
    color: "#C7B8EA",
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
    recommended: false,
  },
];

export default function Premium() {
  return (
    <div
      style={{
        backgroundColor: "#0A0D0B",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(0,255,102,0.06) 0%, transparent 70%)",
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
            style={{ color: "#00FF66" }}
          >
            Pricing
          </p>
          <h1
            className="font-black text-4xl md:text-6xl uppercase tracking-tight mb-4"
            style={{ color: "#F2F6F3" }}
          >
            Premium Plans
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: "#A9B7AE" }}>
            Unlock the full power of Dracon. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl flex flex-col"
                style={{
                  background: plan.recommended
                    ? "rgba(14,24,19,0.9)"
                    : "rgba(20,24,22,0.65)",
                  backdropFilter: "blur(12px)",
                  border: plan.recommended
                    ? "1px solid rgba(0,255,102,0.4)"
                    : "1px solid rgba(120,255,200,0.1)",
                  boxShadow: plan.recommended
                    ? "0 0 40px rgba(0,255,102,0.2), 0 0 80px rgba(0,255,102,0.08), inset 0 0 40px rgba(0,255,102,0.03)"
                    : "0 4px 24px rgba(0,0,0,0.3)",
                }}
                data-ocid={`premium.item.${i + 1}`}
              >
                {plan.recommended && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "#00FF66",
                      color: "#0A0D0B",
                      boxShadow: "0 0 20px rgba(0,255,102,0.5)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${plan.color}18`,
                      border: `1px solid ${plan.color}44`,
                    }}
                  >
                    <Icon size={20} style={{ color: plan.color }} />
                  </div>
                  <h2
                    className="font-black text-xl uppercase tracking-wider mb-1"
                    style={{ color: "#F2F6F3" }}
                  >
                    {plan.name}
                  </h2>
                  <p className="text-xs mb-4" style={{ color: "#A9B7AE" }}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-black text-4xl"
                      style={{
                        color: plan.color,
                        textShadow: plan.recommended
                          ? "0 0 20px rgba(0,255,102,0.5)"
                          : "none",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: "#A9B7AE" }}>
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
                        style={{ color: plan.color }}
                      />
                      <span className="text-sm" style={{ color: "#A9B7AE" }}>
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
                    background: plan.recommended ? "#00FF66" : "transparent",
                    color: plan.recommended ? "#0A0D0B" : plan.color,
                    border: plan.recommended
                      ? "none"
                      : `1px solid ${plan.color}66`,
                    boxShadow: plan.recommended
                      ? "0 0 20px rgba(0,255,102,0.4)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.recommended) {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 30px rgba(0,255,102,0.6)";
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    if (plan.recommended) {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 20px rgba(0,255,102,0.4)";
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
          <p className="text-sm" style={{ color: "#A9B7AE" }}>
            Have questions?{" "}
            <Link
              to="/support"
              className="transition-colors duration-200 underline"
              style={{ color: "#00FF66" }}
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
