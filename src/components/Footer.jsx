import React from "react";
import logo from "../assets/arya-logo-3.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Gradient Section */}
      <div className="bg-gradient-to-r from-[#781c3e] to-[#143D87] pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Arya College" className="w-32 mb-3" />
            <p className="mb-4 text-sm max-w-xs">
              Arya College is the Best Engineering College in the entire
              Rajasthan.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm">
                SP-40, RIICO Industrial Area, Kukas, <br />
                Jaipur, Rajasthan, 302028
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Social Media</h4>
              <div className="flex justify-center md:justify-start space-x-4 text-xl">
                <FaFacebookF className="hover:text-red-500 cursor-pointer" />
                <FaInstagram className="hover:text-red-500 cursor-pointer" />
                <FaTwitter className="hover:text-red-500 cursor-pointer" />
                <FaYoutube className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Quick Links + Admissions (side by side on mobile) */}
          <div className="flex flex-col sm:flex-row gap-6 md:contents">
            {/* Quick Links */}
            <div className="sm:w-1/2">
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm [&>li:hover]:text-red-500 [&>li]:cursor-pointer">
                <li>About Us</li>
                <li>News</li>
                <li>Placement</li>
                <li>Contact us</li>
                <li>Blogs</li>
                <li>Resources</li>
                <li>Mail Center</li>
                <li>Google</li>
                <li>Wikipedia</li>
              </ul>
            </div>

            {/* Admissions */}
            <div className="sm:w-1/2">
              <h4 className="font-semibold mb-3">Admissions</h4>
              <ul className="space-y-2 text-sm [&>li:hover]:text-red-500 [&>li]:cursor-pointer">
                <li>Download</li>
                <li>Prospectus</li>
                <li>Admisison</li>
                <li>Procedure</li>
                <li>Fee Structure</li>
                <li>Our Affiliation</li>
                <li>Degree Status</li>
                <li>Bank Loan Assistance</li>
                <li>Industrial Alliances</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>

          {/* Other Links (stacked below in mobile) */}
          <div>
            <h4 className="font-semibold mb-3">Other Links</h4>
            <ul className="space-y-2 text-sm [&>li:hover]:text-red-500 [&>li]:cursor-pointer">
              <li>Top Engineering College in Jaipur</li>
              <li>Best Engineering College in Jaipur</li>
              <li>Best B.Tech College in India</li>
              <li>Best University for B.tech in India</li>
              <li>Best Private University in India for b tech</li>
              <li>Best Private Engineering College in India</li>
              <li>Top 10 Private Engineering College in India</li>
              <li>Bachelor of Technology – B Tech Courses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BottomBar */}
      <div className="bg-white text-center text-sm text-black py-1">
        © Copyright
      </div>
    </footer>
  );
};

export default Footer;
