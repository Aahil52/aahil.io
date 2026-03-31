export const projects = [
  {
    title: "RepIQ",
    subtitle: "An in-progress wearable AI system designed to estimate reps until muscular failure using EMG and IMU data. I'm currently building the BLE data pipeline and beginning to collect labeled training data with custom hardware.",
    content: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          An in-progress wearable AI system designed to estimate reps until muscular failure using EMG and IMU data.
          Currently building the BLE data pipeline and beginning to collect labeled training data with custom hardware.
        </p>
        <a
          href="https://repiq.fit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
        >
          Visit repiq.fit →
        </a>
      </>
    )
  },
  {
    title: "Anamnesis",
    subtitle: "A personal semantic memory tool. It indexes past conversations with AI chatbots like ChatGPT using retrieval-augmented generation (RAG) to surface meaningful ideas and self-reflections.",
    content: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          A personal semantic memory tool. It indexes past conversations with AI chatbots like ChatGPT using
          retrieval-augmented generation (RAG) to surface meaningful ideas and self-reflections.
          Still experimenting with how to best chunk and contextualize memory.
        </p>
        <a
          href="https://anamnes.is"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
        >
          Visit anamnes.is →
        </a>
      </>
    )
  },
  {
    title: "VibeVector",
    subtitle: "A conceptual music recommendation engine that maps songs into a vibe space using high-dimensional embeddings. The goal is to enable genre-free, emotionally resonant discovery.",
    content: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          A conceptual music recommendation engine that maps songs into a vibe space using high-dimensional embeddings.
          The goal is to enable genre-free, emotionally resonant discovery — exploring based on how a song feels, not what it's labeled as.
        </p>
        <a
          href="https://vibevector.space"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
        >
          Visit vibevector.space →
        </a>
      </>
    )
  }
];
