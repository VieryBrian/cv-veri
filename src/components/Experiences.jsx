import React from "react";

function ExperienceItem({ exp }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{exp.judul}</h3>
          <div className="text-sm text-slate-500">{exp.instansi} • {exp.periode}</div>
        </div>
        <div>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{exp.type}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-700">{exp.deskripsi}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exp.tags.map((t, idx) => (
          <span key={idx} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experiences({ experiences }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((e, i) => (
          <ExperienceItem key={i} exp={e} />
        ))}
      </div>
    </section>
  );
}
