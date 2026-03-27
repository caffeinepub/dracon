import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
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
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const EASE: Transition["ease"] = [0.16, 1, 0.3, 1] as const;

const CYCLING_WORDS = ["Control", "Protect", "Manage", "Secure", "Automate"];
const BRAND_WORDS = ["Dracon", "Convenience", "Security", "Automation"];

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

const wordVariants: Variants = {
  enter: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

function FeatureCard({
  feature,
  index,
}: { feature: (typeof features)[0]; index: number }) {
  const Icon = feature.icon;
  const { theme } = useTheme();
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
        feature.comingSoon ? "" : "feature-card feature-card-highlight"
      }`}
      style={{
        background: feature.comingSoon ? "transparent" : "rgba(34,34,34,0.65)",
        backdropFilter: feature.comingSoon ? "none" : "blur(12px)",
        border: feature.comingSoon
          ? `1px dashed rgba(${theme.rgb},0.2)`
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: feature.comingSoon ? "none" : "0 4px 24px rgba(0,0,0,0.3)",
        transition:
          "box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: feature.comingSoon
            ? `rgba(${theme.rgb},0.04)`
            : `rgba(${theme.rgb},0.1)`,
          border: `1px solid rgba(${theme.rgb},0.2)`,
          boxShadow: feature.comingSoon
            ? "none"
            : "inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.3)",
          transition: "background 0.3s ease, transform 0.3s ease",
        }}
      >
        <Icon
          size={19}
          style={{
            color: feature.comingSoon ? `rgba(${theme.rgb},0.4)` : theme.accent,
          }}
        />
      </div>
      <h3
        className="text-sm font-bold mb-2"
        style={{
          color: feature.comingSoon ? "rgba(240,240,240,0.4)" : "#F0F0F0",
        }}
      >
        {feature.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: feature.comingSoon ? "rgba(154,154,154,0.4)" : "#9a9a9a",
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const [wordIndex, setWordIndex] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);
  const [typedBrand, setTypedBrand] = useState(BRAND_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charPos, setCharPos] = useState(BRAND_WORDS[0].length);

  useEffect(() => {
    document.title = "Dracon — Control Your Server";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = BRAND_WORDS[brandIndex];
    if (!isDeleting && charPos < target.length) {
      const t = setTimeout(() => {
        setTypedBrand(target.slice(0, charPos + 1));
        setCharPos(charPos + 1);
      }, 60);
      return () => clearTimeout(t);
    }
    if (!isDeleting && charPos === target.length) {
      const t = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(t);
    }
    if (isDeleting && charPos > 0) {
      const t = setTimeout(() => {
        setTypedBrand(target.slice(0, charPos - 1));
        setCharPos(charPos - 1);
      }, 40);
      return () => clearTimeout(t);
    }
    if (isDeleting && charPos === 0) {
      const next = (brandIndex + 1) % BRAND_WORDS.length;
      setBrandIndex(next);
      setIsDeleting(false);
    }
  }, [brandIndex, isDeleting, charPos]);

  return (
    <div style={{ backgroundColor: "#191919" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 hero-dot-grid"
        style={{ overflow: "hidden" }}
      >
        {/* Ambient radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(${theme.rgb},0.09) 0%, transparent 70%)`,
            zIndex: 0,
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
            background: `radial-gradient(circle, rgba(${theme.rgb},0.06) 0%, transparent 70%)`,
            filter: "blur(40px)",
            zIndex: 0,
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
            background: `radial-gradient(circle, rgba(${theme.rgb},0.05) 0%, transparent 70%)`,
            filter: "blur(50px)",
            zIndex: 0,
          }}
        />

        {/* Particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(${theme.rgb},0.4)`,
              left: p.left,
              top: p.top,
              animation: `particle-drift ${p.duration} linear ${p.delay} infinite`,
              zIndex: 0,
            }}
          />
        ))}

        {/* Hero content */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl"
        >
          <motion.div variants={heroItem}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 animate-badge-pulse"
              style={{
                background: `rgba(${theme.rgb},0.08)`,
                border: `1px solid rgba(${theme.rgb},0.25)`,
                color: theme.accent,
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
                style={{ background: theme.accent }}
              />
              Now Available — Free &amp; Premium Plans
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-black leading-none mb-5"
            style={{
              color: "#F0F0F0",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            {/* Cycling word container */}
            <span
              className="inline-flex items-center justify-center"
              style={{
                position: "relative",
                overflow: "hidden",
                verticalAlign: "bottom",
                minWidth: "8ch",
                height: "1.15em",
                display: "inline-block",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_WORDS[wordIndex]}
                  variants={wordVariants}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                  style={{
                    color: theme.accent,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Your Server
            <br />
            with{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${theme.accent} 0%, #ffffff 80%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                paddingBottom: "0.05em",
                position: "relative",
              }}
            >
              {typedBrand}
              <span
                style={{
                  WebkitTextFillColor: theme.accent,
                  opacity:
                    charPos < BRAND_WORDS[brandIndex].length || isDeleting
                      ? 1
                      : Math.sin(Date.now() / 300) > 0
                        ? 1
                        : 0,
                  animation:
                    !isDeleting && charPos === BRAND_WORDS[brandIndex].length
                      ? "blink 0.7s step-end infinite"
                      : "none",
                }}
              >
                |
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "#9a9a9a", lineHeight: 1.6 }}
          >
            The most powerful Discord bot for complete server control. Featuring{" "}
            <span style={{ color: theme.accent }}>advanced moderation</span>,{" "}
            <span style={{ color: theme.accent }}>real-time protection</span>,
            and seamless setup.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="https://discord.com/oauth2/authorize"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              style={{
                background: theme.accent,
                color: "#111111",
                boxShadow: `0 0 30px rgba(${theme.rgb},0.5), 0 0 60px rgba(${theme.rgb},0.2)`,
                transition: "box-shadow 0.3s ease, background 0.3s ease",
              }}
              whileHover={{
                y: -3,
                boxShadow: `0 0 45px rgba(${theme.rgb},0.7), 0 0 90px rgba(${theme.rgb},0.35)`,
                transition: { type: "spring", stiffness: 280, damping: 18 },
              }}
              whileTap={{ scale: 0.96 }}
              data-ocid="hero.primary_button"
            >
              Add to Discord <ArrowRight size={16} />
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
                className="block px-6 py-3 rounded-xl font-bold text-sm"
                style={{
                  background: "transparent",
                  color: theme.accent,
                  border: `1px solid rgba(${theme.rgb},0.4)`,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    `rgba(${theme.rgb},0.08)`;
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `rgba(${theme.rgb},0.65)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `rgba(${theme.rgb},0.4)`;
                }}
                data-ocid="hero.secondary_button"
              >
                View Commands
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Refined scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 10 }}
        >
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.span
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="text-xs tracking-widest uppercase"
              style={{
                color: "rgba(154,154,154,0.5)",
                letterSpacing: "0.15em",
              }}
            >
              Scroll
            </motion.span>
            <div
              style={{
                width: 1,
                height: 36,
                background: `linear-gradient(to bottom, rgba(${theme.rgb},0.7), transparent)`,
                borderRadius: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Section separator */}
      <div className="px-6">
        <div className="section-sep" />
      </div>

      {/* Features */}
      <section className="py-16 px-6" data-ocid="features.section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <motion.p
              variants={sectionItem}
              className="text-xs font-semibold tracking-widest uppercase mb-4 label-glow"
              style={{ color: theme.accent }}
            >
              Everything You Need
            </motion.p>
            <motion.h2
              variants={sectionItem}
              className="font-black text-2xl md:text-4xl mb-4"
              style={{ color: "#F0F0F0", letterSpacing: "-0.03em" }}
            >
              Powerful Modules
            </motion.h2>
            <motion.p
              variants={sectionItem}
              className="text-sm max-w-xl mx-auto"
              style={{ color: "#9a9a9a" }}
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

      {/* Section separator */}
      <div className="px-6">
        <div className="section-sep" />
      </div>

      {/* Stats */}
      <section className="py-16 px-6" data-ocid="stats.section">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <motion.p
              variants={sectionItem}
              className="text-xs font-semibold tracking-widest uppercase mb-4 label-glow"
              style={{ color: theme.accent }}
            >
              By The Numbers
            </motion.p>
            <motion.h2
              variants={sectionItem}
              className="font-black text-2xl md:text-4xl mb-4"
              style={{ color: "#F0F0F0", letterSpacing: "-0.03em" }}
            >
              Trusted by <span style={{ color: theme.accent }}>500+</span>{" "}
              Servers
            </motion.h2>
            <motion.p
              variants={sectionItem}
              className="text-sm max-w-md mx-auto"
              style={{ color: "#9a9a9a" }}
            >
              From small communities to large servers, Dracon has you covered.
            </motion.p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: EASE,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 260, damping: 20 },
                  }}
                  className="flex flex-col items-center text-center p-8 rounded-2xl"
                  style={{
                    background: "rgba(34,34,34,0.65)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `rgba(${theme.rgb},0.1)`,
                      border: `1px solid rgba(${theme.rgb},0.2)`,
                      boxShadow: `0 0 16px rgba(${theme.rgb},0.15)`,
                    }}
                  >
                    <Icon size={20} style={{ color: theme.accent }} />
                  </div>

                  {/* Value — key forces remount on theme change to prevent gradient-clip flash */}
                  <div
                    key={theme.key}
                    className="font-black mb-2"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 2.75rem)",
                      letterSpacing: "-0.03em",
                      background: `linear-gradient(135deg, ${theme.accent} 0%, #ffffff 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#9a9a9a" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section separator */}
      <div className="px-6">
        <div className="section-sep" />
      </div>

      {/* CTA Banner */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h2
              variants={sectionItem}
              className="font-black text-2xl md:text-4xl mb-4"
              style={{ color: "#F0F0F0", letterSpacing: "-0.03em" }}
            >
              Ready to Take Control?
            </motion.h2>
            <motion.p
              variants={sectionItem}
              className="text-sm mb-8"
              style={{ color: "#9a9a9a" }}
            >
              Join 500+ servers already using Dracon to protect and manage their
              communities.
            </motion.p>
            <motion.div variants={sectionItem}>
              <motion.a
                href="https://discord.com/oauth2/authorize"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm"
                style={{
                  background: theme.accent,
                  color: "#111111",
                  boxShadow: `0 0 30px rgba(${theme.rgb},0.5), 0 0 60px rgba(${theme.rgb},0.2)`,
                  transition: "box-shadow 0.3s ease, background 0.3s ease",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: `0 0 45px rgba(${theme.rgb},0.7), 0 0 90px rgba(${theme.rgb},0.35)`,
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
