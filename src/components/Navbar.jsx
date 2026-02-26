import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-6 h-6 bg-black rounded-sm"></div> */}
          <img className="w-6 h-6" src={logo} alt="logo" />
          <span className="font-semibold text-lg">Nuvantage</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            Services
          </a>
          <a href="#" className="hover:text-black">
            Industries
          </a>
          <a href="#" className="hover:text-black">
            Insights
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
        </nav>

        {/* Button */}
        <button className="bg-black text-white px-5 py-2 rounded-lg text-sm">
          Contact Us
        </button>
      </div>
    </header>
  );
}
