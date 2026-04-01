import { Card, CardContent } from "@/components/ui/card";

export default function Career() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-white pb-2">career</h2>
      <Card className="bg-zinc-800/80 border-white transition-colors duration-300">
        <CardContent className="p-6 space-y-6">
          <p className="text-zinc-300 leading-relaxed">
            Career content goes here.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
