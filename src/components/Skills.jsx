import React from "react";

function SkillBar({ skill }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold">{skill.nama}</div>
          <div className="text-xs text-slate-500">{skill.tahun} tahun • {skill.level}</div>
        </div>
        <div className="text-sm">{skill.percent}%</div>
      </div>
      <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${skill.percent}%`, background: "linear-gradient(90deg,#16a34a,#4ade80)" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <SkillBar key={i} skill={s} />
        ))}
      </div>
    </section>
  );
}
