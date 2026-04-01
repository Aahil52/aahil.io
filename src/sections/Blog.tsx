import ExpandableList from "@/components/ExpandableList";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return <ExpandableList heading="blog" items={blogPosts} basePath="/blog" />;
}
