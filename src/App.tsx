import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Blog from "./sections/Blog";
import cherryBlossoms from "./assets/cherryBlossoms.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [bgReady, setBgReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = cherryBlossoms;
    img.onload = () => {
      setBgReady(true);
    }
  }, []);

  if (!bgReady) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <img 
          src="/favicon.ico" 
          alt="Loading..."
          width={100} 
          height={100} 
          className="animate-spin"
        />
      </div>
    );
  }
  

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${cherryBlossoms})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* Fixed black overlay */}
      <div className="fixed inset-0 bg-black/35 -z-10" />

      {/* Foreground content */}
      <div className="relative max-w-4xl mx-auto space-y-16 z-10 px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
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
