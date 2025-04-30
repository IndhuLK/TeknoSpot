import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
  import Logo from "../assets/Images/Ts-Logo.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-200">
      <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4 w-32">
            <img src={Logo} alt="TeknoSpot Logo" className="w-full h-full" />
          </div>
          <p className="text-sm leading-relaxed">
            We understand the power of user experience design and employ cutting‑edge strategies to make your website, application intuitive, engaging, and downright addictive.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Services", "Blog"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-gray-900 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-sm mb-2">No.42, 7th Cross, Arunachala Nagar, Crawford, Trichy –12</p>
            <a href="tel:+917604921773" className="text-sm hover:text-gray-900 transition">
              +91 76049 21773
            </a>
          </div>
          <div className="mt-6 flex space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="/"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <Icon className="w-4 h-4 text-gray-600" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <p className="text-center text-sm text-gray-400 py-4">
          © 2025 Copyright by Teknospot. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer