import React from "react";
import data from "./data/dataMahasiswa.json";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <Profile profile={data.profile} />
        <div className="mt-6 space-y-6">
          <Skills skills={data.skills} />
          <Experiences experiences={data.experiences} />
        </div>
      </div>
    </div>
  );
}
