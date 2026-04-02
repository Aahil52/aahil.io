import { Card, CardContent } from "@/components/ui/card";

export default function Career() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">career</h2>
      <Card className="bg-zinc-800/80 border-white transition-colors duration-300">
        <CardContent className="p-6 space-y-6">
          <div>
            <p className="text-xl font-semibold text-white mb-3">Now Through Graduation (2025–2028)</p>
            <div className="space-y-3">
              <p className="text-zinc-300 leading-relaxed">
                My immediate priority is getting into real research environments. I'm pursuing undergraduate research through GT's ORS program and reaching out directly to faculty working on MEMS and sensor systems, targeting at least two semesters of lab experience before I graduate. Alongside that I'm targeting R&D internships in analog hardware and sensor systems while also exploring embedded firmware and RTL roles to build out my understanding of the full hardware stack.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                A parallel goal is getting my <a href="/#/projects/river-sense" className="text-white hover:text-pink-300 underline transition-colors">RIVER-SENSE</a> work published. The platform was deployed at the Athens Water Treatment Plant and is targeting submission to <em>Water Research</em>. Seeing this through is both scientifically important and a lesson in what it takes to finish something properly.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                I'm also building a YouTube series around my <a href="/#/projects/accelerometer" className="text-white hover:text-pink-300 underline transition-colors">Macro Electromechanical Accelerometer</a> project. The full arc from a naive question about how MEMS accelerometers work, through 200+ hours of fabrication and failed assumptions, to the accidental discovery that changed the design entirely, and eventually what it takes to make my version hold up against a real accelerometer when tested in a car. Growing up, I was inspired by the absurd projects from StuffMadeHere and the transparent electronics explations from Ben Eater. This is how I pay that forward.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                I expect to graduate in 2028, though a combined BS/MS could extend that by a year.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-white mb-3">Graduate School and Beyond</p>
            <p className="text-zinc-300 leading-relaxed">
              Graduate school is where I go deeper on MEMS, sensor systems, and whatever adjacent areas turn out to matter at the physics-to-information boundary. My long-term target is a principal engineer or research scientist role at a national lab, an instrumentation company, or a deep-tech startup working on something that doesn't fully exist yet.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
