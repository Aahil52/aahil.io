import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<null | number>(null);

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">blog</h2>
      {expandedPost === null ? (
        blogPosts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6"
            >
              <div
                onClick={() => setExpandedPost(index)}
                className="cursor-pointer"
              >
                <Card className="bg-zinc-800/80 border-white group hover:border-pink-300">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-pink-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{post.date}</p>
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
                  {blogPosts[expandedPost].title}
                </h3>
                <button
                  className="text-sm text-white hover:text-pink-300 hover:underline cursor-pointer"
                  onClick={() => setExpandedPost(null)}
                >
                  ← back to blog
                </button>
              </div>
              {blogPosts[expandedPost].content}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </section>
  );
}