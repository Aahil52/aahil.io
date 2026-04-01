import ExpandableList from "@/components/ExpandableList";
import { projects } from "@/data/projects";

export default function Projects() {
  return <ExpandableList heading="projects" items={projects} basePath="/projects" />;
}
