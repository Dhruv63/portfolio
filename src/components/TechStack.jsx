import React from 'react';

export default function TechStack() {
  const categories = [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5 / CSS3"]
    },
    {
      label: "Frameworks & Backend",
      items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"]
    },
    {
      label: "Data & Storage",
      items: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "OpenSearch"]
    },
    {
      label: "Cloud & Applied AI",
      items: ["AWS (EC2, S3)", "Docker", "Linux / Ubuntu", "RAG & Embeddings", "CI / CD Pipelines"]
    }
  ];

  return (
    <section id="stack" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            Technical Stack
          </h2>
          <p className="text-xs text-mineral mt-1">
            Technologies and tooling deployed across production platforms and research.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-2.5">
              <h3 className="text-xs font-medium text-white/90">
                {cat.label}
              </h3>
              <ul className="space-y-1.5 text-xs text-mineral">
                {cat.items.map((item) => (
                  <li key={item} className="text-mineral hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
