import React from "react";

// In this environment, we use standard <a> tags instead of Next.js's Link component.
// We've also replaced the react-icons import with an inline SVG for compatibility.

const BrandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block w-6 h-6 mr-2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white">
      {/* Green strip */}
      <div className="h-4 bg-[#34967C]"></div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Logo and description */}
          <div className="mb-8">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white flex items-center">
                <BrandIcon /> MARINI
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our project is driven by our passion for fashion. We are a team of
              creatives and fashion enthusiasts who have always dreamed of
              launching our own brand. For us, fashion is not just clothing its
              an expression of identity, a way to tell stories, and a means to
              connect people through unique and innovative styles. Our mission is
              to bring you fashionable pieces at accessible prices, ensuring that
              elegance is within reach for everyone.
            </p>
          </div>

          {/* Navigation sections - stacked vertically */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/apartments-dubai"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Apartments in Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="/hotels-new-york"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Hotels in New York
                  </a>
                </li>
                <li>
                  <a
                    href="/villa-spain"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Villa in Spain
                  </a>
                </li>
                <li>
                  <a
                    href="/mansion-indonesia"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Mansion in Indonesia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/customers"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="/brand"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/support"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/cancel-booking"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Cancel booking
                  </a>
                </li>
                <li>
                  <a
                    href="/refunds"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Refunds Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden lg:hidden md:block">
          {/* Logo and description */}
          <div className="mb-8">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white">alx</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                Our project is driven by our passion for fashion. We are a team
                of creatives and fashion enthusiasts who have always dreamed of
                launching our own brand. For us, fashion is not just clothing;
                its an expression of identity, a way to tell stories, and a
                means to connect people through unique and innovative styles. Our
                mission is to bring you fashionable pieces at accessible prices,
                ensuring that elegance is within reach for everyone.
            </p>
          </div>

          {/* Navigation sections - 3 columns */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/apartments-dubai"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Apartments in Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="/hotels-new-york"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Hotels in New York
                  </a>
                </li>
                <li>
                  <a
                    href="/villa-spain"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Villa in Spain
                  </a>
                </li>
                <li>
                  <a
                    href="/mansion-indonesia"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Mansion in Indonesia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/customers"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="/brand"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/support"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/cancel-booking"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Cancel booking
                  </a>
                </li>
                <li>
                  <a
                    href="/refunds"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Refunds Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start">
            {/* Logo and description */}
            <div className="max-w-md">
              <div className="mb-4">
                <div className="text-2xl font-bold text-white flex items-center">
                  <BrandIcon /> MARINI
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our project is driven by our passion for fashion. We are a team
                of creatives and fashion enthusiasts who have always dreamed of
                launching our own brand. For us, fashion is not just clothing;
                its an expression of identity, a way to tell stories, and a
                means to connect people through unique and innovative styles. Our
                mission is to bring you fashionable pieces at accessible prices,
                ensuring that elegance is within reach for everyone.
              </p>
            </div>

            {/* Navigation sections - horizontal layout */}
            <div className="flex space-x-16">
              <div>
                <h3 className="text-white font-semibold mb-4">Explore</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/apartments-dubai"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Polo Shirts
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hotels-new-york"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Brands
                    </a>
                  </li>
                  <li>
                    <a
                      href="/villa-spain"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Stores Locations
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mansion-indonesia"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      New Deliveries
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/career"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="/customers"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Customers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/brand"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Brand
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Help</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/support"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cancel-booking"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Cancel booking
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refunds"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      Refunds Process
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with cancellation notice and legal links */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="mb-6">
            <p className="text-gray-400 text-xs">
              Refunds on cancellations may take more than 24 hours. Details{" "}
              <a
                href="/cancellation-details"
                className="text-[#34967C] hover:underline"
              >
                here
              </a>
            </p>
          </div>

          {/* Legal links - responsive layout */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-6">
              <a
                href="/terms"
                className="text-gray-400 text-xs hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/policy"
                className="text-gray-400 text-xs hover:text-white transition-colors"
              >
                Policy service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 text-xs hover:text-white transition-colors"
              >
                Cookies Policy
              </a>
              <a
                href="/partners"
                className="text-gray-400 text-xs hover:text-white transition-colors hidden lg:inline"
              >
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

 