import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">about</h2>
        <Card className="bg-zinc-800/80 border-white transition-colors duration-300">
        <CardContent className="p-6 space-y-6">
            <p className="text-zinc-300 text-lg leading-relaxed">
            I'm Aahil, a second-year computer engineering student and an aspiring technologist at the University of Georgia obsessed with building beautiful, functional things. I’m fascinated by the intersection of hardware and intelligence, and my projects are how I explore that.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
            I thrive on immersing myself in unfamiliar technology and quickly acquiring the skills necessary to solve the wonderful challenges that emerge. For example, when building this site, I vibecoded my way into deep disorientation, but managed to skillfully engineer my way out.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
            Whether it's wearable AI, personal knowledge systems, or vibe-based music discovery, I’m drawn to ideas that are technical but human. Ideas that bridge logic and intuition. Most of what I build starts as a question, a frustration, or even an epiphany sparked by seemingly unrelated study. I rarely know everything I need to make it a real, but I can learn anything if the idea is cool enough.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
            Outside engineering, you’ll find me training to failure at my favorite bodybuilding gym, climbing trees with friends, or cooking a surprisingly decent meal in a college dorm kitchen. I have a soft spot for cherry blossoms, elegant design, and anything that blends form with function.
            </p>
        </CardContent>
        </Card>
    </section>
  );
}