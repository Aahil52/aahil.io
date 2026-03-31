import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  return (
    <div>
      <h1 className="text-5xl font-bold leading-tight">hey, i’m aahil</h1>
      <p className="text-lg text-zinc-300">engineer • builder • lifelong learner</p>
      <div className="flex space-x-4">
        <a href="mailto:lakhaniaahil@uga.edu">
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Mail className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://github.com/aahil52" target="_blank">
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Github className="h-5 w-5" />
          </Button>
        </a>
      </div>
      <nav className="flex space-x-6 mt-6 text-sm font-medium text-zinc-300">
        <button onClick={() => setActiveSection("home")} className="cursor-pointer">
          home
        </button>
        <button onClick={() => setActiveSection("about")} className="cursor-pointer">
          about
        </button>
        <button onClick={() => setActiveSection("blog")} className="cursor-pointer">
          blog
        </button>
      </nav>
    </div>
  );
}
