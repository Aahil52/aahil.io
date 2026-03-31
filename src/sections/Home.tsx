import ExpandableList from "@/components/ExpandableList";
import { projects } from "@/data/projects";

export default function Home() {
  return <ExpandableList heading="projects" items={projects} />;
}
