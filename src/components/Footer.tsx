import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] text-sm text-gray-800  px-4 py-10">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Logo + Copyright */}
        <div className="text-3xl font-semibold text-center mb-2 uppercase"><Link href="/" className="cursor-pointer" title="Chroniq Now">Chroniq Now</Link></div>
        <p className="text-xs text-gray-600 text-center mb-6">
          © 2025 Chroniq Now Media LLC. All Rights Reserved.
        </p>

        {/* Divider line for mobile */}
        <div className="block md:hidden h-px bg-gray-300 w-4/5 mx-auto mb-6" />

        {/* Links section */}
        <div className="flex flex-col  md:flex-row md:flex-wrap md:justify-center gap-y-4 gap-x-6 text-center md:text-left text-sm">
          <div>AdChoices</div>
          <div>Privacy Statement</div>
          <div>Your Privacy Choices</div>
          <div>Cookie Preferences</div>
          <div>Digital Terms of Sale</div>
          <div>Terms of Service</div>
          <div>Contact Us</div>
          <div>Send Us Feedback</div>
          <div>Report a Security Issue</div>
          <div>Jobs At Chroniq</div>
          <div>Reprints & Permissions</div>
          <div>Chroniq Press Room</div>
        </div>
      </div>
    </footer>
  );
}
