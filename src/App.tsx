import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Career from "./sections/Career";
import Projects from "./sections/Projects";
import cherryBlossoms from "./assets/cherryBlossoms.webp";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname.split('/')[1]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  const [bgReady, setBgReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = cherryBlossoms;
    img.onload = () => setBgReady(true);
  }, []);

  if (!bgReady) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}favicon.ico`}
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
      <div className="fixed inset-0 bg-black/35 -z-10" />
      <div className="relative max-w-4xl mx-auto space-y-16 z-10 px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Navbar />
        </motion.header>
        <AnimatedRoutes />
      </div>
    </div>
  );
}
