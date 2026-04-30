import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#324a6d] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <Image
            src="/logo.jpg"
            alt="GM Nanotherapeutics"
            width={200}
            height={60}
            className="mb-4"
          />
          <p className="text-[#324a6d] text-sm leading-relaxed">
            Advancing nanotechnology for next-generation medicine and precision drug delivery.
          </p>
        </div>

        {/* QUICK LINKS (from your HTML) */}
        <div>
          <h3 className="font-semibold mb-4 text-[#324a6d]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm text-[#324a6d]/70">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/pipeline">Pipeline</Link>
            <Link href="/partnerships">Partnerships</Link>
            <Link href="/team">Team</Link>
            <Link href="/investor">Investor Relation</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4 text-[#324a6d]">
            Get In Touch
          </h3>

          <div className="text-sm text-[#324a6d] space-y-3">
            <p>
              <span className="text-[#324a6d]">Email:</span> info@gm.bio
            </p>

            <p>
              <span className="text-[#324a6d]">Address:</span><br />
              3720 Spectrum Boulevard <br />
              Suite 125 <br />
              Tampa, FL 33612
            </p>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full h-50 rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Tampa%2C%20Florida&t=m&z=15&output=embed&iwloc=near"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#0e5b9b] border-t border-white/10 text-center py-4 text-white text-md font-bold">
        © 2026 GM Nanotherapeutics. All rights reserved.
      </div>

    </footer>
  );
}