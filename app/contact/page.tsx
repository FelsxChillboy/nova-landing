"use client";

import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-20">
        <Reveal>
          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14">
            <h1 className="text-4xl md:text-5xl font-semibold">Contact</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Ini contoh contact page. Kamu bisa ganti jadi form beneran (API route / email service).
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-white/60 text-sm">Email</div>
                <div className="mt-2 font-semibold">yourname@email.com</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-white/60 text-sm">Social</div>
                <div className="mt-2 font-semibold">@yourhandle</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton className="rounded-full bg-white text-black px-6 py-3 font-semibold">
                Send Message
              </MagneticButton>
              <Link data-magnetic href="/" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                Back Home
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
