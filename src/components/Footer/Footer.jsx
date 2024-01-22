// import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
function Footer() {
  return (
    <div className="bg-gray-800 text-white ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5 ">
          {/* first col */}
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold text-left ">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">best update</span>{" "}
              straight straight to your inbox
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] incline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2  border-r-0 "
                placeholder="Email"
              />
              <button className="primary-button">OK</button>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker />
                    <p>CozyDev Abuja, Nigeria</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdMessage />
                    <p>usohps@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCall />
                    <p>+2348062268744</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className=" p-4 border-t-2 border-gray-400 md:flex justify-between items-center">
            <span className="text-sm text-gray-400">
              copyright &copy; 2024 by CozyDev
            </span>
            <div className="flex items-center gap-4 justify-center">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="" /> */}
      {/* buttom section */}
    </div>
  );
}

export default Footer;
