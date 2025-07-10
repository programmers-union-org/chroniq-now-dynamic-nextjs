import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white">
      {/* top categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-14 lg:grid-cols-4">
          <div>
            <ul className="space-y-2 leading-snug">
              <li>
                <Link href="#" className="text-xs hover:underline">
                  ALLURE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  AVIATION
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  BUSINESS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  COLUMNS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  CRIME ALERT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  EDITORIAL
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  DISCUSSION
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  EDUCATION
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  E-EDITIONS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 leading-snug">
              <li>
                <Link href="#" className="text-xs hover:underline">
                  ENTERTAINMENT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  ENVIRONMENT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  FEATURES
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  FOREIGN
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  HEALTH
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  HOMES &amp; PROPERTY
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  HUMAN ANGLE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  INSURANCE AND YOU
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  PENSION
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 leading-snug">
              <li>
                <Link href="#" className="text-xs hover:underline">
                  INTERVIEWS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  LABOUR
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  LAW &amp; HUMAN RIGHTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  METRO
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  MOTORING
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  POLITICS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  RELATIONSHIPS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  SPECIAL REPORT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  SPORTS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 leading-snug">
              <li>
                <Link href="#" className="text-xs hover:underline">
                  SWEET CRUDE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  TECHNOLOGY
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  THE ARTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  CARTOONS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  TRAVEL &amp; TOURISM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  VIDEOS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  VIEWPOINT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  WOMAN’S OWN
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs hover:underline">
                  WORSHIP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[#333333] py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-xs">
          <p>© 2025 Vanguard Media Limited, Nigeria</p>
          <div className="hidden lg:flex flex-wrap items-center space-x-2">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Advertise with us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Casino Non AAMS
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Online Casino ohne OASIS
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Casino Uden Rofus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
