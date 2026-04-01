import { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ListItem {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  content: ReactNode;
  expandable?: boolean;
}

interface ExpandableListProps {
  heading: string;
  items: ListItem[];
  basePath: string;
}

export default function ExpandableList({ heading, items, basePath }: ExpandableListProps) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const expandedItem = slug ? (items.find(item => item.slug === slug) ?? null) : null;

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">{heading}</h2>
      {expandedItem === null ? (
        items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <div
              onClick={() => item.expandable !== false && navigate(`${basePath}/${item.slug}`)}
              className={item.expandable !== false ? "cursor-pointer" : "cursor-default"}
            >
              <Card className={`bg-zinc-800/80 border-white transition-colors ${item.expandable !== false ? "group hover:border-pink-300" : ""}`}>
                <CardContent className="p-6 space-y-2">
                  <h3 className={`text-xl font-semibold text-white ${item.expandable !== false ? "group-hover:text-pink-300" : ""}`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-zinc-300">{item.subtitle}</p>
                  )}
                  {item.date && (
                    <p className="text-xs text-zinc-400">{item.date}</p>
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
                  {expandedItem.title}
                </h3>
                <button
                  className="text-sm text-white hover:text-pink-300 hover:underline cursor-pointer"
                  onClick={() => navigate(basePath)}
                >
                  ← back
                </button>
              </div>
              {expandedItem.content}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </section>
  );
}
