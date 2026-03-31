import { useState } from "react";
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ListItem {
  title: string;
  subtitle?: string;
  content: ReactNode;
}

interface ExpandableListProps {
  heading: string;
  items: ListItem[];
}

export default function ExpandableList({ heading, items }: ExpandableListProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">{heading}</h2>
      {expanded === null ? (
        items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <div onClick={() => setExpanded(index)} className="cursor-pointer">
              <Card className="bg-zinc-800/80 border-white group hover:border-pink-300 transition-colors">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-300">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-zinc-400">{item.subtitle}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-zinc-800/80 border-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-white">
                  {items[expanded].title}
                </h3>
                <button
                  className="text-sm text-white hover:text-pink-300 hover:underline cursor-pointer"
                  onClick={() => setExpanded(null)}
                >
                  ← back
                </button>
              </div>
              {items[expanded].content}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </section>
  );
}
