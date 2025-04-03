import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">projects</h2>
      <div className="grid gap-6">
      {projects.map((project, index) => (
        <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            <Card className="bg-zinc-800/80 border-white group hover:border-pink-300 transition-colors">
                <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-pink-300">
                    {project.title}
                </h3>
                <p className="text-zinc-300 mt-2 text-sm leading-relaxed">
                    {project.description}
                </p>
                </CardContent>
            </Card>
            </a>
        </motion.div>
        ))}
      </div>
    </section>
  );
}