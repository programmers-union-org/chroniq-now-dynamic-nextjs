import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white text-sm">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Categories */}
          <div>
            <h3 className="text-base font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-2">
              {[
                { name: "Business", href: "/business" },
                { name: "Politics", href: "/politics" },
                { name: "Health", href: "/health" },
                { name: "Sports", href: "/sports" },
                { name: "Science", href: "/science" },
                { name: "Technology", href: "/technology" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    title={item.name}
                    href={item.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-base font-semibold mb-4">About chroniq now</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              chroniq now delivers trusted journalism across business, politics,
              science, health, and more. Our team is committed to bringing
              credible, fact-based reporting to the global audience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm space-y-1">
              <span className="block">1234 Elm Street, Suite 567</span>
              <span className="block">New York, NY 10001</span>
              <span className="block">Phone: +1 (555) 123-4567</span>
              <span className="block">Email: info@chroniqnow.com</span>
            </p>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-base font-semibold mb-4">Office Hours</h3>
            <p className="text-gray-400 text-sm space-y-1">
              <span className="block">Mon - Fri: 9:00 AM - 6:00 PM</span>
              <span className="block">Saturday: 10:00 AM - 2:00 PM</span>
              <span className="block">Sunday: Closed</span>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-gray-400 text-center sm:text-left">
        <p>© 2025 chroniqnow Media Limited, Nigeria. All rights reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
          <span>Home</span>
          <span>About Us</span>
          <span>Advertise</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
