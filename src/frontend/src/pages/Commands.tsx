import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const commandCategories = [
  {
    name: "Moderation",
    color: "#FF6B6B",
    commands: [
      {
        name: "/ban",
        description:
          "Ban a user from the server with an optional reason and duration.",
      },
      { name: "/kick", description: "Remove a user from the server." },
      {
        name: "/mute",
        description: "Temporarily restrict a user from speaking.",
      },
      { name: "/warn", description: "Issue an official warning to a user." },
      { name: "/purge", description: "Bulk delete messages in a channel." },
      { name: "/slowmode", description: "Set a channel slowmode delay." },
    ],
  },
  {
    name: "Antinuke",
    color: "#9B8EF0",
    commands: [
      {
        name: "/antinuke enable",
        description: "Enable server protection against nuke attacks.",
      },
      {
        name: "/antinuke disable",
        description: "Disable antinuke protection.",
      },
      {
        name: "/antinuke whitelist",
        description: "Add a user or bot to the antinuke whitelist.",
      },
      {
        name: "/antinuke settings",
        description: "View current antinuke configuration.",
      },
    ],
  },
  {
    name: "Verification",
    color: "#4ECDC4",
    commands: [
      {
        name: "/verification setup",
        description: "Configure the verification system.",
      },
      {
        name: "/verification role",
        description: "Set the role given after verification.",
      },
      {
        name: "/verification type",
        description: "Change verification type (button, captcha, reaction).",
      },
    ],
  },
  {
    name: "Utility",
    color: "#FFE66D",
    commands: [
      {
        name: "/afk",
        description: "Set your AFK status with an optional message.",
      },
      { name: "/userinfo", description: "View detailed info about a user." },
      {
        name: "/serverinfo",
        description: "Display server statistics and info.",
      },
      {
        name: "/avatar",
        description: "Get a high-resolution copy of a user's avatar.",
      },
      { name: "/remind", description: "Set a reminder for a future time." },
      { name: "/ping", description: "Check the bot's response latency." },
    ],
  },
  {
    name: "Welcome",
    color: "#A8EDEA",
    commands: [
      { name: "/welcome setup", description: "Configure the welcome system." },
      {
        name: "/welcome message",
        description: "Set the welcome message template.",
      },
      {
        name: "/welcome channel",
        description: "Set the channel for welcome messages.",
      },
      { name: "/welcome test", description: "Send a test welcome message." },
    ],
  },
  {
    name: "Tickets",
    color: "#C7B8EA",
    commands: [
      { name: "/ticket setup", description: "Set up the ticket system panel." },
      { name: "/ticket close", description: "Close an open support ticket." },
      {
        name: "/ticket transcript",
        description: "Save a ticket transcript before closing.",
      },
      { name: "/ticket add", description: "Add a user to a ticket channel." },
    ],
  },
];

export default function Commands() {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  const filtered = commandCategories
    .map((cat) => ({
      ...cat,
      commands: cat.commands.filter(
        (cmd) =>
          cmd.name.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.commands.length > 0);

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
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: theme.accent }}
          >
            Reference
          </p>
          <h1
            className="font-black text-4xl md:text-6xl tracking-tight mb-4"
            style={{ color: "#F0F0F0" }}
          >
            Commands
          </h1>
          <p style={{ color: "#9a9a9a" }}>
            Complete list of all Dracon slash commands.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-10 max-w-md mx-auto"
        >
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "#9a9a9a" }}
          />
          <input
            type="text"
            placeholder="Search commands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: "rgba(34,34,34,0.65)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#F0F0F0",
            }}
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                `rgba(${theme.rgb},0.4)`;
              (e.currentTarget as HTMLElement).style.boxShadow =
                `0 0 0 2px rgba(${theme.rgb},0.1)`;
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
            data-ocid="commands.search_input"
          />
        </motion.div>

        {/* Categories */}
        <div className="space-y-8">
          {filtered.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h2
                  className="font-bold text-sm uppercase tracking-widest"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.commands.map((cmd, i) => (
                  <div
                    key={cmd.name}
                    className="p-4 rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(34,34,34,0.5)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        `rgba(${theme.rgb},0.2)`;
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(34,34,34,0.8)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(34,34,34,0.5)";
                    }}
                    data-ocid={`commands.item.${ci * 10 + i + 1}`}
                  >
                    <code
                      className="text-sm font-bold font-mono block mb-1"
                      style={{ color: cat.color }}
                    >
                      {cmd.name}
                    </code>
                    <p className="text-xs" style={{ color: "#9a9a9a" }}>
                      {cmd.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16" data-ocid="commands.empty_state">
              <p style={{ color: "#9a9a9a" }}>
                No commands found matching "{search}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
