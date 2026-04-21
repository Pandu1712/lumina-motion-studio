import { createRootRoute, Outlet, ScrollRestoration, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { SmoothScroll } from "@/components/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-xs">Page not found</p>
        <Link to="/" className="mt-8 inline-block btn-amber">Go Home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground selection:bg-amber selection:text-amber-foreground">
        {/* Global Scroll Progress Hairline */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-amber origin-left z-[100]"
          style={{ scaleX }}
        />

        <Outlet />
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  );
}
