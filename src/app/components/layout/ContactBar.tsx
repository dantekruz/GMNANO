import Image from "next/image";

export default function ContactBar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">

        {/* Left: Address */}
        <div className="md:block text-[#0e5b9b]">
          3720 Spectrum Blvd., Suite 125, Tampa, FL
        </div>

        {/* Right: Email */}
        <div className="flex items-center gap-2 text-[#0e5b9b]">
          
          <Image
            src="/icons/email.svg"
            alt="email"
            width={16}
            height={16}
          />

          <span className="hover:opacity-70 transition cursor-pointer">
            info@gm.bio
          </span>

        </div>

      </div>
    </div>
  );
}