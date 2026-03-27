import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouter,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Commands from "./pages/Commands";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Premium from "./pages/Premium";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Terms from "./pages/Terms";

function RootLayout() {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0D0B",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const commandsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/commands",
  component: Commands,
});
const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/support",
  component: Support,
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: Privacy,
});
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: Terms,
});
const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partners",
  component: Partners,
});
const premiumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/premium",
  component: Premium,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  commandsRoute,
  supportRoute,
  privacyRoute,
  termsRoute,
  partnersRoute,
  premiumRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
