import { Link } from "@tanstack/react-router";
import {
  Activity,
  CheckCircle,
  DoorOpen,
  Gavel,
  Layers,
  Plus,
  Server,
  Shield,
  Smile,
  Terminal,
  Ticket,
  Wrench,
} from "lucide-react";
import type { Transition } from "motion/react";
import { type Variants, motion } from "motion/react";

const EASE: Transition["ease"] = [0.16, 1, 0.3, 1] as const;
import { useEffect } from "react";

const features = [
  {
    icon: Shield,
    title: "Antinuke",
    description:
      "Protect your server from raids, mass bans, and malicious bot activity with real-time threat detection.",
  },
  {
    icon: CheckCircle,
    title: "Verification",
    description:
      "Gate your community with customizable verification flows — CAPTCHA, reaction, or button-based.",
  },
  {
    icon: Layers,
    title: "Embed Builder",
    description:
      "Create stunning embedded messages with our visual builder — no coding required.",
  },
  {
    icon: Wrench,
    title: "Utility",
    description:
      "Info commands, AFK status, reminders, and dozens of quality-of-life tools built in.",
  },
  {
    icon: Smile,
    title: "Reaction Roles",
    description:
      "Let members self-assign roles through emoji reactions or interactive button panels.",
  },
  {
    icon: DoorOpen,
    title: "Welcome",
    description:
      "Greet new members with customizable welcome messages, DM cards, and role assignments.",
  },
  {
    icon: Ticket,
    title: "Tickets",
    description:
      "Full-featured support ticket system with categories, transcripts, and staff assignment.",
  },
  {
    icon: Gavel,
    title: "Moderation",
    description:
      "Comprehensive moderation tools — warn, mute, kick, ban, and full audit log.",
  },
  {
    icon: Plus,
    title: "More Coming Soon",
    description:
      "We're constantly adding new features. Stay tuned for the next update.",
    comingSoon: true,
  },
];

const stats = [
  { value: "500+", label: "Servers", icon: Server },
  { value: "50+", label: "Commands", icon: Terminal },
  { value: "99.9%", label: "Uptime", icon: Activity },
];

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: `particle-${i}`,
  left: `${10 + i * 7}%`,
  top: `${20 + (i % 5) * 15}%`,
  duration: `${6 + i * 0.8}s`,
  delay: `${i * 0.5}s`,
}));

// Stagger variants for hero content
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

// Stagger variants for section headings
const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const sectionItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

