import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] text-sm text-gray-800  px-4 py-10">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className="text-3xl font-semibold text-center mb-2 uppercase">
          <Link href="/" className="cursor-pointer" title="Chroniq Now">
            Chroniq Now
          </Link>
        </div>
        <p className="text-xs text-gray-600 text-center mb-6">
          © 2025 Chroniq Now Media LLC. All Rights Reserved.
        </p>

        <div className="block md:hidden h-px bg-gray-300 w-4/5 mx-auto mb-6" />

        <div className="flex flex-col  md:flex-row md:flex-wrap md:justify-center gap-y-4 gap-x-6 text-center md:text-left text-sm">
          <Link href="/">HOME</Link>
      <Link href="/business">BUSINESS</Link>
      <Link href="/health">HEALTH</Link>
      <Link href="/politics">POLITICS</Link>
      <Link href="/science">SCIENCE</Link>
      <Link href="/sports">SPORTS</Link>
      <Link href="/technology">TECHNOLOGY</Link>

        </div>
      </div>
    </footer>
  );
}
