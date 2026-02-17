"use client";

import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-20">
        <Reveal>
          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14">
            <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Halaman ini dibuat biar kamu bisa ngerasain <b>page transition</b> saat pindah route.
              Kamu bisa isi dengan profil, pengalaman, dan link portfolio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link data-magnetic href="/" className="rounded-full bg-white text-black px-6 py-3 font-semibold">
                Back Home
              </Link>
              <Link data-magnetic href="/contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                Go Contact
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
