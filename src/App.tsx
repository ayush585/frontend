import { ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-extrabold text-2xl text-gray-900">
            <span className="text-[#007C6A]">Career</span>
            <span className="text-[#D73F09]">Search</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-gray-900">For Institutions</a>
            <a href="#" className="hover:text-gray-900">For Individuals</a>
            <a href="#" className="hover:text-gray-900">About</a>
          </nav>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#007C6A] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-[#D73F09] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Start Journey
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f2f0f8]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Transform Career <br />
              Development With AI- <br />
              Powered Coaching
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Career Search is your AI-powered guide to discovering opportunities,
              building essential skills, and preparing for the future. Designed to help
              students, professionals, and institutions close skill gaps and improve outcomes.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-[#007C6A] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90"
              >
                Start Your Career Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[#D73F09] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Highlight Text */}
            <p className="mt-6 text-gray-800 text-base">
              <span className="font-bold text-orange-600">90%</span> of learners
              report improved career readiness after using Career Search.
            </p>
          </div>

          {/* Right Side – Illustrations */}
          <div className="flex flex-col gap-6">
            <div className="bg-white shadow rounded-2xl p-6">
              <img
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Illustration"
                className="rounded-lg w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-2xl p-4">
                <img
                  src="/illustration2.png"
                  alt="Build career skills"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="bg-white shadow rounded-2xl p-4">
                <img
                  src="/illustration3.png"
                  alt="Career readiness"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Brand & blurb */}
          <div>
            <div className="flex items-baseline gap-2 font-extrabold text-3xl text-gray-900">
              <span className="text-[#007C6A]">Career</span>
              <span className="text-[#D73F09]">Search</span>
            </div>
            <p className="mt-4 text-gray-700 max-w-sm">
              AI-powered career development for everyone, from students to job‑seekers.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Badges – replace with your images */}
              <img src="/badge1.png" alt="Badge 1" className="h-16 w-auto object-contain" />
              <img src="/badge2.png" alt="Badge 2" className="h-16 w-auto object-contain" />
              <img src="/badge3.png" alt="Badge 3" className="h-16 w-auto object-contain" />
              <img src="/badge4.png" alt="Badge 4" className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* Column: Coach */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Coach</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-gray-900">Sign in</a></li>
              <li><a href="#" className="hover:text-gray-900">Partner</a></li>
              <li><a href="#" className="hover:text-gray-900">About Coach</a></li>
              <li><a href="#" className="hover:text-gray-900">Impact</a></li>
              <li><a href="#" className="hover:text-gray-900">Safety</a></li>
              <li><a href="#" className="hover:text-gray-900">Guidelines for Use</a></li>
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
            </ul>
          </div>

          {/* Column: CareerSearch.org */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">CareerSearch.org</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Team</a></li>
              <li><a href="#" className="hover:text-gray-900">Mission</a></li>
              <li><a href="#" className="hover:text-gray-900">Ask a Question</a></li>
            </ul>
          </div>

          {/* Column: Socials */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect with us</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-gray-900"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900"><Linkedin className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-gray-900"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms and Conditions</a>
            </div>
            <div className="text-center md:text-right">
              <p>© Copyright 2025. All Rights Reserved.</p>
              <p className="mt-1">Career Search is a community project for educational use.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
