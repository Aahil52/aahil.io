import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.webp";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-white overflow-hidden hidden sm:block">
        <img
          src={headshot}
          alt="Aahil Lakhani"
          className="w-full h-full object-cover scale-175 translate-y-8 -translate-x-6"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold leading-tight">hey, i'm aahil</h1>
        <p className="text-lg text-zinc-100">sensors • signal chains • systems</p>
      </div>
      <div className="flex space-x-4 mt-2">
        <a href="mailto:aahil@gatech.edu">
          <Button variant="ghost" size="icon" className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">
            <Mail className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://github.com/aahil52" target="_blank">
          <Button variant="ghost" size="icon" className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">
            <Github className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/aahillakhani/" target="_blank">
          <Button variant="ghost" size="icon" className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">
            <Linkedin className="h-5 w-5" />
          </Button>
        </a>
      </div>
      <nav className="flex space-x-6 mt-6 text-sm font-medium text-white">
        <button onClick={() => navigate("/about")} className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">about</button>
        <button onClick={() => navigate("/career")} className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">career</button>
        <button onClick={() => navigate("/projects")} className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">projects</button>
        <button onClick={() => navigate("/blog")} className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">blog</button>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-pink-300 hover:underline transition-colors">resume</a>
      </nav>
    </div>
  );
}
