import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">about</h2>
      <Card className="bg-zinc-800/80 border-white transition-colors duration-300">
        <CardContent className="p-6 space-y-6">
          <p className="text-zinc-300 leading-relaxed">
            I'm Aahil, a third-year in electrical engineering at Georgia Tech who builds sensors and the signal chains that make them useful. My work lives at the boundary between physics and information: figuring out how to turn a physical phenomenon into a clean, interpretable electrical signal, and then making that signal useful.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Most of what I build starts as a question, a frustration, or even an epiphany sparked by seemingly unrelated study. I wanted to understand how MEMS accelerometers actually work, so naturally I spent 200+ hours building one at macro scale from PLA and copper-foil tape. Along the way I discovered that driving an instrumentation amplifier past its bandwidth accidentally produced the demodulation behavior I needed. That kind of unintuitive insight is what drives my obsessive curiosity and allows me to sit with confusion long enough to get through the hardest problems.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Outside the lab, you'll find me training to failure at my favorite bodybuilding gym, planning my next backpacking trip, or stealing azaleas from campus. I have a soft spot for flowers, elegant design, and anything that blends form with function.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
