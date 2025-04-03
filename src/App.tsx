import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Blog from "./sections/Blog";
import cherryBlossoms from "./assets/cherryBlossoms.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div
      className="min-h-screen text-white px-6 py-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${cherryBlossoms})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "soft-light",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/35 z-0"></div>
      <div className="relative max-w-4xl mx-auto space-y-16 z-10">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold leading-tight">hey, i’m aahil</h1>
          <p className="text-lg text-zinc-300">engineer • builder • lifelong learner</p>
          <Navbar setActiveSection={setActiveSection} />
        </motion.header>

        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Home />
            </motion.section>
          )}

          {activeSection === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.section>
          )}

          {activeSection === "blog" && (
            <motion.section
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Blog />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
