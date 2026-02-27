import footerLogo from "../assets/footerLogo.png";
export default function Footer() {
  return (
    <footer className="bg-[#0C1533] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
        {/* footerLogo */}
        <div>
          <img
            src={footerLogo}
            alt="logo"
            className="text-white font-bold text-lg mb-6"
          />
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>News & Insights</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Brochure</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
          <p className="text-sm">hello@nuvantage.com</p>

          <div className="flex gap-4 mt-4 text-white">
            <span>IG</span>
            <span>FB</span>
            <span>IN</span>
            <span>X</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © 2026 Nuvantage. All Rights Reserved.
      </div>
    </footer>
  );
}