function FeatureCard({
  feature,
  index,
}: { feature: (typeof features)[0]; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.065,
        ease: EASE,
      }}
      whileHover={
        feature.comingSoon
          ? {}
          : {
              y: -7,
              transition: { type: "spring", stiffness: 260, damping: 20 },
            }
      }
      whileTap={feature.comingSoon ? {} : { scale: 0.985 }}
      className={`relative p-6 rounded-2xl cursor-default ${
        feature.comingSoon ? "" : "feature-card"
      }`}
      style={{
        background: feature.comingSoon ? "transparent" : "rgba(20,24,22,0.65)",
        backdropFilter: feature.comingSoon ? "none" : "blur(12px)",
        border: feature.comingSoon
          ? "1px dashed rgba(120,255,200,0.2)"
          : "1px solid rgba(120,255,200,0.1)",
        boxShadow: feature.comingSoon ? "none" : "0 4px 24px rgba(0,0,0,0.3)",
        transition:
          "box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: feature.comingSoon
            ? "rgba(120,255,200,0.05)"
            : "rgba(0,255,102,0.1)",
          border: "1px solid rgba(0,255,102,0.2)",
          transition: "background 0.3s ease, transform 0.3s ease",
        }}
      >
        <Icon
          size={18}
          style={{
            color: feature.comingSoon ? "rgba(0,255,102,0.4)" : "#00FF66",
          }}
        />
      </div>
      <h3
        className="text-sm font-bold uppercase tracking-wider mb-2"
        style={{
          color: feature.comingSoon ? "rgba(242,246,243,0.4)" : "#F2F6F3",
        }}
      >
        {feature.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: feature.comingSoon ? "rgba(169,183,174,0.4)" : "#A9B7AE",
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Dracon — Control Your Server";
  }, []);

  return (
    <div style={{ backgroundColor: "#0A0D0B" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
        style={{ overflow: "hidden" }}
      >
        {/* Ambient radial glow — slowly pulsing */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,102,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute pointer-events-none rounded-full"
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            width: 300,
            height: 300,
            left: "15%",
            top: "30%",
            background:
              "radial-gradient(circle, rgba(0,255,102,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          className="absolute pointer-events-none rounded-full"
          animate={{ y: [0, 22, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            width: 250,
            height: 250,
            right: "12%",
            top: "20%",
            background:
              "radial-gradient(circle, rgba(0,255,102,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "rgba(0,255,102,0.4)",
              left: p.left,
              top: p.top,
              animation: `particle-drift ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}

        {/* Hero content — staggered */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl"
        >
          <motion.div variants={heroItem}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{
                background: "rgba(0,255,102,0.08)",
                border: "1px solid rgba(0,255,102,0.2)",
                color: "#00FF66",
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ background: "#00FF66" }}
              />
              Now Available — Free &amp; Premium Plans
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-black text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-6 uppercase"
            style={{ color: "#F2F6F3" }}
          >
            Control Your Server
            <br />
            with{" "}
            <span
              style={{
                color: "#00FF66",
                textShadow:
                  "0 0 30px rgba(0,255,102,0.8), 0 0 60px rgba(0,255,102,0.4), 0 0 100px rgba(0,255,102,0.2)",
              }}
            >
              Dracon
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "#A9B7AE", lineHeight: 1.6 }}
          >
            Powerful modules. Clean design. Maximum control.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="https://discord.com/oauth2/authorize"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-sm"
              style={{
                background: "#00FF66",
                color: "#0A0D0B",
                boxShadow:
                  "0 0 30px rgba(0,255,102,0.5), 0 0 60px rgba(0,255,102,0.2)",
                transition: "box-shadow 0.3s ease",
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 0 45px rgba(0,255,102,0.7), 0 0 90px rgba(0,255,102,0.35)",
                transition: { type: "spring", stiffness: 280, damping: 18 },
              }}
              whileTap={{ scale: 0.96 }}
              data-ocid="hero.primary_button"
            >
              Add to Discord
            </motion.a>

            <motion.div
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 280, damping: 18 },
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/commands"
                className="block px-8 py-4 rounded-xl font-bold text-sm"
                style={{
                  background: "transparent",
                  color: "#00FF66",
                  border: "1px solid rgba(0,255,102,0.4)",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(0,255,102,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,255,102,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,255,102,0.4)";
                }}
                data-ocid="hero.secondary_button"
              >
                View Commands
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-xs"
            style={{ color: "rgba(169,183,174,0.5)" }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              width: 1,
              height: 32,
              background:
                "linear-gradient(to bottom, rgba(0,255,102,0.6), transparent)",
              transformOrigin: "top",
            }}
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" data-ocid="features.section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={sectionItem}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00FF66" }}
            >
              Everything You Need
            </motion.p>
            <motion.h2
              variants={sectionItem}
              className="font-black text-3xl md:text-5xl uppercase tracking-tight mb-4"
              style={{ color: "#F2F6F3" }}
            >
              Powerful Modules
            </motion.h2>
            <motion.p
              variants={sectionItem}
              className="text-base max-w-xl mx-auto"
              style={{ color: "#A9B7AE" }}
            >
              Dracon packs enterprise-grade features into a clean, intuitive bot
              your entire team can use.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" data-ocid="stats.section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-2xl p-12"
            style={{
              background: "rgba(20,24,22,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(120,255,200,0.12)",
              boxShadow:
                "0 0 60px rgba(0,255,102,0.06), inset 0 0 60px rgba(0,255,102,0.02)",
            }}
          >
            <motion.div
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.p
                variants={sectionItem}
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#00FF66" }}
              >
                By The Numbers
              </motion.p>
              <motion.h2
                variants={sectionItem}
                className="font-black text-3xl md:text-4xl uppercase"
                style={{ color: "#F2F6F3" }}
              >
                Stats
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: EASE,
                    }}
                    className="text-center"
                  >
                    <motion.div
                      className="flex items-center justify-center mb-3"
                      animate={{ opacity: [0.5, 0.9, 0.5] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "rgba(0,255,102,0.7)" }}
                      />
                    </motion.div>
                    <div
                      className="font-black text-5xl md:text-6xl mb-2"
                      style={{
                        color: "#00FF66",
                        textShadow:
                          "0 0 30px rgba(0,255,102,0.6), 0 0 60px rgba(0,255,102,0.3)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: "#A9B7AE" }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h2
              variants={sectionItem}
              className="font-black text-3xl md:text-5xl uppercase tracking-tight mb-4"
              style={{ color: "#F2F6F3" }}
            >
              Ready to Take Control?
            </motion.h2>
            <motion.p
              variants={sectionItem}
              className="text-base mb-8"
              style={{ color: "#A9B7AE" }}
            >
              Join 500+ servers already using Dracon to protect and manage their
              communities.
            </motion.p>
            <motion.div variants={sectionItem}>
              <motion.a
                href="https://discord.com/oauth2/authorize"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-sm"
                style={{
                  background: "#00FF66",
                  color: "#0A0D0B",
                  boxShadow:
                    "0 0 30px rgba(0,255,102,0.5), 0 0 60px rgba(0,255,102,0.2)",
                  transition: "box-shadow 0.3s ease",
                }}
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 0 45px rgba(0,255,102,0.7), 0 0 90px rgba(0,255,102,0.35)",
                  transition: { type: "spring", stiffness: 280, damping: 18 },
                }}
                whileTap={{ scale: 0.96 }}
                data-ocid="cta.primary_button"
              >
                Add Dracon to Discord — It's Free
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
