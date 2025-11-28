import React from "react";

export default function Profile({ profile }) {
  return (
    <header className="bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-2xl p-6 shadow-lg flex items-center gap-6">
      <img
        src={profile.foto}
        alt={profile.nama}
        className="w-28 h-28 rounded-xl object-cover border-4 border-white"
      />
      <div>
        <h1 className="text-2xl font-bold">{profile.nama}</h1>
        <p className="text-sm">{profile.prodi} • Angkatan {profile.angkatan}</p>
        <div className="mt-3 text-sm">
          <p>{profile.nim} • {profile.lokasi} • <span>{profile.bio}</span></p>
        </div>
      </div>
    </header>
  );
}
